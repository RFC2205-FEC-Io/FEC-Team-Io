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
  const [relatedProducts, setRelatedProducts] = useState([])

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

   /*Get requests */
  const getRelatedProductIds = () => {
    axios.get(`/related/?product_id=${currentId}`)
    .then(response => {
      const relatedProductIds = response.data;
      return relatedProductIds;
    })
    .then(response => {
      const relatedProductArray = mapInBatches(response, async (id) => {
        return axios.get(`/products/?product_id=${id}`);
      }, 4)
      return relatedProductArray;
    })
    .then(response => {
      console.log('RESPONSE: ', response)
      setRelatedProducts(response)
    })
    .catch(err => {
      console.log('CLIENT SIDE getRelatedProductIds ERROR: ', err)
    })
  }

return (
  <Carousel activeIndex={index} onSelect={handleSelect} breakPoints={breakPoints}>
    <Carousel.Item>
    <span className="cards-wrapper">
      {relatedProducts.slice(0, 4).map((product) => (
        <RelatedProductCard product={product} key={product.data.id} />
      ))}
    </span>

    </Carousel.Item>
  </Carousel>
    )
};
export default RelatedProductsCarousel;