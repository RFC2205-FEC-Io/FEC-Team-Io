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
  const [currentId, setCurrentId] = useState(66642);
  const [relatedProducts, setRelatedProducts] = useState([])

  /*Helper functions */
  useEffect(() => {getRelatedProductIds()}, [currentId]);

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
      <div>

      </div>
    )
};
export default RelatedProductsCarousel;




//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <span className="cards-wrapper">
//           <RelatedProductCard />
//           <RelatedProductCard />
//           <RelatedProductCard />
//           <RelatedProductCard />
//         </span>
//       </Carousel.Item>
//       <Carousel.Item>
//         <span className="cards-wrapper">
//           <RelatedProductCard />
//           <RelatedProductCard />
//           <RelatedProductCard />
//           <RelatedProductCard />
//         </span>
//       </Carousel.Item>
//       <Carousel.Item>
//         <span className="cards-wrapper">
//           <RelatedProductCard />
//           <RelatedProductCard />
//           <RelatedProductCard />
//           <RelatedProductCard />
//         </span>
//       </Carousel.Item>
//     </Carousel>
//   );
// }


