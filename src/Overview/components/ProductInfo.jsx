import React from 'react';
const axios = require('axios');
class ProductInfo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      products: {}
    }
  }
  componentDidMount () {
    //console.log('ProductInfo Mounted!');
  }
  componentWillReceiveProps({products}) {
    this.setState({
      products: products
    })
  }
  render (props) {
    return (
      <div id='image-gallery'>
        <h2>Product Info</h2>
        <p id='category'>{this.state.products.category}</p>
        <p id='name'>{this.state.products.name}</p>
        <p id='default-price'>{this.state.products.default_price}</p>
      </div>
    );
  }
}

export default ProductInfo;