
import React from "react";
import ReviewsApp from "./Reviews/ReviewsApp.jsx"
import RPP from "./Related Products/RPP.jsx";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <ReviewsApp />
        <RPP />
      </div>
    );
  }
}

export default App;
