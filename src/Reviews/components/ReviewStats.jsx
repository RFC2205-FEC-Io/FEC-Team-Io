import React from "react";
import axios from "axios";
import ReviewsList from "./ReviewsList.jsx";
import DynamicStars from "./DynamicStars.jsx";
import StaticStars from "./StaticStars.jsx";
import BarGroup from "./BarGroup.jsx";

class ReviewStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.productID,
      ratings: {},
      recommends: {},
      characteristics: {},
    }
  };


  getMetadata(productID) {
    return axios.get(`/reviews/meta/?product_id=${productID}`)
      .then(res => {
        console.log('metadata request came through!')
        this.setState({
          ratings: res.data.ratings,
          recommends: res.data.recommended,
          characteristics: res.data.characteristics
        });
      })
      .catch(err => {
        console.log('Error, no reviews summarize');
      })
  };

  componentDidMount() {
    this.getMetadata(this.props.productID);
    // this.render();
  };

  averageCalculator = () => {
    var total = 0;
    var sum = 0;
    var ratings = this.state.ratings;
    for (var rating in ratings) {
      total += Number(ratings[rating]);
      sum +=  Number(ratings[rating]) * rating;
    }
    return  [(Math.ceil(sum/total * 10) / 10), total];
  }

  recommendPercent = () => {
    if (this.state.recommends.false === undefined) {
      return 100;
    }
    var total = Number(this.state.recommends.true) + Number(this.state.recommends.false);
    return Math.ceil(this.state.recommends.true/total * 100);
  }

  ratingsChart = () => {
    var divList = [];
    var total = 0;
    var ratings = this.state.ratings;
    var ratingTypes = [1, 2, 3, 4, 5];
    for (var rating in ratings) {
      total += Number(ratings[rating]);
    }
    for (var i = 0; i < 5; i ++) {
      if (ratings[ratingTypes[i]] === undefined) {
        divList.push(<div class='stars' onClick={this.starFilter} id={ratingTypes[i]}>{ratingTypes[i]} Stars  <progress class='starbar' id={ratingTypes[i]} value ="0" max = "100"/></div>)
      } else {
        divList.push(<div class='stars' onClick={this.starFilter} id={ratingTypes[i]}>{ratingTypes[i]} Stars  <progress class='starbar' id={ratingTypes[i]} value ={Math.floor(Number(ratings[ratingTypes[i]])/total*100)} max = "100"/></div>)
      }
    }
    return <div>{divList}</div>
  }

  render() {
    return (
      <div id="ReviewStats">
        <span>
          <h2>{this.averageCalculator()}</h2>
          <StaticStars rating={this.averageCalculator()} />
        </span>
        <span>{Math.ceil(this.recommendPercent() * 1) / 1}% of reviews recommend this product</span>
        <div>{this.ratingsChart()}</div>
      </div>
    )
  }
}

export default ReviewStats;