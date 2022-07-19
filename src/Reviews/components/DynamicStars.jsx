import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ReviewFormHooks from "./ReviewFormHooks.jsx";

const DynamicStars = ({ handleStarsClick, rating }) => {

  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <span
            name="rating"
            value={ratingValue}
            key={i}
 >
            <FaStar
              className="star"
              size={20}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => {setHover(ratingValue)}}
              onMouseLeave={() => {setHover(null)}}
              onClick={handleStarsClick}
              />
          </span>
        )
      })}
    </div>
  )

}
export default DynamicStars;