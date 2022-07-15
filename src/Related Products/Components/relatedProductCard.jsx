//---------------- IMPORTS ------------------------------------//
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import StaticStarRating from './StaticStarRating.jsx';
import StarIconButton from './StarIconButton.jsx';


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
        src="Onesie_image.png"
        onClick={() => CardClickHandler()}
      />
      <Card.Text style={{textAlign: "center"}}>
        {product.data.category}
      </Card.Text>
      <Card.Body>
        <Card.Title>
          <h2>
            {product.data.name}
          </h2>
        </Card.Title>
        <Card.Text>
            {product.data.description}
        </Card.Text>
        <Card.Text>
          {'$' + product.data.default_price}
        </Card.Text>
        {/*<Card.Text style={{textAlign: "center"}}>
          <StaticStarRating averageRating={this.state.averageRating}/>
  </Card.Text>*/}
      </Card.Body>
    </Card>
  );
};
export default RelatedProductCard
