import React, { useState, createContext, useContext } from "react";
import { FaStar } from "react-icons/fa";
import ReviewFormHooks from "./ReviewFormHooks.jsx";

const DynamicStars = ({ rating, setRating, handleStarsClick }) => {

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
            onMouseEnter={() => { setHover(ratingValue) }}
            onMouseLeave={() => { setHover(null) }}
            onClick={() => { setRating(ratingValue); }}
          >
            <FaStar
              className="star"
              size={20}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}

            />
          </span>
        )
      })}
    </div >
  )

}
export default DynamicStars;