import React, {useState} from 'react';
import axios from 'axios';
import {exportStars}from './GetStars.jsx';
import img from './images/star.png';
// import * as images from '../../../dist/exportImages.js';


const Stars = ({reviews}) => {

  const [review, getReviews] =  useState([]);
  // const [ratings, getRatings] = useState([]);

  var numOfReviews = 0;

  const avgRating = () => {
    var ratingsArr = [];
    var sum = 0;
    var avg = 0;
    reviews.map((review) => {
      // console.log('review:', review);
      ratingsArr.push(review.rating);
      numOfReviews += 1;
    })
    // console.log('ratingsArr:', ratingsArr);
    ratingsArr.forEach((rating) => {
      sum += rating;
    })
    avg = sum / ratingsArr.length;
    return avg;
    console.log('avg:', avg);
  };
  var average = avgRating();

  // const starRatings = (average) => {
  //   average = average * 1000;
  //   console.log('average:', average);

  //   if (avg < 125) {
  //     return (<img id='stars' src='./'/>)
  //   } else if (avg >= 0.5) {
  //     return (<img id='stars' src={exportStars.Star_rating000}/>)
  //   }
  // }
// starRatings(average);

  return (
    <div>
      {/* <img id='stars' src={exportStars.Star_rating500}/> */}
      Read All {numOfReviews} reviews
    </div>
  );

}

export default Stars;