//------------------IMPORTS-------------------------//
import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaShoppingCart } from "react-icons/fa";

//-------------------STYLING------------------------//

const Container = styled.div`
  height: 60px;
  background-color: #2E1114;
  color: white;

`

const Wrapper = styled.div`
  padding: 10px, 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  border: none;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  margin-right:25px;
`

const Center = styled.div`
  flex: 1;
  text-align: center;

`
const Logo = styled.h1`
  font-weight: bold;
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
  margin-right: 25px
`
//------------COMPONENT FUNCTION-------------//
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder={"Search"}/>
            <FaSearch style={{color: "white" , fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            FLAAMENCO
          </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <FaShoppingCart />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )

}

export default Navbar