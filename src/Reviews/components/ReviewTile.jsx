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
    <div>
      <h3>Ratings:</h3>
      <StaticStars rating={rating} />
      <span>{reviewerName}</span>
      <span>{date}</span>
      <h3>{summary}</h3>
      <p>{body}</p>
      {() => {if (recommend === false) {return <span>&#10003; I recommend this product</span>;}}}
      <div>
        <h4>Response:</h4>
        <p>Dummy Response{response}</p>
      </div>
      <span>
        Helpful? <a>Yes</a> | <a>Report</a>
      </span>
    </div>
    )
}

export default ReviewTile;

