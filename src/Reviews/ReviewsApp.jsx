
import React from "react";
import ReviewsList from "./components/ReviewsList.jsx";
import ReviewStats from "./components/ReviewStats.jsx";
import {myRef, handleScroll} from '../Overview/components/Stars.jsx';

const ReviewsApp = ({product_id, myRef, handleScroll}) => {

    return (
      <div id='reviews-app' ref={myRef}>
        <ReviewsList product_id={product_id}/>
      </div>
    );
}

export default ReviewsApp;