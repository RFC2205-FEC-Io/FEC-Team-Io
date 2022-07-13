import React from "react";
import ReviewsApp from "../ReviewsApp.jsx";
import ReviewsList from "./ReviewsList.jsx";
import StaticStars from "./StaticStars.jsx";

const ReviewTile = ({rating, summary, recommend, response, body, date, reviewerName, helpfulness, photos}) => {
  function recommendation(recommend) {
    if (recommend === true) {
      return <p>&#10003;</p>;
    }
  }
  //PUT request for updating helpful
  //PUT request for updating report
  //As of 7/11/22 @ 3:42, conditional rendering for recommend does not work. Unsure where to go.
  return (
    <div id="reviewTile">
      <h3 id="ratingsHeader">Ratings:</h3>
      <StaticStars rating={rating} />
      <span id="reviewerName">{reviewerName}</span>
      <span id="reviewDate">{date}</span>
      <h3 id="reviewSummary">{summary}</h3>
      <p id="reviewBody">{body}</p>
      {() => {if (recommend === false) {return <span id="reviewRecommend">&#10003; I recommend this product</span>;}}}
      <div id="reviewResponse">
        <h4 id="reviewResponseHeader">Response:</h4>
        <p id="reviewResponseBody">Dummy Response{response}</p>
      </div>
      {photos.map(photo => <img id="reviewPhoto" src={photo.url} width="35" height="40" />)}
      <span id="reviewHelpfulness">
        Helpful? <a id="reportHelpful">Yes</a> | <a id="reportBad">Report</a>
      </span>
    </div>
    )
}

export default ReviewTile;

