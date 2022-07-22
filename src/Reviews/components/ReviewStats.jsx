import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import styled from "styled-components";
import ReviewsList from "./ReviewsList.jsx";
import DynamicStars from "./DynamicStars.jsx";
import StaticStars from "./StaticStars.jsx";

/*------------------------- STYLED COMPONENTS------------------------------*/
const Averages = styled.div`
display: in-line grid;
grid-template-columns: 90px 3fr;
grid-gap: 5px;
background-color: white;
padding: 5px;
margin:
`;

const AverageRating = styled.h2`
display: flex;
justify-content: left;
background-color: white;
font-size: 64px;
padding: 5px;
margin: 5px 5px;
`;

const AverageStars = styled.div`
display: flex;
justify-content: right;
background-color: white;
padding: 5px;
margin: 5px 5px;
width: 120px;
position: relative;
left: 120px;
bottom: 80px;
`;

const Range = styled.div`
  width: 200px
`;
const CharLabel = styled.label`
  margin: 5px 5px;
  font-size: 14px;
  text-align-last: left;
  width: 200px;
`;

const BarBG = styled.div`
  background-color: silver;
  text-align-last: center;
  width: 200px;
  height: 25px;
`;

const BarMarker = styled.div(props => ({
  width: props.length,
  margin: '2px 2px 15px 2px',
  'font-size': '12px',
  'text-align-last': 'right',
  height: '1px'
}));

const ProgressBar = styled.progress`
width: 150 px;
height: 15 px;
border-radius: 16 px;
color: grey;
`;

const RatingLabels = styled.div`
  text-align-last: center;
  width: 200px;
  font-size: 12px;
`;

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
      sum += Number(ratings[rating]) * rating;
    }
    return (Math.floor(sum / total * 10) / 10);
  }

  recommendPercent = () => {
    if (this.state.recommends.false === undefined) {
      return 100;
    }
    var total = Number(this.state.recommends.true) + Number(this.state.recommends.false);
    return Math.ceil(this.state.recommends.true / total * 100);
  }

  ratingsChart = () => {
    var divList = [];
    var total = 0;
    var ratings = this.state.ratings;
    var ratingTypes = [1, 2, 3, 4, 5];
    for (var rating in ratings) {
      total += Number(ratings[rating]);
    }
    for (var i = 4; i > -1; i--) {
      if (ratings[ratingTypes[i]] === undefined) {
        divList.push(<div class='stars' onClick={this.starFilter} id={ratingTypes[i]}>{ratingTypes[i]} Stars  <progress class='starbar' id={ratingTypes[i]} value="0" max="100" /></div>)
      } else {
        divList.push(<div class='stars' onClick={this.starFilter} id={ratingTypes[i]}>{ratingTypes[i]} Stars  <progress class='starbar' id={ratingTypes[i]} value={Math.floor(Number(ratings[ratingTypes[i]]) / total * 100)} max="100" /></div>)
      }
    }
    return <div>{divList}</div>
  }

  charMap = () => {
    var charList = [];
    var ratingLabels = {
      'Fit': { 0: 'Too Small', 1: 'Perfect', 2: 'Too Large' },
      'Length': { 0: 'Too Short', 1: 'Perfect', 2: 'Too Long' },
      'Comfort': { 0: 'Poor', 1: '     ', 2: 'Perfect' },
      'Quality': { 0: 'Poor', 1: '     ', 2: 'Perfect' },
      'Size': { 0: 'Too Small', 1: 'Perfect', 2: 'Too Large' },
      'Width': { 0: 'Too Short', 1: 'Perfect', 2: 'Too Wide' }
    }
    for (var char in this.state.characteristics) {
      var length = Math.floor(Number(this.state.characteristics[char].value) / 5 * 200)
      charList.push(<div>
        <CharLabel>{char}</CharLabel>
        <BarBG>|</BarBG>
        <BarMarker length={length}>^</BarMarker>
        <RatingLabels>{ratingLabels[char][0]}&emsp;&nbsp;{ratingLabels[char][1]}&nbsp;&emsp;{ratingLabels[char][2]}</RatingLabels>
      </div>
      )
    }
    return <div>{charList}</div>
  }

  render() {
    return (
      <div id="ReviewStats">
        <Averages>
          <span>
            <AverageRating>
              {this.averageCalculator()}
            </AverageRating>
            <AverageStars>
              <StaticStars rating={this.averageCalculator()} />
            </AverageStars>
          </span>
        </Averages>
        <span>{Math.ceil(this.recommendPercent() * 1) / 1}% of reviews recommend this product</span>
        <br/>
        <br/>
        <div>{this.ratingsChart()}</div>
        <div>{this.charMap()}</div>

      </div>
    )
  }
}

export default ReviewStats;