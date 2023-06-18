import {Container,Wrapper} from './Register'
import ImageComponent from "../Components/ImageComponent";
import LoginForm from '../Components/LoginForm'
import { styled } from 'styled-components';

const FormContainer =styled.div`
width: 100%;
padding-left: 20px;
flex: 1.5;
display: flex;
align-items: center;
justify-content: center;
`;


const Login = () => {
  return (
    <Container>
      <Wrapper>
      <ImageComponent/>
      <FormContainer>
        <LoginForm/>
      </FormContainer>
      </Wrapper>

    </Container>
  )
}

export default Login