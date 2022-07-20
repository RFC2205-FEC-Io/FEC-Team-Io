import React from 'react';
import Stars from './Stars.jsx';
import SocialMedia from './SocialMedia.jsx';
class ProductInfo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      products: {},
      price: 0,
      salePrice: 0,
      show: false,
      reviews: []
    }
    this.updatePrice = this.updatePrice.bind(this);
  }

  componentDidMount () {
    // console.log('ProductInfo Mounted!');
  }

  componentWillReceiveProps({products, defaultPrice, salePrice, reviews}) {
    this.setState({
      products: products,
      price: defaultPrice,
      salePrice: salePrice,
      reviews: reviews
    })
  }

  updatePrice () {
    if (this.state.salePrice === null || this.state.salePrice === 0) {
      return (
        <div>
          <p id='category'>{this.state.products.category}</p>
          <h2 id='name'>{this.state.products.name}</h2>
          <p id='default-price'>{this.state.price}</p>
          <p id='slogan'>{this.state.products.slogan}</p>
        </div>
      )
    } else {
      return (
        <div>
          <p id='category'>{this.state.products.category}</p>
          <h2 id='name'>{this.state.products.name}</h2>
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
        <Stars
          reviews={this.state.reviews}
        />
        <SocialMedia/>
      </div>
    );
  }
}

export default ProductInfo;


