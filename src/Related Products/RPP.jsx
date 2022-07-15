import React from 'react';
import axios from 'axios';
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
      currentId: 66645,
      relatedProductIds: []
    }
    this.XIconButtonClickHandler = this.XIconButtonClickHandler.bind(this);
    this.getRelatedProductIds = this.getRelatedProductIds.bind(this);
  }
  componentDidMount() {
    this.getRelatedProductIds(this.state.currentId);
  }
 XIconButtonClickHandler (event) {
  console.log("X Icon Button was clicked.")
 }

getRelatedProductIds(currentId) {
  axios.get('/products/:product_id/related', {params: {product_id: this.state.currentID}})
  .then(response => {
    // console.log('response: ', response)
    this.setState({
      relatedProductIds: response.data
    })
  })
  .catch(err => {
    // console.log('getRelatedProductIds ERROR: ', err)
  });
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