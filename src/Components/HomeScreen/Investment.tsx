import React from 'react'
import styled from 'styled-components'
import phone from "../../Assets/invest.png"
import {FaGreaterThan} from "react-icons/fa"

const Investment = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <Image src={phone}/>
                </First>
                <Second>
                    <Button>Up To 25% Returns</Button>
                    <span>
                    Access investment
                    <br />
                     opportunities
                    </span>
                    <p>
                    Invest securely and confidently on the go. Grow your
                    <br />
                     money confidently by investing in pre-vetted investment
                     <br />
                      opportunities.
                    </p>
                    <Line>
                        Learn more about Investments 
                        <Icon>
                        <FaGreaterThan/>
                        </Icon>
                    </Line>
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Investment