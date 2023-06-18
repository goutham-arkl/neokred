import { styled } from 'styled-components'
import {Headings,Welcome,Singnup,Label,GeneralInput,Button,Securityquestion} from './SignUp'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import closed from'../assets/4.svg'
import opened from'../assets/5.svg'

const LoginContainer=styled.div`

  width: 65%;
   height: 35vh;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const InputLabelContainer =styled.div`
      margin: 10px 0px;
      width: 60%;
`;
const Form=styled.div`
  height: 80%;
  margin-bottom: 25px;
`;

const ForgotPassword= styled.span`
  color: #6688ff;
  margin-left: 318px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;

`;
const Star=styled.sup`
  color: red;
`;
export const Eye=styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 9px;
  right: 5px;
  cursor: pointer;
`;



const LoginForm = () => {
  const {login} = useContext(AuthContext);

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [showPassword,setShowPassword]=useState(false)
  const handleLogin=()=>{
    if(email!=='' && password !==''){
      const data={
        email:email,
        password:password
      }
      login(data)
    }
  }
  return (
    <LoginContainer>
        <Headings>
            <Welcome>Welcome</Welcome><br></br>
            <Singnup>Login</Singnup>
        </Headings>
        <Form>
        <InputLabelContainer>
          <Label>Email <Star>*</Star></Label>
          <GeneralInput onChange={(e)=>{setEmail(e.target.value)}}/>
        </InputLabelContainer>

        <InputLabelContainer>
        <Label>Password <Star>*</Star></Label>
        <div style={{position:"relative"}}>
        <GeneralInput style={{marginBottom:"10px"}} type={showPassword ? "text" : "password"} onChange={(e)=>{setPassword(e.target.value)}} />
        <Eye src={showPassword ? opened : closed} onClick={()=>setShowPassword(!showPassword)}/>
        </div>
        <ForgotPassword>forgot password ?</ForgotPassword>
      </InputLabelContainer>
      </Form>
      <Button onClick={()=>handleLogin()}>Login</Button>
      <br></br>
        <Securityquestion>Already have an account ? <Link to={'/register'}>register</Link></Securityquestion>
    </LoginContainer>
    
  )
}

export default LoginForm