// import React from 'react';
// import Style from './Style.jsx';
// import AddToCart from './AddToCart.jsx';
// import ImageGallery from './ImageGallery.jsx';
// import ProductInfo from './ProductInfo.jsx';
// const axios = require('axios');
// class StyleSelector extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       styles: [],
//       styleClicked: false,
//       styleName: '',
//       styleSKU: []
//     }
//     this.styleClickEvent = this.styleClickEvent.bind(this);
//     this.styleHeader = this.styleHeader.bind(this);
//   }
//   componentDidMount() {
//     console.log('StyleSelector, mounted');
//     axios({
//       method: 'get',
//       url: '/styles'
//     })
//     .then((res) => {
//       console.log('GET sent, styles retreived!:', res.data.results);
//       this.setState({
//         styles: res.data.results
//       });
//     })
//     .catch((err) => {
//       throw err;
//     });
//   }

//   styleClickEvent (event, name, styleObj) {
//     event.preventDefault();
//     // console.log('name:', name, 'styleObj:', styleObj.skus);
//     var skuArr = [];
//     for (var key in styleObj.skus) {
//       skuArr.push(styleObj.skus[key]);
//     }
//     this.setState({
//       styleClicked: true,
//       styleName:name,
//       styleSKU: skuArr
//     });
//   }

//   styleHeader(name) {
//     if (!this.state.styleClicked) {
//       return  (
//         <div>
//           <h3>Style > Select a Style </h3>
//         </div>
//       );
//     } else {
//       return  (
//         <div>
//           <h3>Style >{this.state.styleName}</h3>
//         </div>
//       );
//     }
//   }

//   render (props) {
//     return (
//       <div id='main'>
//         <ImageGallery/>
//         <div id='style-selector'>
//           {this.styleHeader()}
//           <Style styles={this.state.styles} styleClick={this.styleClickEvent}/>
//           </div>
//           <AddToCart SKU={this.state.styleSKU} styleClicked={this.state.styleClicked}/>
//       </div>
//     );
//   }
// }

// export default StyleSelector;


import React from 'react';
import Style from './Style.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
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
    }
    this.styleClickEvent = this.styleClickEvent.bind(this);
    this.styleHeader = this.styleHeader.bind(this);
  }
  componentDidMount() {
    console.log('StyleSelector, mounted');
    // Retreive styles
    axios({
      method: 'get',
      url: '/styles'
    })
    .then((res) => {
      console.log('GET sent, styles retreived!:', res.data.results);
      this.setState({
        styles: res.data.results
      });
    })
    .catch((err) => {
      throw err;
    });

    // retreive products
    axios({
      method: 'get',
      url: `/overview/?page=${this.state.page}&count=${this.state.count}`
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

  styleClickEvent (event, name, styleObj, originalPrice, salePrice) {
    event.preventDefault();
    // console.log('name:', name, 'styleObj:', styleObj.skus);
    console.log('originalPrice, salePrice:', originalPrice, salePrice)
    var skuArr = [];
    for (var key in styleObj.skus) {
      skuArr.push(styleObj.skus[key]);
    }
    if (salePrice)
    this.setState({
      styleClicked: true,
      styleName:name,
      styleSKU: skuArr,
      price: originalPrice,
      salePrice: salePrice
    });
  }

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
          <h3>Style >{this.state.styleName}</h3>
        </div>
      );
    }
  }


  render (props) {
    return (
      <div id='main'>
        <ImageGallery/>
        <ProductInfo products={this.state.products[0]}/>
        <div id='style-selector'>
          {this.styleHeader()}
          <Style styles={this.state.styles} styleClick={this.styleClickEvent}/>
          </div>
          <AddToCart SKU={this.state.styleSKU} styleClicked={this.state.styleClicked}/>
      </div>
    );
  }
}

export default StyleSelector;