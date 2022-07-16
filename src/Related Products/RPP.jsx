import React from 'react';
import axios from 'axios';
import { Container, Navbar } from 'react-bootstrap';
import './Components/RelatedProductStyles.css';
// import InteractiveStarRating from './Components/InteractiveStarRating.jsx';
import StaticStarRating from './Components/StaticStarRating.jsx';
import XIconButton from './Components/XIconButton.jsx';
import RelatedProductCard from './Components/RelatedProductCard.jsx';
import RelatedProductsCarousel from './Components/RelatedProductsCarousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class RPP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 66645
    }
    // this.XIconButtonClickHandler = this.XIconButtonClickHandler.bind(this);
  }

 //XIconButtonClickHandler (event) {
  //console.log("X Icon Button was clicked.")

//---------------------- RENDER ------------------------------------------------------//

  render () {
    return (
      <div className="RPP">
          <Container>
            <RelatedProductsCarousel />
          </Container>
      </div>
    );
  };
};

export default RPP;