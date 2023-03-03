import React from 'react'
import styled from 'styled-components'
import {BsArrowRight} from "react-icons/bs"

interface props{
    text1:string;
    text2:string;
    image:string;
    ButtonText:string;
    color:string;
    bcc:string
}

const CardProps:React.FC<props>= ({
    text1,
    text2,
    image,
    ButtonText,
    color,
    bcc
}) => {
  return (
    <div>
        <Container>
            <Image src={image}/>
           <span>
            {text1}
           </span>
            <p>
                {text2}
            </p>
            <nav>
                <Icon bc={bcc} cl={color}>
                    <BsArrowRight/>
                </Icon>
                <Text>
                    {ButtonText}
                </Text>
            </nav>
        </Container>
    </div>
  )
}

export default CardProps