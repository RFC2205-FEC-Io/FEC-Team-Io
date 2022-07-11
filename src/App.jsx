
import React from "react";
import RPP from "./Related Products/RPP.jsx";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <div id="relatedProducts">
          <RPP />
        </div>
      </>
    );
  }
}

export default App;
