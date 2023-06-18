import React from 'react'
import { styled } from 'styled-components';
import background from '../assets/1.svg'
import logo from '../assets/2.svg'

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

`;
const Logo=styled.img`
    scale: 0.9;
    position: absolute;
    top: 50px;
    left:70px;
`;
const Background=styled.img`
    position: relative;
    height: 95vh;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const ImageComponent = () => {
  return (
    <Container>
        <Background src={background}/>
        <Logo src={logo}/>

    </Container>
  )
}

export default ImageComponent