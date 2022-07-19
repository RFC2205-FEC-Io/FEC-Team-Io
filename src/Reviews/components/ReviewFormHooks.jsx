import React, { useState, useEffect } from "react";
import axios from "axios";
import {Form, Button} from 'react-bootstrap';
import ReviewsList from "./ReviewsList";
import DynamicStars from "./DynamicStars.jsx";

function ReviewFormHooks({characteristics, id}) {

  //-----------------------State Hooks ---------------------------
  const [rating, setRating] = useState(0);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(true);
  const [chars, setChars] = useState(characteristics);
  const [charRange, setCharRange] = useState(3);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  //------------------ Embedded Functions ------------------------
  const handleRating = (e) => {
    setRating(e.target.value)
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
    // var charVal = chars;
    // charVal[characteristics[e.target.id].id] = val;
    var id = e.target.id
    setChars(prevState => ({
      ...prevState,
      id: val
    }));
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
    var charList = [];
    for (var char in chars) {
      charList.push(<div><Form.Range id={char} onChange={handleChars} min="1" max="5" step="1" value={charRange} required /><br /></div>)
    }
    return <div><label align="left">{char}</label>{charList}</div>
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

  const handleStarsClick = e => {
    event.preventDefault();
    setRating(e.target.value)
  }

  return (
    <div>
      <h3 align="center" styles="margin:auto;text-align:center;">Product Id {id}</h3>
      <Form>
        <Form.Group>
          <Form.Label>Rating *</Form.Label>
          <DynamicStars  handleStarsClick={handleStarsClick} rating={rating}/>
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Summary *</Form.Label>
          <Form.Control as="textarea" maxLength="60" placeholder="60 Characters Max" onChange={handleSummary} required />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Recommend? *</Form.Label>
          <Form.Check type="radio" id="default-radio" label="Yes" value="true" onChange={handleRecommend} />
          <Form.Check type="radio" id="default-radio" label="No" value="false" onChange={handleRecommend} />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Characteristics *</Form.Label>
          {charMap()}
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Review *</Form.Label>
          <Form.Control as="textarea" maxLength="1000" minLength="50" placeholder="Tell us what you thought about this unique product!" onChange={handleBody} required />
          {console.log('body.length: ', body.length)}
          {bodyMinCalculator()}
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Nickname *</Form.Label>
          <Form.Control as="textarea" maxLength="60" placeholder="60 Characters Max" onChange={handleNickname} required />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Email *</Form.Label>
          <Form.Control as="textarea" maxLength="60" placeholder="60 Characters Max" onChange={handleEmail} required />
          <br />
        </Form.Group>
        <Button variant="success" type="submit" block>
          Submit Review
        </Button>
      </Form>
    </div>
  )
}

export default ReviewFormHooks;