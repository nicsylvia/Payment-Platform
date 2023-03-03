import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from "../Assets/logo.svg";

const Header = () => {
  const [show,setShow] = React.useState(false)

  const changeHeaderColor =()=>{
    if(window.scrollY >= 1){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  window.addEventListener("scroll",changeHeaderColor)
  return (
    <div>
      <Container boxShadow={show ? "value":""} id="header">
        <Wrapper>
          <Logo to="/">
            <Img  src={logo}/>
          </Logo>

          <NavLink >
            <Nav to="register">Save</Nav>
            <Nav to ="">Invest</Nav>
            <Nav to ="">Stories</Nav>
            <Nav to="">FAQs</Nav>
            <Nav to ="">Blog</Nav>
            <Nav to="">E-Book</Nav>
          </NavLink>

          <ButtonHold>
            <Button to="login" bg="white" cl="black" wd="100px" bcc='whitesmoke' ccl='#0D5ED4' >
              Sign In
            </Button>
             <Button to="register" bg="black" cl="white" wd="220px" bcc='#0D5ED4' ccl=''>
               Create Free Account
             </Button>
          </ButtonHold>
        </Wrapper>
      </Container>
    </div>
  )
}
export default Header