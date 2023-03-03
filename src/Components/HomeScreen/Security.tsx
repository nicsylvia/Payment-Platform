import React from 'react'
import styled from 'styled-components'
import {FaGreaterThan} from "react-icons/fa"
import img from "../../Assets/security.png"

const Priority = () => {
  return (
    <div>
    <Container>
     <Wrapper>
     <Image src={img}/>
 <Second>
   <h2>Your security is our priority</h2>
   <p>
   PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security
   <br />
    encryption to ensure that your information is comepletely protected from fraud.
   </p>
   <Learn>
    <a href="/"> Learn More</a>
     <Icon>
       <FaGreaterThan/>
     </Icon>
   </Learn>
 </Second>
     </Wrapper>
    </Container>
    </div>
  )
}

export default Priority