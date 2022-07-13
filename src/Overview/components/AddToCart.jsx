import React from 'react';

class AddToCart extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      qtyClicked: false,
      sizeClicked: false,
      skus: [],
      styleClicked: false,
      clickedSize: '',
      sizeSelect: {value: 'select a size'}
    }
    this.qtyDropDownList =  this.qtyDropDownList.bind(this);
    this.qtyClickEvent = this.qtyClickEvent.bind(this);
    this.sizeDropDownList = this.sizeDropDownList.bind(this);
    this.sizeClickEvent = this.sizeClickEvent.bind(this);
    this.sizeClicked = this.sizeClicked.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.cartButtonEvent = this.cartButtonEvent.bind(this);
  }
  /* UPDATES STATE WHEN STYLE THUMBNAIL IS CLICKED*/
  componentWillReceiveProps (props) {
    if (props.styleClicked) {
      this.setState({
        styleClicked: props.styleClicked,
        skus: props.SKU,
        message: "This is an updated message"
      })
    }
  }
  componentDidMount () {
    // console.log('AddToCart, mounted');
  }

  sizeClicked (event) {
    event.preventDefault();
    console.log('sizeClicked!');
  }

  /* SIZE and QUANTITY LISTS */
  sizeDropDownList() {
    if (!this.state.sizeClicked) {
      return (
        <option value='select-size'>select size</option>
      )
    } else {
      return this.state.skus.map((sku) => {
        // {console.log('sku:'. sku)}
          return (
          <option
            id={sku.size}
            key={sku.size}
            // onClick={this.sizeClicked}
            value={sku.size}
          >
            {sku.size}
          </option>);
      })
    }
  }

  qtyDropDownList () {
    if (this.state.sizeSelect.value === 'select a size') {
      return (
        <option value='small'>qty</option>
      )
    } else {
      var qtyArr = [];
      this.state.skus.map((sku) => {
          if (sku.size === this.state.sizeSelect.value) {
            var i = 0;
            while (i <= sku.quantity) {
            qtyArr.push(i);
            i++;
          }
        }
      })
      console.log('qtyArr:', qtyArr);
      return qtyArr.map((num) => {
        return (<option key={num}>{num}</option>);
      });
    }
  }

  //    return (<option key={i}>{i}</option>);

  /* TOGGLES FOR LISTS */
  qtyClickEvent(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      qtyClicked: !prevState.qtyClicked
    }));
  }
  sizeClickEvent(event) {
    event.preventDefault();
    // console.log('event.target.innerHTML:', event.target)
    this.setState((prevState) => ({
      sizeClicked: !prevState.sizeClicked
    }));
  }

  selectSize (event) {
    event.preventDefault();
    this.setState({
      sizeSelect: {value: event.target.value}
    })
    alert(this.state.sizeSelect.value);
  }

  cartButtonEvent (event) {
    event.preventDefault();
    console.log('Added To Cart!');
  }
  render (props) {
    return (
      <div id='add-to-cart'>
        <h2>Add To Cart</h2>
        <select name='select-size' onClick={this.sizeClickEvent} value={this.state.sizeSelect.value} onChange={this.selectSize}>
          {this.sizeDropDownList()}
        </select>
        <select name='select-qty' onClick={this.qtyClickEvent}>
        {this.qtyDropDownList()}
        </select>
        <button onClick={this.cartButtonEvent}>Add To Bag</button>
      </div>
    );
  }
}

export default AddToCart;