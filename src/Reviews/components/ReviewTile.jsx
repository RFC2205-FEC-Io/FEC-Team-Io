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
  return (
    <div>
      <h3>Ratings:</h3>
      <StaticStars rating={rating} />
        {() => {if (recommend === false) {return <span>&#10003;</span>;}}}
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

