import React from "react";
import axios from "axios";
import ReviewsApp from "../ReviewsApp.jsx";
import DynamicStars from "./DynamicStars.jsx";
import StaticStars from "./StaticStars.jsx";

class ReviewStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewArray: [],
      productID: 66642,
    }
  };
  componentDidMount() {
    this.getReviews()
  };

  getReviews = async () => {
    return axios.get(`/reviews/?product_id=${this.state.productID}&count=100`)
      // axios.get('/reviews', {params: {product_id: this.state.productID}})
      .then(res => {
        // console.log('res.data: ', res.data);
        this.setState({ reviewArray: res.data.results });
      })
      .catch(err => {
        alert('Error, no reviews to post');
      })
  };

  averageCalculator = () => {
    let avgSum = 0;
    this.state.reviewArray.forEach(review => {
      avgSum += review.rating
    })
    let average = (avgSum/this.state.reviewArray.length);
    return Math.ceil(average * 10) /10;
  }

  render() {
    return (
      <div id="ReviewStats">
        <h2>{this.averageCalculator()}</h2>
        <StaticStars rating={this.averageCalculator()} />
      </div>
    )
}
}

export default ReviewStats;