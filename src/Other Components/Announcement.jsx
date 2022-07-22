//-----------------Imports-------------------------//
import React from 'react';
import styled from 'styled-components'

//----------------Styling-------------------------//

const Container = styled.div`
  height: 30px;
  background-color: #501B1D;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

//-------------Component Function-----------------//



const Announcement = () => {
  return (
    <Container>
        First time visiting us? Download the app for 15% off everything! ------ Get FREE standard shipping on all orders of $65 or more!
    </Container>
  )
}

export default Announcement