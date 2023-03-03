import React from "react";
import styled from "styled-components";
import Chats from "./Chats";
import lonely from "../../Assets/lonely.jpg";
import slider1 from "../../Assets/slider1.jpg";
import shazam from "../../Assets/shazam.jpg";
import me from "../../Assets/me.jpeg";
import { Link } from "react-router-dom";
import appleIcon from "../../Assets/apple-icon.svg";
import googleIcon from "../../Assets/google-icon.svg";

const Customers = () => {
    return (
      <div>
        <Container>
          <Wrapper>
            <First>
              <ChatHold>
                <Chats
                  date="Monday, 3rd of April 2023 by 1:29 PM"
                  image={me}
                  message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
                  name=" Dc Valerian"
                />
                <Chats
                  date="Thursday, 2nd of March 2023 by 1:29 PM"
                  image={slider1}
                  message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
                  name=" Pedro"
                />
                <Chats
                  date="Friday, 3rd of March 2023 by 1:29 PM"
                  image={shazam}
                  message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
                  name=" Divine Peace"
                />
                <Chats
                  date="Saturday, 24th of March 2023 by 1:29 PM"
                  image={lonely}
                  message="Hello Piggy Users,I'm Valerian  and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊 "
                  name=" Judtonia"
                />
              </ChatHold>
            </First>
            <Second>
              <span>4 Million + customers</span>
              <p>
                Since launching in 2016, over 4,000,000 people
                <br />
                have used PiggyVest to manage their money better, avoid
                <br />
                over-spending and be more accountable.
              </p>
              <Button to="register">Create Fee Account</Button>
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
            </Second>
          </Wrapper>
        </Container>
      </div>
    );
  };
  
  export default Customers;