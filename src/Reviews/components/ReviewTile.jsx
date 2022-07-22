import React from "react";
import styled from "styled-components";
import ReviewsApp from "../ReviewsApp.jsx";
import ReviewsList from "./ReviewsList.jsx";
import StaticStars from "./StaticStars.jsx";

/*------------------------- STYLED COMPONENTS------------------------------*/

const Tile = styled.div`
box-shadow: 10px 5px 5px #C0C0C0;
background-color: white;
width: fit-content;
`;

const TileHeader = styled.div`
display: grid;
grid-template-columns: 300px 1fr;
grid-gap: 30px;
background-color: gainsboro ;
padding: 5px;
margin: 5px;
`;

const Stars = styled.div`
display: flex;
justify-content: flex-start;
background-color: gainsboro ;
`;

const ReviewerDate = styled.div`
display: flex;
justify-content: flex-end;
font-style: italic;
font-size: 12px;
font-family: "Roboto";
font-weight: 400px;
inline-size: 500px;
overflow-wrap: break-word;
hyphens: manual;
`;

const Summary = styled.span`
font-style: bold;
justify-items: left;
display: flex;
justify-content: center;
`;

const Recommend = styled(ReviewerDate)`
font-size: 11px;
justify-content: flex-start;
bottom-padding: 5px;
bottom-margin: 5px;
`;

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

const Helpful = styled(ReviewerDate)`
justify-content: flex-start;
`;

const ReviewTile = ({ reviewID, rating, summary, recommend, response, body, date, reviewerName, helpfulness, photos, putHelpful, reportReview }) => {
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
      return <div><p id='response'> {`Response from Seller:\n${response}`}</p><br/></div>
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

  return (
    <div id="reviewTile" className={reviewID} >
      <Tile>
      <TileHeader>
      <Stars>
        <StaticStars rating={rating} />
      </Stars>
      <ReviewerDate id="reviewDate">Reviewed On: {dateFormatter(date)} by {reviewerName}</ReviewerDate>
      </TileHeader>
      <Summary>
        <h3 id="reviewSummary">{summary}</h3>
      </Summary>
      <Body>{bodyLengthCheck(body)}</Body>
      <Recommend>{recommendCheck(recommend)}</Recommend>
      <br/>
      <Response>{responseCheck(response)}</Response>
      <div>{photos.map(photo => <span><img id="reviewPhoto" src={photo.url} width="35" height="40" />&nbsp;&nbsp;&nbsp;</span>)}</div>
      <br/>
      <Helpful id="reviewHelpfulness">
        Helpful?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u className={`${reviewID}1`} onClick={putHelpful}>Yes</u>&nbsp;&nbsp;&#40;{helpfulness}&#41;&nbsp;&nbsp;|&nbsp;&nbsp; <u onClick={reportReview}>Report</u>
      </Helpful>
      </Tile>
    </div>
  )
}

export default ReviewTile;

