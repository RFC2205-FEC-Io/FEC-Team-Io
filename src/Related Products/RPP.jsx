import React from 'react';
import './Components/RelatedProductStyles.css';
import InteractiveStarRating from './Components/InteractiveStarRating.jsx';
import StaticStarRating from './Components/StaticStarRating.jsx';
import XIconButton from './Components/XIconButton.jsx';
import RelatedProductCard from './Components/RelatedProductCard.jsx';
import RelatedProductsCarousel from './Components/RelatedProductsCarousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class RPP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomInfo: []
    }
    this.XIconButtonClickHandler = this.XIconButtonClickHandler.bind(this);
    this.CardClickHandler = this.CardClickHandler.bind(this);
  }


 XIconButtonClickHandler (event) {
  console.log("X Icon Button was clicked.")
 }

 CardClickHandler (event) {
  console.log("Product Card was clicked.")
 }

  render () {
    return (
      <div className="RPP">
        <RelatedProductsCarousel />
      </div>
    );
  };
};

export default RPP;