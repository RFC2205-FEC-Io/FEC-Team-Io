import React from "react";
import axios from "axios";
import ReviewsApp from "../ReviewsApp.jsx";
import DynamicStars from "./DynamicStars.jsx";
import StaticStars from "./StaticStars.jsx";
import BarGroup from "./BarGroup.jsx";

class ReviewStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewArray: [],
      productID: 66642,
      ratingTotals: [
        { name: '1 stars', value: 0 },
        { name: '2 stars', value: 0 },
        { name: '3 stars', value: 0 },
        { name: '4 stars', value: 0 },
        { name: '5 stars', value: 0 }
      ]
    }
  };
  componentDidMount() {
    this.getReviews();
    this.ratingTotals();
    this.render();
  };

  getReviews = async () => {
    return axios.get(`/reviews/?product_id=${this.state.productID}&count=100`)
      // axios.get('/reviews', {params: {product_id: this.state.productID}})
      .then(res => {
        // console.log('res.data: ', res.data);
        this.setState({ reviewArray: res.data.results });
      })
      .catch(err => {
        alert('Error, no reviews summarize');
      })
  };

  averageCalculator = () => {
    let avgSum = 0;
    this.state.reviewArray.forEach(review => {
      avgSum += review.rating
    })
    let average = (avgSum / this.state.reviewArray.length);
    return Math.ceil(average * 10) / 10;
  };

  recommendPercent = () => {
    let recommendSum = 0;
    this.state.reviewArray.forEach(review => {
      if (review.recommend) {
        recommendSum++;
      }
    })
    return ((recommendSum / this.state.reviewArray.length) * 100)
  };

  ratingTotals = () => {
    console.log('ratingTotals[0]: ', this.state.ratingTotals[0]);
    this.state.reviewArray.forEach(review => {
      if (review.rating === 1) {
        this.state.ratingTotals[0].value++;
      } else if (review.rating === 2) {
        this.state.reviewTotals[1].value++;
      } else if (review.rating === 3) {
        this.state.reviewTotals[2].value++;
      } else if (review.rating === 4) {
        this.state.reviewTotals[3].value++;
      } else if (review.rating === 5) {
        this.state.reviewTotals[4].value++;
      }
    })
  };

  render() {
    let barHeight = 30;
    let barGroups = this.state.ratingTotals.map((data, i) =>
      <g transform={`translate(0, ${i * barHeight})`}>
        <BarGroup key={i} data={data} barHeight={barHeight} />
      </g>
    );
    return (
      <div id="ReviewStats">
        <span>
          <h2>{this.averageCalculator()}</h2>
          <StaticStars rating={this.averageCalculator()} />
        </span>
        <span>{Math.ceil(this.recommendPercent() * 1) / 1}% of reviews recommend this product</span>
        <svg width="800" height="300" >
          <g className="container">
            <g className="chart" transform="translate(100,60)">

              {barGroups}
            </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default ReviewStats;