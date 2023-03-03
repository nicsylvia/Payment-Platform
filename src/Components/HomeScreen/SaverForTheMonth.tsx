import React from "react";
import styled from "styled-components";
import image from "../../Assets/one.png";
import { BsArrowRight } from "react-icons/bs";

const SaverForTheMonth = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <First>
            <span>
              Meet the saver of
              <br />
              the month!
            </span>
            <p>
              Every month, we shine a spotlight on one saver, asking
              <br />
              them questions about their savings culture and how
              <br />
              the product is specifically helping them shape how they spend
              <br />
              and save for future responsibilities.
            </p>

            <Line>
              <Icon>
                <BsArrowRight />
              </Icon>
              <a href="https://github.com/Dc-Valerian">Meet Dc Valerian</a>
            </Line>
          </First>
          <Second>
            <Img src={image} />
          </Second>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SaverForTheMonth;