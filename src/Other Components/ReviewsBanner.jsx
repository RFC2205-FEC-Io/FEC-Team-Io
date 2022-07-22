//-----------------Imports-------------------------//
import React from 'react';
import styled from 'styled-components';
import {FaThumbsUp } from "react-icons/fa";

//----------------Styling-------------------------//

const Container = styled.div`
  height: 30px;
  color: #501B1D;
  font-weight: bold;
  font-size: 28px;
`
const Wrapper = styled.div`
  padding: 5px, 5px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  text-align: left;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  margin-right: 125px;
`

//-------------Component Function-----------------//



const ReviewsBanner = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
             {'SEE WHAT OTHERS ARE SAYING...'}
          </Left>
        <Center>

        </Center>
        <Right>
          <MenuItem>
            <FaThumbsUp style={{color: "#501B1D" , fontSize:28}}/>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default ReviewsBanner