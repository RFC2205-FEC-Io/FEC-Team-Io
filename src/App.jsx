
import React from "react";
import ReviewsApp from "./Reviews/ReviewsApp.jsx"

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <ReviewsApp />
      </div>
    );
  }
}

export default App;
