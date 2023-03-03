import React from 'react'
import styled from 'styled-components';


interface props{
    date:string;
    name:string;
    image:string;
    message:string;
}

const Chats:React.FC<props> = ({date,name,message,image}) => {
  return (
    <div>
        <Container>
        <Date>{date}</Date>
        <Wrapper>
            <Image src={image}/>
            <Card>
                <Name>
                    {name}
                </Name>
                <Message>
                    {message}
                </Message>
            </Card>
        </Wrapper>
        </Container>
    </div>
  )
}

export default Chats