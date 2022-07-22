//-------------------Imports----------------------------//
import React from 'react';
//import Card from 'react-bootstrap/Card';
import styled from 'styled-components'

//---------------------Styling------------------------//
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 6vh;
  position: relative;
`

const Image = styled.img`
  width: 125px;
  height: 25px;
  object-fit: cover;
`

//-------------------Component Function---------------//
const StaticStarRating = (props) => {
    if (props.averageRating === 0) {
      return (
        <Container>
           <Image src="./assets/stars/Star_Rating000.png" />
        </Container>
      )
    } else if (props.averageRating > 0 && props.averageRating <= 0.25) {
      return (
        <Container>
         <Image src="./assets/stars/Star_Rating025.png"/>
        </Container>
      )
    } else if (props.averageRating > 0.25 && props.averageRating <= 0.50) {
      return (
        <Container>
         <Image src="./assets/stars/Star_Rating050.png" />
        </Container>
      )
   } else if (props.averageRating > 0.50 && props.averageRating <= 0.75) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating075.png" />
      </Container>
    )
   }  else if (props.averageRating > 0.75 && props.averageRating <= 1.00) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating100.png" />
      </Container>
    )
   } else if (props.averageRating > 1.00 && props.averageRating <= 1.25) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating125.png" />
      </Container>
    )
   } else if (props.averageRating > 1.25 && props.averageRating <= 1.50) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating150.png" />
      </Container>
    )
   } else if (props.averageRating > 1.50 && props.averageRating <= 1.75) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating175.png" />
      </Container>
    )
   } else if (props.averageRating > 1.75 && props.averageRating <= 2.00) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating200.png" />
      </Container>
    )
   } else if (props.averageRating > 2.00 && props.averageRating <= 2.25) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating225.png" />
      </Container>
    )
   } else if (props.averageRating > 2.25 && props.averageRating <= 2.50) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating250.png" />
      </Container>
    )
   } else if (props.averageRating > 2.50 && props.averageRating <= 2.75) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating275.png" />
      </Container>
    )
   } else if (props.averageRating > 2.75 && props.averageRating <= 3.00) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating300.png" />
      </Container>
    )
   } else if (props.averageRating > 3.00 && props.averageRating <= 3.25) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating325.png" />
      </Container>
    )
   } else if (props.averageRating > 3.25 && props.averageRating <= 3.50) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating350.png" />
      </Container>
    )
   } else if (props.averageRating > 3.50 && props.averageRating <= 3.75) {
    return (
      <Container>
       <Image src="./assets/stars/Star_Rating375.png" />
      </Container>
    )
   } else if (props.averageRating > 3.75 && props.averageRating <= 4.00) {
    return (
      <Container>
        <Image src="./assets/stars/Star_Rating400.png"/>
      </Container>
    )
   } else if (props.averageRating > 4.00 && props.averageRating <= 4.25) {
    return (
      <Container>
        <Image src="./assets/stars/Star_Rating425.png" />
      </Container>
    )
   } else if (props.averageRating > 4.25 && props.averageRating <= 4.50) {
    return (
      <Container>
        <Image src="./assets/stars/Star_Rating450.png" />
      </Container>
    )
   } else if (props.averageRating > 4.50 && props.averageRating <= 4.75) {
    return (
      <Container>
        <Image src="./assets/stars/Star_Rating475.png" />
      </Container>
    )
   } else if (props.averageRating > 4.75 && props.averageRating <= 5.00) {
    return (
      <Container>
        <Image src="./assets/stars/Star_Rating500.png" />
      </Container>
    )
   };
  };

export default StaticStarRating