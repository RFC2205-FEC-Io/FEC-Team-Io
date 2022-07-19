//--------------------- IMPORTS --------------------------------//

import React, { Fragment, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RelatedProductCard from './RelatedProductCard.jsx';


//--------------------- MAIN COMPONENT FUNCTION WITH HOOKS------------------------//

const RelatedProductsCarousel = (props) => {

  if (props.relatedProductsInfoSummaries.length <= 4) {
    return (
      <Carousel activeIndex={props.index} onSelect={props.handleSelect}>
        <Carousel.Item>
          <span className="cards-wrapper">
            {props.relatedProductsInfoSummaries.slice(0,4).map((product) => (
              <RelatedProductCard product={product} CardId={product.id} key={product.id} CardClickHandler={props.CardClickHandler}/>
            ))}
          </span>
        </Carousel.Item>
      </Carousel>
    )
  } else if (props.relatedProductsInfoSummaries.length > 4 && props.relatedProductsInfoSummaries.length <= 8) {
    return (
      <Carousel activeIndex={props.index} onSelect={props.handleSelect}>
      <Carousel.Item>
        <span className="cards-wrapper">
          {props.relatedProductsInfoSummaries.slice(0,4).map((product) => (
            <RelatedProductCard product={product} key={product.id} CardClickHandler={props.CardClickHandler}/>
          ))}
        </span>
      </Carousel.Item>
      <Carousel.Item>
        <span className="cards-wrapper">
          {props.relatedProductsInfoSummaries.slice(4,8).map((product) => (
            <RelatedProductCard product={product} key={product.id} CardClickHandler={props.CardClickHandler}/>
          ))}
        </span>
      </Carousel.Item>
    </Carousel>
    )
  } else if (props.relatedProductsInfoSummaries.length > 8 && props.relatedProductsInfoSummaries.length <= 12) {
    return (
      <Carousel activeIndex={props.index} onSelect={props.handleSelect}>
      <Carousel.Item>
        <span className="cards-wrapper">
          {props.relatedProductsInfoSummaries.slice(0,4).map((product) => (
            <RelatedProductCard product={product} key={product.id} CardClickHandler={props.CardClickHandler}/>
          ))}
        </span>
      </Carousel.Item>
      <Carousel.Item>
        <span className="cards-wrapper">
          {props.relatedProductsInfoSummaries.slice(4,8).map((product) => (
            <RelatedProductCard product={product} key={product.id} CardClickHandler={props.CardClickHandler}/>
          ))}
        </span>
      </Carousel.Item>
      <Carousel.Item>
        <span className="cards-wrapper">
          {props.relatedProductsInfoSummaries.slice(8,12).map((product) => (
            <RelatedProductCard product={product} key={product.id} CardClickHandler={props.CardClickHandler}/>
          ))}
        </span>
      </Carousel.Item>
    </Carousel>
    )
  };

};
export default RelatedProductsCarousel;