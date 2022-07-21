import React from "react";
import styled from "styled-components";
import ReviewsApp from "../ReviewsApp.jsx";
import ReviewsList from "./ReviewsList.jsx";
import StaticStars from "./StaticStars.jsx";

/*------------------------- STYLED COMPONENTS------------------------------*/

const Body = styled.div`
  font-family: "Roboto";
  font-weight: 100px;
  inline-size: 500px;
  overflow-wrap: break-word;
  hyphens: manual;
  font-size: 14px;
`;

const Response = styled(Body)`
font-size: 12px;
`;

const Button = styled.button`

`;

const Header = styled.h3`
grid-row: 1;
grid-column-start: 1;
grid-column-end: 3;
justify-items: left;
`;

const Summary = styled(Header)`
justify-items: center;
`;

const Helpful = styled.span`
font-family: "Roboto";
font-weight: 100px;
inline-size: 500px;
overflow-wrap: break-word;
hyphens: manual;
`;

const ReviewerDate = styled(Helpful)`
font-style: italic;
font-size: 12px;
`;

const Recommend = styled(Helpful)`
font-size: 12px;
`;

const ReviewTile = ({reviewID, rating, summary, recommend, response, body, date, reviewerName, helpfulness, photos, putHelpful, reportReview}) => {
  function recommendation(recommend) {
    if (recommend === true) {
      return <p>&#10003;</p>;
    }
  }

  function fullReviewHandler(e) {
    e.preventDefault();
    document.getElementById(e.target.parentElement.id).innerHTML = e.target.parentElement.className;
  }

  function bodyLengthCheck(body) {
    if (body.length > 250) {
      return <p className={body} id={reviewID}>{body.slice(0, 250) + '...'}<button onClick={fullReviewHandler}>Show Full Review</button></p>;
    } else {
      return <p>{body}</p>;
    }
  }

  function responseCheck(response) {
    if (response === null || response === '') {
      return null;
    } else {
      return <p id='response'> {`Response from Seller:\n${response}`}</p>
    }
  }

  function recommendCheck(recommend) {
    if (!recommend) {
      return null;
    } else {
      return <span>✅&nbsp;&nbsp;I recommend this product!</span>
    }
  }

  function dateFormatter(date) {
    var months = ['Blank', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var year = date.slice(0, 4);
    var month = Number(date.slice(5, 7));
    var day = date.slice(8, 10);
    return `${months[month]} ${day}, ${year}`;
  }
  //PUT request for updating helpful
  //PUT request for updating report
  //As of 7/11/22 @ 3:42, conditional rendering for recommend does not work. Unsure where to go.
  return (
    <div id="reviewTile" className={reviewID}>
      <Header>
      <h3 id="ratingsHeader">Ratings:</h3>
      </Header>
      <StaticStars rating={rating} />
      <ReviewerDate id="reviewDate">Reviewed On: {dateFormatter(date)} by {reviewerName}</ReviewerDate>
      <Summary>
      <h3 id="reviewSummary">{summary}</h3>
      </Summary>
      <Body>{bodyLengthCheck(body)}</Body>
      <Recommend>{recommendCheck(recommend)}</Recommend>
      <Response>{responseCheck(response)}</Response>
      <div>{photos.map(photo => <img id="reviewPhoto" src={photo.url} width="35" height="40" />)}</div>
      <Helpful id="reviewHelpfulness">
        Helpful? <u className={`${reviewID}1`} onClick={putHelpful}>Yes</u> {helpfulness}| <u onClick={reportReview}>Report</u>
      </Helpful>
    </div>
    )
}

export default ReviewTile;

