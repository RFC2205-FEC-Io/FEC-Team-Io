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
      products: []
    }
  }

  componentDidMount () {
    // console.log('Overview, mounted');
    const APItoken = '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';
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
          <ProductInfo/>
          <StyleSelector/>
        </div>
        <AddToCart/>
      </div>
    );
  }
}

export default Overview;