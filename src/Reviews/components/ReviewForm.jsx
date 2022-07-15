import React from "react";
import ReviewsList from "./ReviewsList";
import "./ReviewStyles.css"
import PropTypes from "prop-types";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="reivewForm">
        <h2>Modal Window</h2>
        <button class="toggle-button" onClick={this.onClose}>Submit</button>
      </div>
    )
  }
}
ReviewForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default ReviewForm;