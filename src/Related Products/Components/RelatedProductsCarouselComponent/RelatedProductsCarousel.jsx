//--------------------- IMPORTS --------------------------------//

import React, { Fragment, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import RelatedProductCard from './RelatedProductCard.jsx';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #83677B;
  display: flex;
  padding: 20px;
  justify-content: center;
  max-width: 75%;
  max-height: 40%;
`


//--------------------- MAIN COMPONENT FUNCTION WITH HOOKS------------------------//

const RelatedProductsCarousel = (props) => {
  if (props.relatedProductsInfoSummaries.length <= 4) {
    return (
      <Container>
        <Carousel activeIndex={props.index} onSelect={props.handleSelect}>
          <Carousel.Item>
            <span className="cards-wrapper">
              {props.relatedProductsInfoSummaries.slice(0,4).map((product) => (
                <RelatedProductCard product={product} CardId={product.id} key={product.id} StarClickHandler={props.StarClickHandler} CardClickHandler={props.CardClickHandler} ResetCurrentProductId={props.ResetCurrentProductId} />
              ))}
            </span>
          </Carousel.Item>
        </Carousel>
      </Container>
    )
  } else if (props.relatedProductsInfoSummaries.length > 4 && props.relatedProductsInfoSummaries.length <= 8) {
    return (
      <Container>
        <Carousel activeIndex={props.index} onSelect={props.handleSelect} interval={null}>
          <Carousel.Item>
            <span className="cards-wrapper">
              {props.relatedProductsInfoSummaries.slice(0,4).map((product) => (
                <RelatedProductCard product={product} key={product.id} StarClickHandler={props.StarClickHandler} CardClickHandler={props.CardClickHandler} ResetCurrentProductId={props.ResetCurrentProductId}/>
              ))}
            </span>
          </Carousel.Item>
          <Carousel.Item>
            <span className="cards-wrapper">
              {props.relatedProductsInfoSummaries.slice(4,8).map((product) => (
                <RelatedProductCard product={product} key={product.id} StarClickHandler={props.StarClickHandler} CardClickHandler={props.CardClickHandler} ResetCurrentProductId={props.ResetCurrentProductId}/>
              ))}
            </span>
          </Carousel.Item>
       </Carousel>
      </Container>
    )
  } else if (props.relatedProductsInfoSummaries.length > 8 && props.relatedProductsInfoSummaries.length <= 12) {
    return (
    <Container>
      <Carousel activeIndex={props.index} onSelect={props.handleSelect}>
        <Carousel.Item>
          <span className="cards-wrapper">
            {props.relatedProductsInfoSummaries.slice(0,4).map((product) => (
              <RelatedProductCard product={product} key={product.id} StarClickHandler={props.StarClickHandler} CardClickHandler={props.CardClickHandler} ResetCurrentProductId={props.ResetCurrentProductId}/>
            ))}
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="cards-wrapper">
            {props.relatedProductsInfoSummaries.slice(4,8).map((product) => (
              <RelatedProductCard product={product} key={product.id} StarClickHandler={props.StarClickHandler} CardClickHandler={props.CardClickHandler} ResetCurrentProductId={props.ResetCurrentProductId}/>
            ))}
          </span>
        </Carousel.Item>
        <Carousel.Item>
          <span className="cards-wrapper">
            {props.relatedProductsInfoSummaries.slice(8,12).map((product) => (
              <RelatedProductCard product={product} key={product.id} StarClickHandler={props.StarClickHandler} CardClickHandler={props.CardClickHandler} ResetCurrentProductId={props.ResetCurrentProductId}/>
            ))}
          </span>
        </Carousel.Item>
      </Carousel>
    </Container>
    )
  };

};
export default RelatedProductsCarousel;