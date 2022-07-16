//---------------- IMPORTS ------------------------------------//
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import StaticStarRating from './StaticStarRating.jsx';
import StarIconButton from './StarIconButton.jsx';
import ProductPrice from './ProductPrice.jsx';


//----------------- MAIN FUNCTIONAL COMPONENT -----------------//

const RelatedProductCard = ({ product }) => {

  /*Helper functions */

  const CardClickHandler = (event) => {
    console.log("Product Card was clicked.")
  }

  return (
    <Card >
      <Card.Text style={{textAlign: "right"}}>
        <StarIconButton />
      </Card.Text>
      <Card.Img
        className="image-wrapper"
        src={product.styles[0].photos[0].url || "Smiley Shades.png"}
        onClick={() => CardClickHandler()}
      />
      <Card.Text style={{textAlign: "center"}}>
        {product.category}
      </Card.Text>
      <Card.Body>
        <Card.Title>
          <h2>
            {product.name}
          </h2>
        </Card.Title>
        <Card.Text>
            {product.description}
        </Card.Text>
        <Card.Text>
          <ProductPrice product={product} />
        </Card.Text>
        <Card.Text style={{textAlign: "center"}}>
          <StaticStarRating averageRating={product.averageRating}/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RelatedProductCard
