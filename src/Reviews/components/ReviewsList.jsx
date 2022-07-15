import React from "react";
import axios from "axios";
import ReviewsApp from "../ReviewsApp.jsx";
import ReviewTile from "./ReviewTile.jsx";
import ReviewForm from "./ReviewForm.jsx";

//viable product id: 66642
class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewArray: [],
      productID: 66642,
      displayCount: 2,
      addFormShow: false,
      sort: 'helpful',
      helpClick: [],
    }
  };

   componentDidMount() {
    this.getReviews(1, 50, this.state.sort);
    console.log("reviewArray after GET: ", this.state.reviewArray)
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.displayCount !== this.state.displayCount) {
      this.getReviews(1, 50, this.state.sort);
    }
  }
  //the code block below should map from reviewArray in state to displayList per current displayCount. Having difficulty figuring out where to put it.
  // for (var i = 0; i < this.state.displayCount; i++) {
  //   console.log("reviewArray[i]: ", this.state.reviewArray[i])
  //   this.state.displayList.push(this.state.reviewArray[i]);
  // }
  // console.log('displayList: ', this.state.displayList)

  getReviews(page, count, sort) {
    return axios.get(`/reviews/?product_id=${this.state.productID}&count=${count}&sort=${sort}`)
      .then(res => {
        // console.log('res.data: ', res.data);
        this.setState({ reviewArray: res.data.results });

      })
      .catch(err => {
        console.log(err);
      })
  };

  putHelpful = (e) => {
    e.preventDefault();
    console.log('Helpful Clicked!');
    var id = Number(e.target.parentElement.parentElement.className);
    var clicked = this.state.helpClick;
    if (clicked.indexOf(id) === -1) {
      clicked.unshift(id);
      this.setState({
        helpClick: clicked
      })
      axios.put(`/reviews/help/?review_id=${id}`)
      .then(() => {
        console.log('this review is more helpful!');
      })
      .catch((err) => {
        console.log('Put request error', error);
      })
    }
  }

  displayCount = () => {
    this.setState({
      displayCount: this.state.displayCount + 2
    })
  };

  mapDisplayList = () => {
    console.log('this.state.: ', this.state.displayList)
    let displayList = [];
    for (var i = 0; i < this.state.displayCount; i++) {
      let review = this.state.reviewArray[i];
      if (review === undefined) {
        return displayList;
      }
      displayList.push(
      <div>
        <ReviewTile
          key={review.review_id}
          reviewID={review.review_id}
          rating={review.rating}
          summary={review.summary}
          recommend={review.recommend}
          response={review.response}
          body={review.body}
          date={review.date}
          reviewerName={review.reviewer_name}
          helpfulness={review.helpfulness}
          photos={review.photos}
          putHelpful={this.putHelpful}
        />
      </div>)
      };
    return <div>{displayList}</div>;
  };

  showModal = (e) => {
    this.setState({
      addFormShow: !this.state.addFormShow
    });
  };

  render() {
    // this.mapDisplayList()
    return (
      <div>
        <p id="reviewListHeader">ReviewsList Here</p>
        <ReviewForm onClose={this.showModal} show={this.state.addFormShow} />
        <div id="reviewTileList">
          {this.mapDisplayList()}
        </div>
        {/* <button id="ReviewFormButton" onClick={}>Add A Review +</button> */}
        <button id="ReviewDisplayIncrease" onClick={this.displayCount}>See More Reviews</button><br></br>
        <button className="reviewFormToggleButton" onClick={e => {this.showModal(e);}}>Add a Review</button>
      </div>
    );
  }
}


export default ReviewsList;