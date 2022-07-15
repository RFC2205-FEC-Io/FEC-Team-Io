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
      displayCount: 2,
      displayList: [],
    }
  };

  async componentDidMount() {
    const reviewDB = await getReviews();
    console.log("reviewArray after GET: ", this.state.reviewArray)
  };

  //the code block below should map from reviewArray in state to displayList per current displayCount. Having difficulty figuring out where to put it.
  // for (var i = 0; i < this.state.displayCount; i++) {
  //   console.log("reviewArray[i]: ", this.state.reviewArray[i])
  //   this.state.displayList.push(this.state.reviewArray[i]);
  // }
  // console.log('displayList: ', this.state.displayList)

  getReviews() {
    return axios.get(`/reviews/?product_id=${this.state.productID}&count=100`)
      .then(res => {
        // console.log('res.data: ', res.data);
        this.setState({ reviewArray: res.data.results });
      })
      .catch(err => {
        alert('Error, no reviews to post');
      })
  };

  displayCount = () => {
    this.setState({
      displayCount: this.state.displayCount + 2
    })
  }

  mapDisplayList = () => {
    for (var i = 0; i < this.state.displayCount; i++) {
      console.log("reviewArray[i]: ", this.state.reviewArray[i])
      this.state.displayList.push(this.state.reviewArray[i]);
    }
    console.log('displayList: ', this.state.displayList)
  }

  render() {
    this.mapDisplayList()
    return (
      <div>
        <p id="reviewListHeader">ReviewsList Here</p>
        <ul id="reviewTileList">
          {/* {this.mapDisplayList} */}
          {this.state.displayList.map(review =>
            // return (
            <div>
              <ReviewTile
                key={review.review_id}
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
          )
          }
        </ul>
        {/* <button id="ReviewFormButton" onClick={}>Add A Review +</button> */}
        <button id="ReviewDisplayIncrease" onClick={this.displayCount}>See More Reviews</button><br></br>
        <button id="reviewAddForm" onClick="someFunctionHere">Add a Review</button>
      </div>
    );
  }
}


export default ReviewsList;