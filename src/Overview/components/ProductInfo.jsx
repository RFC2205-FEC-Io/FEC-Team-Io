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
    console.log('ProductInfo Mounted!');
    const APItoken = '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';
    // PRODUCTS DATA
    axios({
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products',
      headers: {
        'Authorization': APItoken,
      }
    })
    .then((res) => {
      console.log('GET sent, products retreived!:', res.data);
      this.setState({
        products: res.data[0]
      })
    })
    .catch((err) => {
      throw err;
    });
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