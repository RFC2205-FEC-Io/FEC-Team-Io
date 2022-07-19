
import React from "react";
import ReviewsList from "./components/ReviewsList.jsx";
import ReviewStats from "./components/ReviewStats.jsx";
import {myRef, handleScroll} from '../Overview/components/Stars.jsx';
class ReviewsApp extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div id='reviews-app' ref={myRef}>
        {/* <ReviewStats /> */}
        <ReviewsList />
      </div>
    );
  }
}

export default ReviewsApp;