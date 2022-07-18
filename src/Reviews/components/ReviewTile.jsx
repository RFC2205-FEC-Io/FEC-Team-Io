import React from "react";
import ReviewsApp from "../ReviewsApp.jsx";
import ReviewsList from "./ReviewsList.jsx";
import StaticStars from "./StaticStars.jsx";

const ReviewTile = ({reviewID, rating, summary, recommend, response, body, date, reviewerName, helpfulness, photos, putHelpful, reportReview}) => {
  function recommendation(recommend) {
    if (recommend === true) {
      return <p>&#10003;</p>;
    }
  }

  function fullReviewHandler(e) {
    e.preventDefault();
    document.getElementById(e.target.parentElement.id).innerHTML = e.target.parentElement.className;
  }

  function bodyLengthCheck(body) {
    if (body.length > 250) {
      return <p className={body} id={reviewID}>{body.slice(0, 250) + '...'}<button onClick={fullReviewHandler}>Show Full Review</button></p>;
    } else {
      return <p>{body}</p>;
    }
  }

  function responseCheck(response) {
    if (response === null || response === '') {
      return null;
    } else {
      return <p id='response'> {`Response from Seller:\n${response}`}</p>
    }
  }

  function recommendCheck(recommend) {
    if (!recommend) {
      return null;
    } else {
      return <span>✅&nbsp;&nbsp;I recommend this product!</span>
    }
  }

  function dateFormatter(date) {
    var months = ['Blank', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var year = date.slice(0, 4);
    var month = Number(date.slice(5, 7));
    var day = date.slice(8, 10);
    return `${months[month]} ${day}, ${year}`;
  }
  //PUT request for updating helpful
  //PUT request for updating report
  //As of 7/11/22 @ 3:42, conditional rendering for recommend does not work. Unsure where to go.
  return (
    <div id="reviewTile" className={reviewID}>
      <h3 id="ratingsHeader">Ratings:</h3>
      <StaticStars rating={rating} />
      <span id="reviewDate">Reviewed On: {dateFormatter(date)} by {reviewerName}</span>
      <h3 id="reviewSummary">{summary}</h3>
      <div>{bodyLengthCheck(body)}</div>
      <div>{recommendCheck(recommend)}</div>
      <div>{responseCheck(response)}</div>
      <div>{photos.map(photo => <img id="reviewPhoto" src={photo.url} width="35" height="40" />)}</div>
      <span id="reviewHelpfulness">
        Helpful? <u className={`${reviewID}1`} onClick={putHelpful}>Yes</u> {helpfulness}| <u onClick={reportReview}>Report</u>
      </span>
    </div>
    )
}

export default ReviewTile;

