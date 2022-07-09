
import React from "react";
import Overview from '/Users/lawrence/FEC-Team-Io/src/Overview/components/Overview.jsx';
class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <body>
        <h1>
          Hello{name}
        </h1>
        <div id='overview'>
        <Overview/>
      </div>
      </body>
    );
  }
}

export default App;
