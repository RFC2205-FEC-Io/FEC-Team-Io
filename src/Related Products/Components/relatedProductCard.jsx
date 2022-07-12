import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import StaticStarRating from './StaticStarRating.jsx';
import StarIconButton from './StarIconButton.jsx';

const RelatedProductCard = () => {
  const cardPracticeInfo =
    {
      id: 1,
      name: "Camo Onesie",
      slogan: "Blend in to your crowd",
      description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
      category: "Jackets",
      default_price: "140",
      url: "Onesie_image.png"
    }


  return (
    <Card style={{ width: '18rem'}}>
       <Card.Text style={{textAlign: "right"}}>
        <StarIconButton />
      </Card.Text>
      <Card.Img variant="top" style={{ height: '24rem'}} src={cardPracticeInfo.url} />
      <Card.Text style={{textAlign: "center"}}>
        {cardPracticeInfo.category}
      </Card.Text>
      <Card.Body>
        <Card.Title>
          <h1>
            {cardPracticeInfo.name}
          </h1>
        </Card.Title>
        <Card.Text>
          <h5>
            {cardPracticeInfo.description}
          </h5>
        </Card.Text>
        <Card.Text>
          {'$' + cardPracticeInfo.default_price}
        </Card.Text>
        <Card.Text style={{textAlign: "center"}}>
          <StaticStarRating />
        </Card.Text>
      </Card.Body>
    </Card>
  );

};

export default RelatedProductCard