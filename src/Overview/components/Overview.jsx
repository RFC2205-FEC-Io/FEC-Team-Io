// import React from 'react';
// import ImageGallery from './ImageGallery.jsx';
// import ProductInfo from './ProductInfo.jsx';
// import StyleSelector from './StyleSelector.jsx';
// import AddToCart from './AddToCart.jsx';
// const axios = require('axios');

// class Overview extends React.Component {
//   constructor (props) {
//     super (props);
//     this.state = {
//       styles: [],
//       styleClicked: false,
//       styleName: '',
//       styleSKU: [],
//       products: [],
//       count: 5,
//       page: 1,
//       price: 0,
//       salePrice: 0,
//     }
//   }

//   componentDidMount () {
//     // console.log('Overview, mounted');
// // Retreive styles
//   axios({
//     method: 'get',
//     url: '/styles'
//   })
//   .then((res) => {
//     console.log('GET sent, styles retreived!:', res.data);
//     this.setState({
//       styles: res.data.results
//     });
//   })
//   .then(() => {

//   })
//   .catch((err) => {
//     throw err;
//   });

//   // retreive products
//   axios({
//     method: 'get',
//     url: `/overview/?page=${this.state.page}&count=${this.state.count}`
//   })
//   .then((res) => {
//     console.log('GET sent, products retreived!:', res.data);
//     this.setState({
//       products: res.data
//     })
//   })
//   .catch((err) => {
//     throw err;
//   });

//   const statePromise = new Promise(() => {
//     setTimeout(() => {
//       console.log('Promise Fulfilled')
//     }, 500)
//   });
//   }

//   render (props) {
//     return (
//       <div id='overview'>
//         {/* <ImageGallery/> */}
//         <div id='sidebar'>
//           {/* <ProductInfo products={this.state.products[0]}/> */}
//           <StyleSelector styles={this.state.styles}/>
//         </div>
//       </div>
//     );
//   }
// }

// export default Overview;