import React from "react";
import ReviewTile from "./ReviewTile.jsx";

const StaticStars = ({rating}) => {
  return (
    <div className="star-rating">
      {[...Array(rating)].map((star) => {
        return (
          <span className="star">&#9733;</span>
        );
      })}
    </div>
  )
}

export default StaticStars;