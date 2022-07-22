import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
import styled from "styled-components";
import ReviewsList from "./ReviewsList";
import DynamicStars from "./DynamicStars.jsx";

/*------------------------- STYLED COMPONENTS------------------------------*/

const CharLabel = styled.label`
  margin: 5px 5px;
  font-size: 14px;
  text-align-last: left;
  width: 200px;
`;
const SubmitButton = styled.button`
  font-size: 14px;
  text-align-last: center;
  width: 160px;
  height: 40px;
  background-color: grey;
  color: white;
  border-radius: 5px;
  border: none;
`;

function ReviewFormHooks({ characteristics, productID, handleClose }) {

  //-----------------------State Hooks ---------------------------
  const [rating, setRating] = useState(3);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(true);
  const [chars, setChars] = useState(characteristics);
  const [charRange, setCharRange] = useState(3);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState(['']);


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
    var charVal = chars;
    // charVal[characteristics[e.target.id].id] = val;
    charVal[characteristics[e.target.id].id] = val
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

  // const charMap = () => {
  //   var charList = [];
  //   for (var char in chars) {
  //     charList.push(<div><label>{char}</label><Form.Range id={char} onChange={handleChars} min="1" max="5" step="1" value={charRange} required /><br /></div>)
  //   }
  //   return <div><label align="left">{char}</label>{charList}</div>
  // }

  const charMap = () => {
    var charList = [];
    var ratingLabels = {
      'Fit': { 0: 'Too Small', 1: 'Perfect', 2: 'Too Large' },
      'Length': { 0: 'Too Short', 1: 'Perfect', 2: 'Too Long' },
      'Comfort': { 0: 'Poor', 1: '     ', 2: 'Perfect' },
      'Quality': { 0: 'Poor', 1: '     ', 2: 'Perfect' },
      'Size': { 0: 'Too Small', 1: 'Perfect', 2: 'Too Large' },
      'Width': { 0: 'Too Short', 1: 'Perfect', 2: 'Too Wide' }
    }
    for (var char in characteristics) {
      charList.push(<div>
        <CharLabel>&emsp;{char}&emsp;</CharLabel>
        <Form.Range id={char} onChange={handleChars} min="1" max="5" step="1" value={chars[characteristics[char].value]} id={char} required />&emsp;{ratingLabels[char][chars[characteristics[char].id]]}
        {/* <RatingLabels>{ratingLabels[char][0]}&emsp;&nbsp;{ratingLabels[char][1]}&nbsp;&emsp;{ratingLabels[char][2]}</RatingLabels> */}
      </div>
      )
    }
    return <div>{charList}</div>
  }

  const bodyMinCalculator = () => {
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

  const handleStarsClick = (e) => {
    event.preventDefault();
    // console.log('data: ', data)
    setRating(e.target.value)
  }

  const submitReview = (e) => {
    e.preventDefault();
    var check = reviewValidator();
    if (check !== 1) {
      return
    } else {
      var options = {
        method: 'post',
        url: '/reviews',
        params: {
          'product_id': productID,
          'rating': rating,
          'summary': summary,
          'body': body,
          'recommend': recommend,
          'name': nickname,
          'email': email,
          'photos': photos,
          'characteristics': chars
        }
      };
      axios(options)
        .then(() => { console.log('Posted Successfully'); })
        .catch((err) => { console.log('axios post error: ', err); })
    }
    handleClose();
  }

  const reviewValidator = () => {
    var errorArray = [];
    if (body.length < 50) {
      errorArray.push(' Review Body must be at least 50 characters')
    }
    if (body.length > 1000) {
      errorArray.push(' Review Body must be less than 1000 characters')
    }
    if (email.indexOf('@') === -1) {
      errorArray.push(' Email must be valid')
    }
    if (errorArray.length === 0) {
      return 1
    } else {
      alert('Check the following: ' + errorArray)
    }
  }

  return (
    <div>
      <h3 align="center" styles="margin:auto;text-align:center;">Product Id {productID}</h3>
      <Form>
        <Form.Group>
          <Form.Label>Rating *</Form.Label>
          <DynamicStars setRating={setRating} rating={rating} handleStarsClick={handleStarsClick} />
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
      </Form>
      <SubmitButton onClick={submitReview}>
        Submit Review
      </SubmitButton>
    </div>
  )
}

export default ReviewFormHooks;