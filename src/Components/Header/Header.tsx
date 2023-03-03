import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from "../../Assets/logo.svg"

const Header = () => {
  const [show,setShow] = React.useState(false)

  const changeHeaderColor =()=>{
    if(window.scrollY >= 1){
      setShow(true)
    }else{
      setShow(false)
    }
  }
}
export default Header