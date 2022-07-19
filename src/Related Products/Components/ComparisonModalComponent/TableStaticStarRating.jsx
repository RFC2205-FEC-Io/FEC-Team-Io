import React from 'react';
import Card from 'react-bootstrap/Card';
import './ComparisonModalStyles.css'

const TableStaticStarRating = (props) => {
    if (props.averageRating === 0) {
      return (
          <img src="./assets/stars/Star_Rating000.png" className="table-static-star-image-wrapper" />
      )
    } else if (props.averageRating > 0 && props.averageRating <= 0.25) {
      return (
        <img  src="./assets/stars/Star_Rating025.png"className="table-static-star-image-wrapper" />
      )
    } else if (props.averageRating > 0.25 && props.averageRating <= 0.50) {
      return (
        <img  src="./assets/stars/Star_Rating050.png" className="table-static-star-image-wrapper" />
      )
   } else if (props.averageRating > 0.50 && props.averageRating <= 0.75) {
    return (
      <img  src="./assets/stars/Star_Rating075.png" className="table-static-star-image-wrapper" />
    )
   }  else if (props.averageRating > 0.75 && props.averageRating <= 1.00) {
    return (
      <img  src="./assets/stars/Star_Rating100.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 1.00 && props.averageRating <= 1.25) {
    return (
      <img  src="./assets/stars/Star_Rating125.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 1.25 && props.averageRating <= 1.50) {
    return (
      <img  src="./assets/stars/Star_Rating150.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 1.50 && props.averageRating <= 1.75) {
    return (
      <img  src="./assets/stars/Star_Rating175.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 1.75 && props.averageRating <= 2.00) {
    return (
      <img  src="./assets/stars/Star_Rating200.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 2.00 && props.averageRating <= 2.25) {
    return (
      <img  src="./assets/stars/Star_Rating225.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 2.25 && props.averageRating <= 2.50) {
    return (
      <img  src="./assets/stars/Star_Rating250.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 2.50 && props.averageRating <= 2.75) {
    return (
      <img  src="./assets/stars/Star_Rating275.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 2.75 && props.averageRating <= 3.00) {
    return (
      <img  src="./assets/stars/Star_Rating300.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 3.00 && props.averageRating <= 3.25) {
    return (
      <img  src="./assets/stars/Star_Rating325.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 3.25 && props.averageRating <= 3.50) {
    return (
       <img  src="./assets/stars/Star_Rating350.png" className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 3.50 && props.averageRating <= 3.75) {
    return (
       <img  src="./assets/stars/Star_Rating375.png"className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 3.75 && props.averageRating <= 4.00) {
    return (
        <img  src="./assets/stars/Star_Rating400.png"className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 4.00 && props.averageRating <= 4.25) {
    return (
        <img  src="./assets/stars/Star_Rating425.png"className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 4.25 && props.averageRating <= 4.50) {
    return (
        <img  src="./assets/stars/Star_Rating450.png"className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 4.50 && props.averageRating <= 4.75) {
    return (
        <img  src="./assets/stars/Star_Rating475.png"className="table-static-star-image-wrapper" />
    )
   } else if (props.averageRating > 4.75 && props.averageRating <= 5.00) {
    return (
        <img  src="./assets/stars/Star_Rating500.png"className="table-static-star-image-wrapper" />
    )
   };
  };

export default TableStaticStarRating