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
  const [relatedIds, setRelatedIds] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedStylesArray, setRelatedStylesArray] = useState([]);
  const [relatedMetaReviewsArray, setRelatedMetaReviewsArray] = useState([]);
  const [productRatingsById, setProductRatingsByIds] = useState({});

  /*Helper functions */
  useEffect(() => {getRelatedProductIds()}, [currentId]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}
  ];

  /*This is a function for mapping when the iteratee is asynchronous (like axios requests)*/
  const mapInBatches = (array, iteratee, batchSize) => {
    const batches = _.groupBy(array, (_v, i) => Math.floor(i/batchSize));
    return Object.values(batches).reduce(async (memo, batch) => [
      ...(await memo),
      ...(await Promise.all(batch.map(iteratee)))
    ], []);
    console.log('Ran mapInBatches');
  };

   //-------- Get requests -----------------//

  /* Get related products ids */
  const getRelatedProductIds = () => {
    axios.get(`/related/?product_id=${currentId}`)
    .then(response => {
      const relatedIds = response.data;
      setRelatedIds(response.data);
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
      setRelatedProducts(response)
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
      setRelatedStylesArray(response)
      return response.map(obj => obj.data.product_id);
    })
     /* Get products' meta review info by their ids */
     .then(response => {
      const relatedMetaReviewsArray = mapInBatches(response, async (id) => {
        return axios.get(`/relatedMetaReviews/?product_id=${id}`);
      }, 4)
      return relatedMetaReviewsArray;
    })
    /* Add related meta review info to state */
    .then(response => {
      setRelatedMetaReviewsArray(response)
      return response;
    })
    /*Average the ratings for each related item*/
    .then(response => {
      const productRatingsByIds = {};
      response.map(obj => productRatingsByIds[obj.data.product_id] = obj.data.ratings)
      return productRatingsByIds
    })
     /* Add product rating info to state */
    .then(response => {
      setProductRatingsByIds(response)
      return response;
    })
    /*Average the rating of each product id */
    .then(response => {
      const productAverageRatingById = {};
        for(var id in response) {
          const totalNumberOfRatings = 0;
          const totalSumOfRatings = 0;
          for (var rating in id) {
            totalNumberOfRatings +=  [id][rating];
            totalSumOfRatings += [id][rating] * rating;
          }
          const averageRating = totalSumOfRatings / totalNumberOfRatings;
          productAverageRatingById[id] = averageRating;
        }
      return productAverageRatingById;
    })
    .then(response => {
      console.log('Response: ', response);
    })

      // return response.map(obj =>
      //  {obj.data.product_id: ((obj.data.ratings[1]) + (obj.data.ratings[2] * 2) + (obj.data.ratings[3] * 3) + (obj.data.ratings[4] * 4) + (obj.data.ratings[5] * 5)) / ((obj.data.ratings[1]) + (obj.data.ratings[2]) + (obj.data.ratings[3]) + (obj.data.ratings[4]) + (obj.data.ratings[5]))}
      //)
    .catch(err => {
      console.log('CLIENT SIDE getRelatedProductIds ERROR: ', err)
    })
  }

  //console.log('relatedProducts: ', relatedProducts);
  //console.log('relatedStylesArray: ', relatedStylesArray);

  // const constructRelatedInfoArray = (productsArray, stylesArray) => {
  //   //set an object for only one product with only info needed for card THEN figure out the array
  //   //for each obj in styles array
  //   for () {
  //     //add the
  //   }

  // }

return (
  <Carousel activeIndex={index} onSelect={handleSelect} breakpoints={breakPoints}>
    <Carousel.Item>
    <span className="cards-wrapper">
      {relatedProducts.map((product) => (
        <RelatedProductCard product={product} key={product.data.id} />
      ))}
    </span>

    </Carousel.Item>
  </Carousel>
    )
};
export default RelatedProductsCarousel;