import React, {useState} from "react";
import {createGlobalStyle} from 'styled-components';
import StyleSelector from './Overview/components/StyleSelector.jsx';
import ReviewsApp from "./Reviews/ReviewsApp.jsx";
import RPP from "./Related Products/RPP.jsx";
import Navbar from "./Other Components/Navbar.jsx";
import Announcement from "./Other Components/Announcement.jsx"
import RelatedProductsBanner from './Related Products/Components/RelatedProductsCarouselComponent/RelatedProductsBanner.jsx';
import ReviewsBanner from'./Other Components/ReviewsBanner.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Roboto', sans-serif;
}
`

function App (props) {
  const [productId, setProductId] = useState(66645);

  const CardClickHandler = (newId) => {
    setProductId(newId)
  }
  console.log('Product Id on App.jsx: ', productId);


    return (
      <div>
        <GlobalStyle />
        <Navbar />
        <Announcement />
        <StyleSelector product_id={productId}/>
        <RelatedProductsBanner />
        <RPP product_id={productId} CardClickHandler={CardClickHandler}/>
        <ReviewsBanner />
        <ReviewsApp product_id={productId}/>
      </div>
    );
}

export default App;
