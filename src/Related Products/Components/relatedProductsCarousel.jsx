import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RelatedProductCard from './RelatedProductCard.jsx';

function RelatedProductsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="cards-wrapper">
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="cards-wrapper">
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="cards-wrapper">
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
          <RelatedProductCard />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default RelatedProductsCarousel;

