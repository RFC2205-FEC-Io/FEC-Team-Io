import React from 'react';
import Card from 'react-bootstrap/Card';

const StaticStarRating = (props) => {
    if (props.averageRating === 0) {
      return (
        <span>
           <Card.Img className="static-star-image-wrapper" src="Star_Rating000.png" />
        </span>
      )
    } else if (props.averageRating > 0 && props.averageRating <= 0.25) {
      return (
        <span>
         <Card.Img className="static-star-image-wrapper" src="Star_Rating025.png"/>
        </span>
      )
    } else if (props.averageRating > 0.25 && props.averageRating <= 0.50) {
      return (
        <span>
         <Card.Img className="static-star-image-wrapper" src="Star_Rating050.png" />
        </span>
      )
   } else if (props.averageRating > 0.50 && props.averageRating <= 0.75) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating075.png" />
      </span>
    )
   }  else if (props.averageRating > 0.75 && props.averageRating <= 1.00) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating100.png" />
      </span>
    )
   } else if (props.averageRating > 1.00 && props.averageRating <= 1.25) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating125.png" />
      </span>
    )
   } else if (props.averageRating > 1.25 && props.averageRating <= 1.50) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating150.png" />
      </span>
    )
   } else if (props.averageRating > 1.50 && props.averageRating <= 1.75) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating175.png" />
      </span>
    )
   } else if (props.averageRating > 1.75 && props.averageRating <= 2.00) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating200.png" />
      </span>
    )
   } else if (props.averageRating > 2.00 && props.averageRating <= 2.25) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating225.png" />
      </span>
    )
   } else if (props.averageRating > 2.25 && props.averageRating <= 2.50) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating250.png" />
      </span>
    )
   } else if (props.averageRating > 2.50 && props.averageRating <= 2.75) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating275.png" />
      </span>
    )
   } else if (props.averageRating > 2.75 && props.averageRating <= 3.00) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating300.png" />
      </span>
    )
   } else if (props.averageRating > 3.00 && props.averageRating <= 3.25) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating325.png" />
      </span>
    )
   } else if (props.averageRating > 3.25 && props.averageRating <= 3.50) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating350.png" />
      </span>
    )
   } else if (props.averageRating > 3.50 && props.averageRating <= 3.75) {
    return (
      <span>
       <Card.Img className="static-star-image-wrapper" src="Star_Rating375.png" />
      </span>
    )
   } else if (props.averageRating > 3.75 && props.averageRating <= 4.00) {
    return (
      <span>
        <Card.Img className="static-star-image-wrapper" src="Star_Rating400.png"/>
      </span>
    )
   } else if (props.averageRating > 4.00 && props.averageRating <= 4.25) {
    return (
      <span>
        <Card.Img className="static-star-image-wrapper" src="Star_Rating425.png" />
      </span>
    )
   } else if (props.averageRating > 4.25 && props.averageRating <= 4.50) {
    return (
      <span>
        <Card.Img className="static-star-image-wrapper" src="Star_Rating450.png" />
      </span>
    )
   } else if (props.averageRating > 4.50 && props.averageRating <= 4.75) {
    return (
      <span>
        <Card.Img className="static-star-image-wrapper" src="Star_Rating475.png" />
      </span>
    )
   } else if (props.averageRating > 4.75 && props.averageRating <= 5.00) {
    return (
      <span>
        <Card.Img className="static-star-image-wrapper" src="Star_Rating500.png" />
      </span>
    )
   };
  };

export default StaticStarRating