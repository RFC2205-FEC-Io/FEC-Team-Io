//--------------------- IMPORTS --------------------------------//

import React, { Fragment, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import YourOutfitProductCard from './YourOutfitProductCard.jsx';
import StaticStarRating from'../ReusableMiniComponents/StaticStarRating.jsx';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #83677B;
  display: flex;
  padding: 20px;
  justify-content: center;
  max-width: 75%;
  max-height: 40%;
`
const Container1 = styled.div`
  flex: .25;
  margin: 3px;
  height: 50vh;
  position: relative;
  cursor: pointer;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 33%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

`
const Category = styled.div`
  color: #501B1D;
`
const Name = styled.div`
  color: #501B1D;
  font-size: 16px;
  font-weight: bold;

`
const Description = styled.div`
  color: #501B1D;
  font-size: 10px;
`


//--------------------- MAIN COMPONENT FUNCTION WITH HOOKS------------------------//

const YourOutfitCarousel = (props) => {
  if (props.yourOutfitProductsInfoSummaries.length <= 3) {
    return (
      <Container>
        <Carousel activeIndex={props.index} onSelect={props.handleSelect}>
          <Carousel.Item>
            <span className="cards-wrapper">
              <Container1>
                  <Image src={"plus_PNG73.png"} onClick={() => {props.AddCardClickHandler()}}
                  />
                  <Info>
                    <Category>Click here to add item</Category>
                    <Name>Your Outfit</Name>
                    <Description>This is your space to build your perfect outfit!  Use the + and the x to add and remove as many pieces as you'd like.  Mix and Match! Your personal style rates 5 stars! Always!</Description>
                    <StaticStarRating averageRating={5.0}/>
                  </Info>
                </Container1>
                  {props.yourOutfitProductsInfoSummaries.slice(0,3).map((product) => (
                    <YourOutfitProductCard product={product} CardId={product.id} key={product.id} XIconButtonClickHandler={props.XIconButtonClickHandler} />
                  ))}
              </span>
          </Carousel.Item>
        </Carousel>
      </Container>
    )
  } else if (props.yourOutfitProductsInfoSummaries.length > 3 && props.yourOutfitProductsInfoSummaries.length <= 7) {
    return (
      <Container>
        <Carousel activeIndex={props.index} onSelect={props.handleSelect} interval={null}>
          <Carousel.Item>
          <span className="cards-wrapper">
              <Container1>
                  <Image src={"plus_PNG73.png"} onClick={() => {props.AddCardClickHandler()}}
                  />
                  <Info>
                    <Category>Click here to add item</Category>
                    <Name>Your Outfit</Name>
                    <Description>This is your space to build your perfect outfit!  Use the + and the x to add and remove as many pieces as you'd like.  Mix and Match! Your personal style rates 5 stars! Always!</Description>
                    <StaticStarRating averageRating={5.0}/>
                  </Info>
                </Container1>
                  {props.yourOutfitProductsInfoSummaries.slice(0,3).map((product) => (
                    <YourOutfitProductCard product={product} CardId={product.id} key={product.id} XIconButtonClickHandler={props.XIconButtonClickHandler} />
                  ))}
              </span>
          </Carousel.Item>
          <Carousel.Item>
            <span className="cards-wrapper">
              {props.yourOutfitProductsInfoSummaries.slice(3,7).map((product) => (
                <YourOutfitProductCard product={product} key={product.id} XIconButtonClickHandler={props.XIconButtonClickHandler}/>
              ))}
            </span>
          </Carousel.Item>
       </Carousel>
      </Container>
    )
  } else if (props.yourOutfitProductsInfoSummaries.length > 7 && props.yourOutfitProductsInfoSummaries.length <= 11) {
    return (
    <Container>
      <Carousel activeIndex={props.index} onSelect={props.handleSelect}>
      <Carousel.Item>
          <span className="cards-wrapper">
              <Container1>
                  <Image src={"plus_PNG73.png"} onClick={() => {props.AddCardClickHandler()}}
                  />
                  <Info>
                    <Category>Click here to add item</Category>
                    <Name>Your Outfit</Name>
                    <Description>This is your space to build your perfect outfit!  Use the + and the x to add and remove as many pieces as you'd like.  Mix and Match! Your personal style rates 5 stars! Always!</Description>
                    <StaticStarRating averageRating={5.0}/>
                  </Info>
                </Container1>
                  {props.yourOutfitProductsInfoSummaries.slice(0,3).map((product) => (
                    <YourOutfitProductCard product={product} CardId={product.id} key={product.id} XIconButtonClickHandler={props.XIconButtonClickHandler} />
                  ))}
              </span>
          </Carousel.Item>
          <Carousel.Item>
            <span className="cards-wrapper">
              {props.yourOutfitProductsInfoSummaries.slice(3,7).map((product) => (
                <YourOutfitProductCard product={product} key={product.id} XIconButtonClickHandler={props.XIconButtonClickHandler}/>
              ))}
            </span>
          </Carousel.Item>
        <Carousel.Item>
          <span className="cards-wrapper">
            {props.yourOutfitProductsInfoSummaries.slice(7,11).map((product) => (
              <YourOutfitProductCard product={product} key={product.id} XIconButtonClickHandler={props.XIconButtonClickHandler}/>
            ))}
          </span>
        </Carousel.Item>
      </Carousel>
    </Container>
    )
  };

};
export default YourOutfitCarousel;