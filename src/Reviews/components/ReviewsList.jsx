import React from "react";
import axios from "axios";
import {Modal, Button} from "react-bootstrap";
import ReviewsApp from "../ReviewsApp.jsx";
import ReviewTile from "./ReviewTile.jsx";
import ReviewForm from "./ReviewForm.jsx";
import ReviewFormHooks from "./ReviewFormHooks.jsx";
import ReviewStats from "./ReviewStats.jsx";
import FormModal from "./FormModal.jsx";

//viable product id: 66642
class ReviewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewArray: [],
      productID: this.props.product_id,
      displayCount: 2,
      addFormShow: false,
      sort: 'helpful',
      helpClick: [],
      reported: [],
      characteristics: {},
    }
  };

  componentDidMount() {
    this.getReviews(1, 50, this.state.sort);
    this.getMetadata(this.state.productID)
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

  getMetadata(productID) {
    return axios.get(`/reviews/meta/?product_id=${productID}`)
      .then(res => {
        console.log('metadata request came through!')
        this.setState({
          characteristics: res.data.characteristics
        });
      })
      .catch(err => {
        console.log('Error, no reviews summarize');
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

  reportReview = (e) => {
    e.preventDefault();
    this.setState({
      reported: this.state.reported.push(e.target.reviewID)
    })
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
      else if ((review !== undefined) && (this.state.reported.indexOf(review.review_id) === -1)) {
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
              reportReview={this.reportReview}
            />
          </div>)
      }
    };
    return <div>{displayList}</div>;
  };

  showModal = (e) => {
    this.setState({
      addFormShow: !this.state.addFormShow
    });
// console.log('addFormShow: ', this.state.addFormShow)
  };

  handleShow = () => {
    this.setState({
      addFormShow: true
    })
  }

  handleClose = () => {
    this.setState({
      addFormShow: false
    })
  }

  render() {
    // this.mapDisplayList()
    return (
      <div>
        <ReviewStats productID={this.state.productID} />
        <div className="reviewTileList">
          {this.mapDisplayList()}
        </div>
        {/* <button id="ReviewFormButton" onClick={}>Add A Review +</button> */}
        <button id="ReviewDisplayIncrease" onClick={this.displayCount}>See More Reviews</button><br></br>
        <button className="btn btn-success" onClick={this.handleShow}>Add a Review</button>
        <Modal show={this.state.addFormShow} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>
              Add New Review
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReviewFormHooks characteristics={this.state.characteristics} id={this.state.productID}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close Button
            </Button>
          </Modal.Footer>
        </Modal>
        {/* <FormModal  show={this.state.addFormShow} >
          <ReviewForm productID={this.state.productID} starFilter={this.starFilter} onClose={this.showModal}/>
        </FormModal> */}
      </div>
    );
  }
}


export default ReviewsList;