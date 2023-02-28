import React from 'react'
import styled from 'styled-components';
import green from "../Assets/green.png"
import blue from "../Assets/blue.png"
import purple from "../Assets/purple.png"

const SignIn = () => {
  return (
    <div>
        <Container>
            <Wrapper></Wrapper>
        </Container>
    </div>
  )
}

export default SignIn;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    /* padding: 10px 0px 10px 0px; */
    background-color: #062863;
    background-image: url(${blue}), url(${green}), url(${purple});
    background-repeat: no-repeat;
    background-size: 15%;
    background-position: left -1% top -15%, right -7.5% top -1%, right -5% bottom -5%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 70%;
    padding: 20px 0px 30px 0px;
    background-color: red;
`;