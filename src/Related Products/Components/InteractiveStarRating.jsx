import React, { useState } from 'react';
import { FaStar } from 'react-icons/Fa';

const InteractiveStarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
        <label>
          <input
            type="radio"
            name="ratingStars"
            value={ratingValue}
            onClick={() => setRating(ratingValue)}
          />
          <FaStar
          className="star"
          color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
          onMouseEnter={() => setHover(ratingValue)}
          onMouseLeave={() => setHover(null)}
          size={100}/>
        </label>
        );
      })}
    </div>
  )
}

export default InteractiveStarRating;