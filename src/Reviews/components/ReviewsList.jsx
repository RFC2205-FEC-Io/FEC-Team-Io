import React from "react";
import axios from "axios";
import ReviewsApp from "../ReviewsApp.jsx";
import ReviewTile from "./ReviewTile.jsx";

//viable product id: 66642
class ReviewsList extends React.Component {
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

  getReviews = () => {
    axios.get(`/reviews/?product_id=${this.state.productID}&count=100`)
    // axios.get('/reviews', {params: {product_id: this.state.productID}})
    .then(res => {
      console.log('res.data: ', res.data);
      this.setState({reviewArray: res.data.results});
    })
    .catch(err => {
      alert('Error, no reviews to post');
    })
  };

  // reviewTiles = (this.state.reviewArray) => {
  //   return 'xyz';
  // }

  render() {
    return (
      <div>
        <p id="reviewListHeader">ReviewsList Here</p>
        <ul id="reviewTileList">
          {this.state.reviewArray.map(review =>
            // return (
              <div>
                <ReviewTile
                  key={review.review_ID}
                  rating={review.rating}
                  summary={review.summary}
                  recommend={review.recommend}
                  response={review.response}
                  body={review.body}
                  date={review.date}
                  reviewerName={review.reviewer_name}
                  helpfulness={review.helpfulness}
                  photos={review.photos}
                  />
              </div>
            // )
          )}
          </ul>
        {/* <button id="ReviewFormButton" onClick={}>Add A Review +</button> */}
      </div>
    );
  }
}


export default ReviewsList;