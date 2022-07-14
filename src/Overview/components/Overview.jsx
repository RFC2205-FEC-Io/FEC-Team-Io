import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
const axios = require('axios');

class Overview extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      products: [],
      count: 5,
      page: 1,
    }
  }

  componentDidMount () {
    // console.log('Overview, mounted');
    // PRODUCTS DATA
    axios({
      method: 'get',
      url: `/overview/?page=${this.state.page}&count=${this.state.count}`
    })
    .then((res) => {
      // console.log('GET sent, products retreived!:', res.data);
      this.setState({
        products: res.data
      })
    })
    .catch((err) => {
      throw err;
    });
  }

  render (props) {
    return (
      <div id='overview'>
        <ImageGallery/>
        <div id='sidebar'>
          <ProductInfo products={this.state.products[0]}/>
          <StyleSelector/>
        </div>
      </div>
    );
  }
}

export default Overview;