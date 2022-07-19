import React, { useState, useEffect } from "react";
import Rating from 'react-simple-star-rating';
import ReviewsList from "./ReviewsList";
import axios from "axios";
// import FormModal from "./FormModal.jsx";
// import DynamicStars from "./DynamicStars";
import {Form, Button} from 'react-bootstrap';
// import "./ReviewStyles.css";
// import PropTypes from "prop-types";

function ReviewFormHooks({characteristics, id}) {

  //-----------------------State Hooks ---------------------------
  const [rating, setRating] = useState(0);
  const [starsArray, setStarsArray] = useState([0, 0, 0, 0, 0]);
  const [oldArray, setOldArray] = useState([0, 0, 0, 0, 0]);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(true);
  const [chars, setChars] = useState({});
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  //------------------ Embedded Functions ------------------------
  const handleRating = (rate) => {
    setRating(rate)
  }

  const handleSummary = (e) => {
    e.preventDefault();
    setSummary(e.target.value)
  }
  const handleRecommend = (e) => {
    e.preventDefault();
    setRecommend(e.target.value)
  }
  const handleChars = (e) => {
    var val = Number(e.target.value);
    var charVal = chars;
    charVal[characteristics[e.target.id].id] = val;
    setChars(charVal);
  }
  const handleBody = (e) => {
    e.preventDefault();
    setBody(e.target.value)
  }
  const handleNickname = (e) => {
    e.preventDefault();
    setNickname(e.target.value)
  }
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }

  const charMap = () => {
    var propChars = characteristics;
    var charList = [];
    for (var char in propChars) {
      charList.push(<Form.Range id={char} onChange={handleChars} min="1" max="5" value={chars[propChars[char].id]} required>{char}</Form.Range>)
    }
    return <form>{charList}</form>
  }

  const bodyMinCalculator = () => {
    // let reviewBody = document.getElementsByName("reviewFormBody");
    if (body.length < 50) {
      return (
        <div>Your Review needs {50 - body.length} more characters</div>
      )
    } else {
      return (
        <div>Minimum length met!</div>
      )
    }
  }

  return (
    <div>
      <span>Product Id {id}<br /></span>
      <Form>
        <Form.Group>
          <Form.Label>Rating *</Form.Label>
          <Form.Control as="Rating" onclick={handleRating} ratingValue={rating} size={20} transition fillColor="yellow" emptyColor="gray" required />
          {rating}
        </Form.Group>
        <Form.Group>
          <Form.Label>Summary *</Form.Label>
          <Form.Control as="textarea" maxLength="60" placeholder="60 Characters Max" onChange={handleSummary} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Recommend? *</Form.Label>
          <Form.Check type="radio" id="default-radio" label="Yes" value="true" onChange={handleRecommend} />
          <Form.Check type="radio" id="default-radio" label="No" value="false" onChange={handleRecommend} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Characteristics *</Form.Label>
          {charMap}
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Review *</Form.Label>
          <Form.Control as="textarea" maxLength="1000" minLength="50" placeholder="Tell us what you thought about this unique product!" onChange={handleBody} required />
          {bodyMinCalculator}
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Nickname *</Form.Label>
          <Form.Control as="textarea" maxLength="60" placeholder="60 Characters Max" onChange={handleNickname} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Email *</Form.Label>
          <Form.Control as="textarea" maxLength="60" placeholder="60 Characters Max" onChange={handleEmail} required />
        </Form.Group>
        <Button variant="success" type="submit" block>
          Submit Review
        </Button>
      </Form>
    </div>
  )
}

export default ReviewFormHooks;