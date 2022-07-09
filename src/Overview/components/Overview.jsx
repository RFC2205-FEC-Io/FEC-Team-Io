import React from 'react';
// import ReactDom from 'react-dom';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
class Overview extends React.Component {
  constructor (props) {
    super (props);
    this.state = {

    }
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