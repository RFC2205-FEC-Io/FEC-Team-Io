//--------------------- IMPORTS --------------------------------//

import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import _, { groupBy } from 'underscore';
import Carousel from 'react-bootstrap/Carousel';
import RelatedProductCard from './RelatedProductCard.jsx';




//--------------------- MAIN COMPONENT FUNCTION WITH HOOKS------------------------//

const RelatedProductsCarousel = () => {
  /*State*/
  const [index, setIndex] = useState(0);
  const [currentId, setCurrentId] = useState(66645);
  const [relatedProductsInfoSummaries, setRelatedProductsInfoSummaries] = useState([]);

  /*Helper functions */
   useEffect(() => {
    const fetchData =  async () => {
      const data =  await getRelatedProductIds();
      setRelatedProductsInfoSummaries(data);
    };
    fetchData();
   }, []);



const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  /*This is a function for mapping when the iteratee is asynchronous (like axios requests)*/
  const mapInBatches = (array, iteratee, batchSize) => {
    const batches = _.groupBy(array, (_v, i) => Math.floor(i/batchSize));
    return Object.values(batches).reduce(async (memo, batch) => [
      ...(await memo),
      ...(await Promise.all(batch.map(iteratee)))
    ], []);
  };

   //-------- Get requests -----------------//

  /* Get related products ids */
  const getRelatedProductIds = () => {
    var infoSummary = [];
    return axios.get(`/related/?product_id=${currentId}`)
    .then(response => {
      const relatedIds = response.data;
      return relatedIds;
    })
    /* Get related products by their ids */
    .then(response => {
      const relatedProductArray = mapInBatches(response, async (id) => {
        return axios.get(`/products/?product_id=${id}`);
      }, 4)
      return relatedProductArray;
    })
    /* Add related products (array of objs) to state */
    .then(response => {
      const newArr = infoSummary;
      for (var i = 0; i < response.length; i++) {
        newArr.push(response[i].data);
      }
      infoSummary = newArr;
      return response.map(obj => obj.data.id);
    })
    /* Get related styles by their ids */
    .then(response => {
      const relatedStylesArray = mapInBatches(response, async (id) => {
        return axios.get(`/relatedStyles/?product_id=${id}`);
      }, 4)
      return relatedStylesArray;
    })
    /* Add related styles  to state */
    .then(response => {
      const newArr = infoSummary;
      for (var i = 0; i < response.length; i++) {
        newArr[i]['styles'] = response[i].data.results;
      }
      infoSummary = newArr;
      return response.map(obj => obj.data.product_id);
    })
     /* Get products' meta review info by their ids */
     .then(response => {
      const relatedMetaReviewsArray = mapInBatches(response, async (id) => {
        return axios.get(`/relatedMetaReviews/?product_id=${id}`);
      }, 4)
      return relatedMetaReviewsArray;
    })
    /*Average the ratings for each related item*/
    .then(response => {
      const productRatingsByIds = {};
      response.map(obj => productRatingsByIds[obj.data.product_id] = obj.data.ratings)
      return productRatingsByIds
    })
    /*Average the rating of each product id */
    .then(response => {
      const productAverageRatingById = {};
        for(var id in response) {
          const totalNumberOfRatings = 0;
          const totalSumOfRatings = 0;
          for (var rating in response[id]) {
            totalNumberOfRatings +=  Number(response[id][rating]);
            totalSumOfRatings += Number(response[id][rating]) * Number(rating);
          }
          const averageRating = totalSumOfRatings / totalNumberOfRatings;
          productAverageRatingById[id] = averageRating;
        }
      return productAverageRatingById;
    })
    /*Add product average rating by id to state*/
    .then(productAverageRatingById => {
      const newArr = infoSummary;
      for (var i = 0; i < newArr.length; i++) {
        newArr[i]['averageRating'] = productAverageRatingById[newArr[i].id]
        }
      //setAverageProductRatingById(response)
      infoSummary = newArr;
      return infoSummary;
    })
    .catch(err => {
      console.log('CLIENT SIDE getRelatedProductIds ERROR: ', err)
    })
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <span className="cards-wrapper">
          {relatedProductsInfoSummaries.slice(0,4).map((product) => (
            <RelatedProductCard product={product} key={product.id} />
          ))}
        </span>
      </Carousel.Item>
      <Carousel.Item>
        <span className="cards-wrapper">
          {relatedProductsInfoSummaries.slice(4,8).map((product) => (
            <RelatedProductCard product={product} key={product.id} />
          ))}
        </span>
      </Carousel.Item>
    </Carousel>
      )
};
export default RelatedProductsCarousel;