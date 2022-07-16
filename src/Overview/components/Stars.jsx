// import React from 'react';
// const axios = require('axios');
// import Star_rating500 from '../../../dist/Star_rating500.png';
// class Stars extends React.Component {
//   constructor (props) {
//     super (props);
//       this.state = {
//         reviews: [],
//         ratings: []
//       }
//   }

//   componentDidMount () {
//     // console.log('Stars mounted!');
//   }

//   avgRating () {

//   }
//   getRatings () {

//   }

//   render (props) {
//     return (
//       <div>
//         <img id='stars' src={Star_rating500}/>
//         Read All # reviews
//       </div>
//     );
//   }
// }

// export default Stars;

import React, {useState} from 'react';
const axios = require('axios');
import Star_rating500 from '../../../dist/Star_rating500.png';
const Stars = ({reviews}) => {

  const [review, getReviews] =  useState([]);
  // const [ratings, getRatings] = useState([]);



  const avgRating = () => {
    var ratingsArr = [];
    var sum = 0;
    reviews.map((review) => {
      console.log('review:', review);
      ratingsArr.push(review.rating);
    })
    console.log('ratingsArr:', ratingsArr);
    ratingsArr.forEach((rating) => {
      sum += rating;
    })
    var avg = sum / ratingsArr.length;
    console.log('avg:', avg);
  };
  avgRating();
  // const getRatings = () => {

  // };

  return (
    <div>
      <img id='stars' src={Star_rating500}/>
      Read All # reviews
    </div>
  );

}

export default Stars;