//---------------- IMPORTS ------------------------------------//
import React from "react";
//import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';
import StaticStarRating from '../ReusableMiniComponents/StaticStarRating.jsx';
import StarIconButton from '../ReusableMiniComponents/StarIconButton.jsx';
import ProductPrice from './ProductPrice.jsx';
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
  height: 40%;
  bottom: -5px;
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

const RelatedProductCard = (props) => {
  return (
    <Container>
      <StarIconButton StarClickHandler={props.StarClickHandler} CardId={props.product.id}/>
      <Image src={props.product.styles[0].photos[0].url || "Smiley Shades.png"} onClick={() => {props.CardClickHandler(props.product.id); props.ResetCurrentProductId(props.product.id)}}
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

export default RelatedProductCard







  {/*return (
    <Card className="card">
      <Card.Text
        style={{textAlign: "right"}}>
        <StarIconButton StarClickHandler={props.StarClickHandler} CardId={props.product.id}/>
      </Card.Text>
      <Card.Img
        className="image-wrapper"
        src={props.product.styles[0].photos[0].url || "Smiley Shades.png"}
        onClick={() => {props.CardClickHandler(props.product.id); props.ResetCurrentProductId(props.product.id)}}
      />
      <Card.Text style={{textAlign: "center"}}>
        {props.product.category}
      </Card.Text>
      <Card.Body>
        <Card.Title>
            {props.product.name}
        </Card.Title>
        <Card.Text>
            {props.product.description}
        </Card.Text>
        <Card.Text>
          <ProductPrice product={props.product} />
        </Card.Text>
        <Card.Text style={{textAlign: "center"}}>
          <StaticStarRating averageRating={props.product.averageRating}/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
*/}

