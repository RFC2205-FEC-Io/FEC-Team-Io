import React from "react";
import "./ReviewStyles.css";
import ReviewStats from "./ReviewStats.jsx";

class DynamicStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsArray: [0, 0, 0, 0, 0],
      oldArray: [0, 0, 0, 0, 0]
    };
  }

  handleStarsHover = event => {
    event.preventDevault();
    let rating = parseInt(event.target.getAttribute("value")) + 1;
    let newArray = [];
    while (newArray.length < 5) {
      if (rating > 0) {
        rating--;
        newArray.push(1);
      } else {
        newArray.push(0);
      }
    }
    this.setState({
      starsArray: newArray
    })
  }

  handleStarsClick = event => {
    event.preventDefault();
    this.setState({
      oldArray: this.state.starsArray
    })
  }

  handleStarsLeave = event => {
    event.preventDefault();
    this.setState({
      starsArray: this.state.oldArray
    })
  }

  render() {
    return (
      <div>
        {this.state.starsArr.map((item, i) => {
          return (
            <span className="single-star-container" value={i} key={i} onMouseOver={this.handleStarsHover} onClick={this.handleStarsClick} onMouseLeave={this.handleStarsLeave}>
              <span className="single-star-fill" style={{ "width": "20px"}}>
                <img className="single-star-outline" src="Single-Empty-Star.PNG" value={i} width="20px" height="20px"/>
              </span>
            </span>
          )
        })}
      </div>
    )
  }
}
export default DynamicStars;