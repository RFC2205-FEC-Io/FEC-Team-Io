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
    this.setState({
      products: this.props.products,
      price: this.props.defaultPrice,
      salePrice: this.props.salePrice,
      reviews: this.props.reviews
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.products !== this.props.products) {
      this.setState({products: this.props.products});
    }
    if (prevState.price !== this.props.defaultPrice) {
      this.setState({price: this.props.defaultPrice});
    }
    if (prevState.salePrice!== this.props.salePrice) {
      this.setState({salePrice: this.props.salePrice});
    }
    if (prevState.products !== this.props.products) {
      this.setState({reviews: this.props.reviews});
    }
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


