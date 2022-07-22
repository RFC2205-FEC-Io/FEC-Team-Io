import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import ReviewsApp from "../ReviewsApp.jsx";
import ReviewTile from "./ReviewTile.jsx";
import ReviewFormHooks from "./ReviewFormHooks.jsx";
import ReviewStats from "./ReviewStats.jsx";

/*------------------------- STYLED COMPONENTS------------------------------*/

const Reviews = styled.div`
display: grid;
grid-template-columns: 400px 2fr;
grid-gap: 30px;
grid-row: 1;
background-color: white;
padding: 5px;
margin: 5px;
`;
const Stats = styled.div`
display: flex;
justify-content: center;
background-color: white;
padding: 5px;
margin: 5px;
`;
const Tile = styled.div`
display: flex;
justify-content: center;
background-color: white;
padding: 5px;
margin: 5px;
`;
const ButtonStyle = styled.button`
  margin: 0 auto;
  font-size: 14px;
  text-align: center;
  width: 160px;
  height: 40px;
  background-color: grey;
  color: white;
  border-radius: 5px;
  border: none;
`;


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
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.displayCount !== this.state.displayCount) {
      this.getReviews(1, 50, this.state.sort);
    }
    if (prevState.productID !== this.props.product_id) {
      this.setState({ productID: this.props.product_id });
      this.getReviews(1, 50, this.state.sort);
    }
  }

  getReviews(page, count, sort) {
    return axios.get(`/reviews/?product_id=${this.state.productID}&count=${count}&sort=${sort}`)
      .then(res => {
        this.setState({ reviewArray: res.data.results });

      })
      .catch(err => {
        console.log(err);
      })
  };

  getMetadata(productID) {
    return axios.get(`/reviews/meta/?product_id=${productID}`)
      .then(res => {
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
    var id = Number(e.target.parentElement.parentElement.className);
    var clicked = this.state.helpClick;
    if (clicked.indexOf(id) === -1) {
      clicked.unshift(id);
      this.setState({
        helpClick: clicked
      })
      axios.put(`/reviews/help/?review_id=${id}`)
        .then(() => {
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
            <br />
          </div>)
      }
    };
    return <div>{displayList}</div>;
  };

  showModal = (e) => {
    this.setState({
      addFormShow: !this.state.addFormShow
    });
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
    return (
      <Reviews>
        <Stats>
          <ReviewStats productID={this.state.productID} />
        </Stats>
        <div align="center">
          <Tile>
            {this.mapDisplayList()}
          </Tile>
          <ButtonStyle className="btn btn-success" onClick={this.displayCount}>See More Reviews</ButtonStyle>
          <br/>
          <br/>
          <ButtonStyle className="btn btn-success" onClick={this.handleShow}>Add a Review</ButtonStyle>
        </div>
        <Modal show={this.state.addFormShow} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>
              Add New Review
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReviewFormHooks characteristics={this.state.characteristics} productID={this.state.productID} handleClose={this.handleClose} />
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.handleClose}>
              Close Button
            </Button> */}
          </Modal.Footer>
        </Modal>
      </Reviews>
    );
  }
}


export default ReviewsList;