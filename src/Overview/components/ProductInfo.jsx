import React from 'react';
import Stars from './Stars.jsx';
class ProductInfo extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      default: {
        campus: "hr-rfc",
        category: "Jackets",
        created_at: "2022-03-31T21:13:15.875Z",
        default_price:"140.00",
        description:"The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        id: 66642,
        name: "Camo Onesie",
        slogan: "Blend in to your crowd",
        updated_at: "2022-03-31T21:13:15.875Z"
      },
      products: {},
      price: 0,
      salePrice: 0,
      show: false,
      reviews: []
    }
    this.updatePrice = this.updatePrice.bind(this);
  }
  componentDidMount () {
    console.log('ProductInfo Mounted!');
    // console.log('componentDidMount, props:', props);
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
        <div id='product-info'>
          <p id='category'>{this.state.default.category}</p>
          <p id='name'>{this.state.default.name}</p>
          <p id='default-price'>{this.state.default.default_price}</p>
          <p id='slogan'>{this.state.default.slogan}</p>
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
        <Stars
          reviews={this.state.reviews}
        />
      </div>
    );
  }
}

export default ProductInfo;