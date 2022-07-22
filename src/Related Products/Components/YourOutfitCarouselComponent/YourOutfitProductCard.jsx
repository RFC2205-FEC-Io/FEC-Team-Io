//---------------- IMPORTS ------------------------------------//
import React from "react";
//import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';
import StaticStarRating from '../ReusableMiniComponents/StaticStarRating.jsx';
import XIconButton from '../ReusableMiniComponents/XIconButton.jsx';
import ProductPrice from '../RelatedProductsCarouselComponent/ProductPrice.jsx';
//import '../RelatedProductsCarouselComponent/RelatedProductStyles.css'
//import 'bootstrap/dist/css/bootstrap.min.css';

//--------------Styling----------------------------------------//

const Container = styled.div`
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
//----------------- MAIN FUNCTIONAL COMPONENT -----------------//

const YourOutfitProductCard = (props) => {
  return (
    <Container>
      <XIconButton XIconButtonClickHandler={props.XIconButtonClickHandler} CardId={props.product.id}/>
      <Image src={props.product.styles[0].photos[0].url || "Smiley Shades.png"}
        />
      <Info>
        <Category>{props.product.category}</Category>
        <Name>{props.product.name}</Name>
        <Description>{props.product.description}</Description>
        <ProductPrice product={props.product} />
        <StaticStarRating averageRating={props.product.averageRating}/>
      </Info>
    </Container>
  )

};

export default YourOutfitProductCard