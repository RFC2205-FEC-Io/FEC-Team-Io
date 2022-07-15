import React from 'react';
const axios = require('axios');
class ProductInfo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      products: {},
      price: 0,
      salePrice: 0,
      show: false,
    }
    this.updatePrice = this.updatePrice.bind(this);
  }
  componentDidMount () {
    // console.log('ProductInfo Mounted!');

  }
  componentWillReceiveProps({products, defaultPrice, salePrice}) {
    this.setState({
      products: products,
      price: defaultPrice,
      salePrice: salePrice
    })
  }

  updatePrice () {
    if (this.state.salePrice === null || this.state.salePrice === 0) {
      return (
        <div id='product-info'>
          <p id='category'>{this.state.products.category}</p>
          <p id='name'>{this.state.products.name}</p>
          <p id='default-price'>{this.state.products.default_price}</p>
          <p id='slogan'>{this.state.products.slogan}</p>
        </div>
      )
    } else {
      return (
        <div id='product-info'>
          <p id='category'>{this.state.products.category}</p>
          <p id='name'>{this.state.products.name}</p>
          <p id='price'>{this.state.price}</p>
          <p id='salePrice'>{this.state.salePrice}</p>
        </div>
      )
    }
  }

  render (props) {
    return (
      <div id='product-info'>
        {this.updatePrice()}
      </div>
    );
  }
}

export default ProductInfo;