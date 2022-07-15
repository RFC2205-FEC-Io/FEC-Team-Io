import React from "react";
import "./ReviewStyles.css";
import ReviewTile from "./ReviewTile.jsx";
import ReviewStats from "./ReviewStats.jsx"

const StaticStars = ({ rating }) => {
  let starRating = rating || 0;
  let displayStars = [];
  while (displayStars.length < 5) {
    if (starRating > 1) {
      displayStars.push(1);
    } else if (starRating > 0) {
      let empty = Math.abs(0 - starRating);
      let quart = Math.abs(0.25 - starRating);
      let half = Math.abs(0.5 - starRating);
      let three = Math.abs(0.75 - starRating);
      let full = Math.abs(1 - starRating);
      let closest = Math.min(empty, quart, half, three, full);
      switch (closest) {
        case (empty):
          displayStars.push(0);
          break;
        case quart:
          displayStars.push(0.28);
          break;
        case half:
          displayStars.push(0.5);
          break;
        case three:
          displayStars.push(0.72);
          break;
        case full:
          displayStars.push(1.0);
          break;
        default:
          console.log("OOPS");
          displayStars.push(0);
          break;
      }
    } else {
      displayStars.push(0);
    }
    starRating = starRating - 1;
  }
  return (
    <div className="star-rating">
      {displayStars.map((item, i) => {
        return (
          <span className="sincle-star-container" key={i}>
            <div className="single-star-fill" style={{ "width": `${parseInt(item * 31)}px` }}>
              <img className="single-star-outline" src="star.png" alt="stars alt" />
            </div>
          </span>
        );
      })}
    </div>
  );
};

export default StaticStars;