import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CardProps from './CardProps'
import piggy from "../../Assets/piggy.png"
import lock from "../../Assets/safelock.png"
import target from "../../Assets/target.png"
import flex from "../../Assets/flex.png"



const Build = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <span>
                    4 ways to build <br /> your savings
                    </span>
                    <p>
                    Earn 5%-15% when you save with any <br /> of these PiggyVest plans.
                    </p>
                    <Button to="/">Start Saving</Button>
                </First>
                <Second>
                    <CardProps
                    text1='Automated Savings'
                    text2='Build a dedicated savings faster on your terms automatically or manually'
                    ButtonText='PiggyBank'
                    image={piggy}
                    bcc="#E4F0FD"
                    color="blue"
                    />
                    <CardProps
                    text1="Fixed Savings"
                    text2="Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit."
                    ButtonText='Safelock'
                    image={lock}
                    bcc="#E7F5FD"
                    color="#58A9FD"
                    />
                    <CardProps
                    text1='Goal-oriented Savings'
                    text2="Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
                    ButtonText='Target Savings'
                    image={target}
                    bcc="#E7FDF0"
                    color="#34AC62"
                    />
                    <CardProps
                    text1="Flexible Savings"
                    text2="Save, transfer, withdraw, manage and organise your money for free at any time."
                    ButtonText="Flex Naira"
                    image={flex}
                    bcc="#FBE9F5"
                    color="#E850A1"
                    />
                </Second>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Build