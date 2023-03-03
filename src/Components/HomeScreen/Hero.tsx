import React from "react";
import styled from "styled-components";
import one from "../../Assets/one.png";
import two from "../../Assets/two.png";
import three from "../../Assets/three.png";
import four from "../../Assets/four.png";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import appleIcon from "../../Assets/apple-icon.svg";
import googleIcon from "../../Assets/google-icon.svg";
import nice from "../../Assets/one.png";

const Hero = () => {
    return (
      <div>
        <Container id="hero">
          <Wrapper>
            <First>
              <Title>
                The Better Way <br /> to Save & Invest.
              </Title>
              <Sub>
                PiggyVest helps over 4 million customers achieve their financial
                <br />
                goals by helping them save and invest with ease.
              </Sub>
              <Button to="register">Create Free Account</Button>
              <ButtonHold>
                <Buttons>
                  <Icon>
                    <img src={appleIcon} />
                  </Icon>
                  Get on iPhone
                </Buttons>
                <Buttons>
                  <Icon>
                    <img src={googleIcon} />
                  </Icon>
                  Get on Android
                </Buttons>
              </ButtonHold>
            </First>
            <Second>
              <One src={nice} />
              <Two src={two} />
              <Three src={three} />
              <Four src={four} />
            </Second>
          </Wrapper>
        </Container>
      </div>
    );
  };
  
  export default Hero;