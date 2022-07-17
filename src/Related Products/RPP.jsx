import React from 'react';
import axios from 'axios';
import { Container, Navbar } from 'react-bootstrap';
import './Components/RelatedProductsCarouselComponent/RelatedProductStyles.css';
import RelatedProductsCarousel from './Components/RelatedProductsCarouselComponent/RelatedProductsCarousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComparisonModalTable from './Components/ComparisonModalComponent/ComparisonModalTable.jsx';

class RPP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 66645
    }
    // this.XIconButtonClickHandler = this.XIconButtonClickHandler.bind(this);
  }

 //XIconButtonClickHandler (event) {
  //console.log("X Icon Button was clicked.")

//---------------------- RENDER ------------------------------------------------------//

  render () {
    return (
      <div className="RPP" style={{ display: "flex", flexDirection: "column" }}>
        <Container>
          <RelatedProductsCarousel />
        </Container>
        <Container>
          <ComparisonModalTable />
        </Container>
        <Container>
          <RelatedProductsCarousel />
        </Container>
      </div>
    );
  };
};

export default RPP;