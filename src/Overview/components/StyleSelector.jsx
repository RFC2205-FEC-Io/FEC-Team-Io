import React, {useState, useEffect} from 'react';
import Style from './Style.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import '../../styles.css';
const axios = require('axios');
class StyleSelector extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      styles: [],
      styleClicked: false,
      styleName: '',
      styleSKU: [],
      products: [],
      count: 5,
      page: 1,
      price: 0,
      salePrice: 0,
      productID: 66642,
      reviews: [],
      clickedthumb: '',
      galleryIMGClicked: false,
      images: [
        {thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
         url: 'https://images.unsplash.com/photo-1501088430049-71…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        }],
    }
    this.styleClickEvent = this.styleClickEvent.bind(this);
    this.styleHeader = this.styleHeader.bind(this);
  }

  getAllData() {
    // GET STYLES
    axios({
      method: 'get',
      url: '/styles'
    })
    .then((res) => {
      // console.log('GET sent, styles retreived!:', res.data);
      this.setState({
        styles: res.data.results
      });
    })
    .then(() => {

    })
    .catch((err) => {
      throw err;
    });

    // GET PRODUCTS
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

    // GET REVIEWS
    axios({
      method: 'get',
      url: `/reviews/?product_id=${this.state.productID}&count=${this.state.count}`
    })
    .then((res) => {
      this.setState({
        reviews: res.data.results
      });
    })
    .catch((err) => {
      console.log('Stars:', err);
    });

  }

  componentWillMount() {
    this.getAllData();
  }

  componentDidMount() {
    // console.log('StyleSelector MOUNTED!:', this.state);

  }

  // UPDATES CLICK STATE OF THUMBNAIL
  styleClickEvent (event, name, styleObj, originalPrice, salePrice, img) {
    event.preventDefault();
    var skuArr = [];
    for (var key in styleObj.skus) {
      skuArr.push(styleObj.skus[key]);
    }
    this.state.styles.map((style) => {
      if(style.name === name) {
        this.setState({
          images: style.photos,
          styleClicked: true,
          styleName:name,
          styleSKU: skuArr,
          price: originalPrice,
          salePrice: salePrice,
          clickedthumb:img
        })
      }
    })
  }

  // RENDERS THE PRODUCT NAME TO THE HEADER
  styleHeader(name) {
    if (!this.state.styleClicked) {
      return  (
        <div>
          <h3>Style > Select a Style </h3>
        </div>
      );
    } else {
      return  (
        <div>
          <h3>Style > {this.state.styleName}</h3>
        </div>
      );
    }
  }

  render (props) {
    return (
      <div id='main'>
        <ImageGallery
          images={this.state.images}
          clickedThumb={this.state.clickedthumb}
          thumbnailClicked={this.state.styleClicked}
          galleryIMG={this.state.galleryIMGClicked}
          />
        <ProductInfo
          products={this.state.products[0]}
          defaultPrice={this.state.price}
          salePrice={this.state.salePrice}
          reviews = {this.state.reviews}
        />
        <div id='style-selector'>
          {this.styleHeader()}
          <Style
            styles={this.state.styles}
            styleClick={this.styleClickEvent}
            clicked={this.state.styleClicked}
            name={this.state.styleName}
          />
          </div>
        <AddToCart
          SKU={this.state.styleSKU}
          styleClicked={this.state.styleClicked}
        />
      </div>
    );
  }
}

export default StyleSelector;
