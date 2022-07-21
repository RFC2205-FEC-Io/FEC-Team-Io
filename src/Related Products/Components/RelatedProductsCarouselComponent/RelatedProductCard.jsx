//---------------- IMPORTS ------------------------------------//
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import StaticStarRating from '../ReusableMiniComponents/StaticStarRating.jsx';
import StarIconButton from '../ReusableMiniComponents/StarIconButton.jsx';
import ProductPrice from './ProductPrice.jsx';


//----------------- MAIN FUNCTIONAL COMPONENT -----------------//

const RelatedProductCard = (props) => {
  return (
    <Card >
      <Card.Text style={{textAlign: "right"}}>
        <StarIconButton StarClickHandler={props.StarClickHandler} CardId={props.product.id}/>
      </Card.Text>
      <Card.Img
        className="image-wrapper"
        src={props.product.styles[0].photos[0].url || "Smiley Shades.png"}
        onClick={() => props.CardClickHandler(props.product.id)}
      />
      <Card.Text style={{textAlign: "center"}}>
        {props.product.category}
      </Card.Text>
      <Card.Body>
        <Card.Title>
          <h2>
            {props.product.name}
          </h2>
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

export default RelatedProductCard
