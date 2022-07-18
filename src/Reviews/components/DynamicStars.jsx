import React from "react";
import "./ReviewStyles.css";
import ReviewStats from "./ReviewStats.jsx";

const DynamicStars = ({handleStarsHover, handleStarsClick, handleStarsLeave, starsArray}) => {

  function starMap() {
    starsArray.map((item, i) => {
      return (
        <span className="single-star-container" value={i} key={i} onMouseOver={handleStarsHover} onClick={handleStarsClick} onMouseLeave={handleStarsLeave}>
          <span className="single-star-fill" style={{ "width": "20px"}}>
            <img className="single-star-outline" src="Single-Empty-Star.PNG" value={i} width="20px" height="20px"/>
          </span>
        </span>
      )
    })
  }

    return (
      <div>
        {starMap}
      </div>
    )
}
export default DynamicStars;