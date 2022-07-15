
import React from "react";
import ReviewsList from "./components/ReviewsList.jsx";
import ReviewStats from "./components/ReviewStats.jsx";

class ReviewsApp extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <ReviewStats />
        {/* <ReviewsList /> */}
      </div>
    );
  }
}

export default ReviewsApp;