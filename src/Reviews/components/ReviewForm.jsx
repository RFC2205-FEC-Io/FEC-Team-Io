import React from "react";
import ReviewsList from "./ReviewsList";
import FormModal from "./FormModal.jsx";
import DynamicStars from "./DynamicStars";
import "./ReviewStyles.css";
import PropTypes from "prop-types";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      starsArray: [0, 0, 0, 0, 0],
      oldArray: [0, 0, 0, 0, 0],
      summary: '',
      body: '',
      recommend: true,
      chars: {},
      nickname: '',
      email: '',
      photos: [],
    }
  }

  componentDidMount() {
    this.metaMount();
  }

  onClose = e => {
    axios.post('/reviews', {
      product_id: this.props.productID,
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.body,
      recommend: this.state.recommend,
      nickname: this.state.nickname,
      email: this.state.email,
      photos: this.state.photos,
      characteristics: this.state.chars
    })
      .then(res => {
        console.log('Review Successfully Posted!');
        this.props.onClose && this.props.onClose(e);
      })
      .catch(err => {
        console.log(err);
      })

  };

  metaMount = () => {
    var metadataIn = this.props.chars;
    var stateMeta = {};
    for (var char in metadataIn) {
      stateMeta[metadataIn[char].id] = metadataIn[char].value;
    }
    this.setState({
      chars: stateMeta
    })
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

  bodyMinCalculator = () => {
    // let reviewBody = document.getElementsByName("reviewFormBody");
    if (this.state.body.length < 50) {
      return (
        <div>Your Review needs {50 - this.state.body.length} more characters</div>
      )
    } else {
      return (
        <div>Minimum length met!</div>
      )
    }

  }

  handleEvent = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    console.log('this.state[event.target.name]: ', this.state[event.target.name]);
  }

  charMapper = () => {
    var propChars = this.props.chars;
    var charList = [];
    for (var char in propChars) {
      charList.push(<div>{char}<input onChange={this.handleCharChange} type='range' min="1" max="5" value={this.state.chars[propChars[char].id]} id={char} /></div>)
    }
    return <form>{charList}</form>
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="reivewForm" show={this.props.show.toString()}>
        <span>Product Id {this.props.id}<br /></span>
        <span>
          Rating
          <DynamicStars handleStarsHover={this.handleStarsHover} handleStarsClick={this.handleStarsClick} handleStarsLeave={this.handleStarsLeave} starsArray={this.state.starsArray} />
        </span>
        <span><br />Short Summary <input name="summary" onChange={this.handleEvent} size="60" styles="maxlength='60'" placeholder='60 Characters Max' /><br /></span>
        <form>Recommended?*
          <input onClick={this.handleEvent} type='radio' value='true' name='recommend' id='Yes' /><label for='Yes'>&nbsp;Yes&nbsp;</label>
          <input onClick={this.handleEvent} type='radio' value='false' name='recommend' id='No' /><label for='No'>&nbsp;No&nbsp;</label><br />
        </form>
        <span>Characteristics* <div>{this.charMapper()}</div><br /></span>
        <span>Your Review* <textarea name="reviewFormBody" onChange={this.handleEvent} placeholder='Tell us what you thought about this unique product!' styles="minlength='50' maxlength='1000'" /><br /></span>
        <span>{this.bodyMinCalculator}</span>
        <span> Photos <input type='file' placeholder='test' /><br /></span>
        <span>Nickname* <input name="nickname" onChange={this.handleEvent} size="60" styles="maxlength='60'" placeholder='60 Characters Max' /><br /></span>
        <span>Email* <input name="email" onChange={this.handleEvent} size="60" styles="maxlength='60'" placeholder='60 Characters Max' /><br /></span>
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

// minlength="50" maxlength="1000"
// maxlength="60"