import React from 'react'
import styled from 'styled-components';
import green from "../Assets/green.png"
import blue from "../Assets/blue.png"
import purple from "../Assets/purple.png"
import pink from "../Assets/pink.png"
import logo from "../Assets/logo-white.svg";

const Login = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Logo>
                    <MyLogo src={logo} />
                </Logo>
                <RegisterCard>
                    <Wrap>
                        <h2>Login to your account</h2>
                        <p>Securely login to your PiggyVest</p>
                        <Form>
                            
                            <Div>
                                <h4>Email or Phone Number</h4>
                                <Input required type = "email" />
                            </Div>
                           
                            <Div>
                                <h4>Password</h4>
                                <Input required type="Password" />
                            </Div>
                            
                            <Button>LOG IN</Button>
                        </Form>
                    </Wrap>
                </RegisterCard>
                <P to = "/register">Don't have an account? Register</P>
                <P>Forgot Password?</P>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Login;

const Container = styled.div`
    width: 100%;
    padding: 10px 0px 10px 0px;
    background-color: #062863;
    background-image: url(${blue}), url(${green}),url(${purple}), url(${pink});
    background-repeat: no-repeat;
    background-size: 15%;
    background-position: left -1% top -15%, right -7.5% top -1%, right -5% bottom -5%, left -5% bottom -5%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px 0px 30px 0px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Logo = styled.div`
    margin: 20px 0px 40px 0px;
`;
const MyLogo = styled.img``;
const RegisterCard = styled.div`
    width: 480px;
    /* height: 600px; */
    padding: 0px 0px 20px 0px;
    background-color: white;
    border-radius: 20px 20px 20px 0px;
    display: flex;
    justify-content: center;
`;
const Wrap = styled.div`
    width: 400px;
    padding: 10px 0px 10px 0px;
    background-color: white;
    margin-top: 50px;
    text-align: center;
    h2{
        color: #062863;
        margin: 0;
    }
`;
const Form = styled.form`
margin-top: 20px;
    /* background-color: red; */
`;