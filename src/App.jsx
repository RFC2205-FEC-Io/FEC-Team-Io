
import React from "react";
import Overview from './Overview/components/Overview.jsx';
import ReviewsApp from "./Reviews/ReviewsApp.jsx"
import RPP from "./Related Products/RPP.jsx";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        {/*<Overview/>*/}
        <RPP />
        {/*<ReviewsApp />*/}
      </div>
    );
  }
}

export default App;
