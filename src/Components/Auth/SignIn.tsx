import React from 'react'
import styled from 'styled-components';
import green from "../Assets/green.png"
import blue from "../Assets/blue.png"
import purple from "../Assets/purple.png"
import logo from "../Assets/logo-white.svg"

const SignIn = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Logo>
                    <MyLogo src={logo} />
                </Logo>
                <RegisterCard>
                    <Wrap>
                        <h2>Create a Secure Account</h2>
                        <p>Welcome to the future of Savings & Investments</p>
                        <Form>
                            <Div>
                                <h3>Full Name</h3>
                                <Input placeholder = "Full Name" />
                            </Div>
                        </Form>
                    </Wrap>
                </RegisterCard>
            </Wrapper>
        </Container>
    </div>
  )
}

export default SignIn;

const Container = styled.div`
    width: 100%;
    padding: 10px 0px 10px 0px;
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
    width: 40%;
    padding: 20px 0px 30px 0px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Logo = styled.div`
    margin-top: 20px;
`;
const MyLogo = styled.img``;
const RegisterCard = styled.div`
    width: 450px;
    height: 600px;
    /* padding: 10px 0px 20px 0px; */
    background-color: blue;
    border-radius: 20px 20px 20px 0px;
    display: flex;
    justify-content: center;
`;
const Wrap = styled.div`
    width: 400px;
    padding: 10px 0px 10px 0px;
    /* padding: 10px 0px 20px 0px; */
    background-color: white;
    margin-top: 50px;
    text-align: center;
    h2{
        color: #062863;
        margin: 0;
    }
`;
const Form = styled.form`
    background-color: red;
`;
const Input = styled.input`
    width: 400px;
    height: 50px;
    background-color: #EDF2F7;
`;
const Div = styled.div`
    display: flex;
    flex-direction: column;
    h3{
        margin: 0;
        text-align: start;
    }
`;