import React from 'react';

class AddToCart extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      qtyClicked: false,
      sizeClicked: false,
      skus: [],
      styleClicked: false
    }
    this.qtyDropDownList =  this.qtyDropDownList.bind(this);
    this.qtyClickEvent = this.qtyClickEvent.bind(this);
    this.sizeDropDownList = this.sizeDropDownList.bind(this);
    this.sizeClickEvent = this.sizeClickEvent.bind(this);
  }

  componentWillReceiveProps (props) {
    if (props.styleClicked) {
      this.setState({
        styleClicked: props.styleClicked,
        skus: props.SKU,
        message: "This is an updated message"
      })
      console.log('props:', props);
    }
  }
  componentDidMount () {
    console.log('AddToCart, mounted');
  }
  sizeDropDownList() {
    if (!this.state.sizeClicked) {
      return (
        <option value='small'>select size</option>
      )
    } else {
      return this.state.skus.map((sku) => {
        {console.log('sku:'. sku)}
          return (<option value={sku}>{sku.size}</option>);
      })
    }
  }

  qtyDropDownList () {
    if (!this.state.qtyClicked) {
      return (
        <option value='small'>qty</option>
      )
    } else {
      return this.state.skus.map((sku) => {
          return (<option value={sku}>{sku.quantity}</option>);
      })
    }
  }

  addSKUS () {
    if (this.sizeClicked) {
      this.setState({
        skus: props.SKU
      })
    }
  }
  qtyClickEvent(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      qtyClicked: !prevState.qtyClicked
    }));
  }
  sizeClickEvent(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      sizeClicked: !prevState.sizeClicked
    }));
  }

  render (props) {
    return (
      <div id='add-to-cart'>
        <h2>Add To Cart</h2>
        <select name='select-size' onClick={this.sizeClickEvent}>
          {this.sizeDropDownList()}
        </select>
        <select name='select-qty' onClick={this.qtyClickEvent}>
        {this.qtyDropDownList()}
        </select>
        <button>Add To Bag</button>
      </div>
    );
  }
}

export default AddToCart;