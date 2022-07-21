import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewTile from "./ReviewTile.jsx";
import ReviewStats from "./ReviewStats.jsx";
import ReviewFormHooks from "./ReviewFormHooks.jsx";

const StaticStars = ({rating }) => {

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <span
            name="rating"
            value={i + 1}
            key={i} >
            <FaStar
              className="star"
              size={20}
              value={i + 1}
              color={i + 1 <= (rating) ? "#ffc107" : "#e4e5e9"}
              />
          </span>
        )
      })}
    </div>
  )

}
export default StaticStars;