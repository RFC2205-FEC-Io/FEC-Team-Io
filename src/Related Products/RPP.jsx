import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Navbar } from 'react-bootstrap';
import './Components/RelatedProductsCarouselComponent/RelatedProductStyles.css';
import RelatedProductsCarousel from './Components/RelatedProductsCarouselComponent/RelatedProductsCarousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComparisonModalWindow from './Components/ComparisonModalComponent/ComparisonModalWindow.jsx';


const RPP = () => {

  const [show, setShow] = useState(false);

  const CardClickHandler = (event) => {
    console.log("Product Card was clicked.")
    setShow(true)
  }

  const WindowClickHandler = (event) => {
    console.log("Window close button was clicked.")
    setShow(false)

  }

 //XIconButtonClickHandler (event) {
  //console.log("X Icon Button was clicked.")

//---------------------- RENDER ------------------------------------------------------//


    return (
      <div className="RPP" style={{ display: "flex", flexDirection: "column" }}>
        <Container>
          <RelatedProductsCarousel CardClickHandler={CardClickHandler}/>
        </Container>
        <Container>
          <ComparisonModalWindow WindowClickHandler={WindowClickHandler} show={show} />
        </Container>
      </div>
    );
};

export default RPP;