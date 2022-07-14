import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import StaticStarRating from './StaticStarRating.jsx';
import StarIconButton from './StarIconButton.jsx';

class RelatedProductCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cardPracticeInfo: {
        id: 1,
        name: "Camo Onesie",
        slogan: "Blend in to your crowd",
        description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        category: "Jackets",
        default_price: "140",
        url: "Onesie_image.png",
      },
      averageRating: 3.7
    }
    this.CardClickHandler = this.CardClickHandler.bind(this);
  }

  CardClickHandler (event) {
    console.log("Product Card was clicked.")
  }

  render () {
    return (
      <Card>
        <Card.Text style={{textAlign: "right"}}>
          <StarIconButton />
        </Card.Text>
        <Card.Img
          className="image-wrapper"
          src="Onesie_image.png"
          onClick={() => this.CardClickHandler()}
        />
        <Card.Text style={{textAlign: "center"}}>
          {this.state.cardPracticeInfo.category}
        </Card.Text>
        <Card.Body>
          <Card.Title>
            <h1>
              {this.state.cardPracticeInfo.name}
            </h1>
          </Card.Title>
          <Card.Text>
              {this.state.cardPracticeInfo.description}
          </Card.Text>
          <Card.Text>
            {'$' + this.state.cardPracticeInfo.default_price}
          </Card.Text>
          <Card.Text style={{textAlign: "center"}}>
            <StaticStarRating averageRating={this.state.averageRating}/>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
};

export default RelatedProductCard