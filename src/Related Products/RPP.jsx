import React from 'react';
import './Components/RelatedProductStyles.css';
import InteractiveStarRating from './Components/InteractiveStarRating.jsx';
import StaticStarRating from './Components/StaticStarRating.jsx';
import StarIconButton from './Components/StarIconButton.jsx';
import XIconButton from './Components/XIconButton.jsx';

class RPP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomInfo: []
    }
    this.StarIconButtonClickHandler = this.StarIconButtonClickHandler.bind(this);
    this.XIconButtonClickHandler = this.XIconButtonClickHandler.bind(this);
  }
 StarIconButtonClickHandler (event) {
  console.log("Star Icon Button was clicked.")
 }

 XIconButtonClickHandler (event) {
  console.log("X Icon Button was clicked.")
 }

  render () {
    return (
      <div className="RPP">
        <StarIconButton StarIconButtonClickHandler={this.StarIconButtonClickHandler} />
        <XIconButton XIconButtonClickHandler={this.XIconButtonClickHandler} />
      </div>
    );
  };
};

export default RPP;