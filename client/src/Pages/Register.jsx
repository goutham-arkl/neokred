import { styled } from 'styled-components';
import SignUp from '../Components/SignUp';
import ImageComponent from '../Components/ImageComponent';

export const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
export const Wrapper =styled.div`
    width:100%;
    height:96vh;
    margin:20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const FormContainer=styled.div`
    padding-left: 20px;
    flex: 1.5;

`;



const Register = () => {
  return (
    <Container>
        <Wrapper>
           <ImageComponent/>
            <FormContainer>
                <SignUp/>
            </FormContainer>
        </Wrapper>
    </Container>

    )
}

export default Register