import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import axios from '../axios';
import { Country, State, City }  from 'country-state-city';
import { Eye } from "./LoginForm";
import closed from'../assets/4.svg'
import opened from'../assets/5.svg'
import Swal from "sweetalert2";



export const Container=styled.div`
    height:95vh;
`;
export const Headings=styled.div`
`;
export const Welcome=styled.span`
        font-size: 20px;
        font-family: Noto Sans;
        font-weight: 400;
        line-height: 27px;
        color: #7181A1;
`;
 export const Singnup=styled.span`
    color: #131926;
    font-family: Noto Sans;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
`;
export const FormContainer=styled.div`
    width: 90%;
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;

`;

export const InputLabelContainer=styled.div`
    width: 49%;
     
`;
export const Label=styled.label`

        display: block;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 10px;
        color: #4d5e80;
`;

export const GeneralInput =styled.input`
   width: 100%;
   
   border:1px solid #e2e7f0;
   outline: none;
   padding: 12px 6px;

`;

export const Securityquestion =styled.span`
    font-size: 14px;
    font-weight:400;
    color:#c3cbde;
`;

const AddressContainer=styled.div`
    width: 100%;
`;

const DropdownContainer=styled.div`
    width: 100%;
    height: 100px;
    display: flex;

`;
const Dropdown=styled.select`
    width: 70%;
    border:1px solid #e2e7f0;
   outline: none;
   padding: 12px 6px;

`;
export const Button =styled.button`
    width:30%;
    padding: 15px;
    border-radius: 6px;
    border:none;
    background-color:#194dff;
    color:white;
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

`;

export const Err=styled.span`
    color: red;
    font-size:14px ;
`;


const SignUp = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [dob,setDob]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [phone,setPhone]=useState(0)
    const [answer,setAnswer]=useState('')
    const [address,setaddress]=useState('')
    const [country,setCountry]=useState('')
    const [state,setState]=useState('')
    const [code,setCode]=useState(0)
    const [city,setCity]=useState('')
    const [passwordErr,setPasswordErr]=useState(false)
    const [phoneErr,setPhoneErr]=useState(false)
    const [confirmPasswordErr,setConfirmPasswordErr]=useState(false)
    const [codeErr,setCodeErr]=useState(false)
    const [countryCode,setCountryCode]=useState('')
    const [stateCode,setStateCode]=useState('')
    const [showPassword,setShowPassword]=useState(false)
   




    const handlePassword=(e)=>{
    
        const numberRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

        setPassword(e.target.value);

        if (password.length < 8 || !numberRegex.test(password) ||!specialCharRegex.test(password) ) {
             setPasswordErr(true)
            }else{
                setPasswordErr(false)
            }

    }

    const handlePhone=(e)=>{
        setPhone(e.target.value)
        if(phone.toString().length < 10 || phone.toString().length > 10){
            setPhoneErr(true)
        }else{
            setPhoneErr(false)
        }
    }
    const handlezipCode=(e)=>{
        setCode(e.target.value)
        console.log(code.toString().length)
        code.toString().length !== 5 
        ? setCodeErr(true)
        : setCodeErr(false) 
    }
    const handleCountry=(e)=>{
        setCountry(e.target.value.split('/')[0])
        setCountryCode(e.target.value.split('/')[1])
    }

    const handleState=(e)=>{
        setState(e.target.value.split('/')[0])
        setStateCode(e.target.value.split('/')[1])
        console.log(e.target.value.split('/')[1])
    }
    const handleCity=(e)=>{
        setCity(e.target.value)

    }

    const handleSubmit=()=>{

        const user={
            name:name,
            email:email,
            password:password,
            dob:dob,
            mobile:phone,
            address:address,
            city:city,
            state:state,
            zipCode:code,
            country:country,
            SecurityAnswer:answer
        }
        if (Object.values(user).includes('') || Object.values(user).includes(0)) {
            Swal.fire({
                icon:'warning',
                title:"Enter all the fields"
            })
          } else {
            axios.post("/register",user,{withCredentials:true}).then((res)=>{
                console.log(res.data)
            }).catch((err)=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    
                  })
            })
          }
          
    }


  return (
    <Container>
        <Headings>
            <Welcome>Welcome</Welcome>
            <br></br>
            <Singnup>Sign up</Singnup>
        </Headings>
        <FormContainer>
        <InputLabelContainer>
        <Label>Full name</Label>
        <GeneralInput onChange={(e)=>setName(e.target.value)}/>
        </InputLabelContainer>
        <InputLabelContainer>
        <Label>Email</Label>
        <GeneralInput onChange={(e)=>setEmail(e.target.value)}/>
        </InputLabelContainer>
        <InputLabelContainer>
        <Label>Date of Birth</Label>
        <GeneralInput onChange={(e)=>setDob(e.target.value)}/>
        </InputLabelContainer>
        <InputLabelContainer>
        <Label>Password</Label>
         {passwordErr && <Err>Password must be atleast 8 charcters</Err>}
        <GeneralInput onChange={(e)=>{handlePassword(e)}}/>
        </InputLabelContainer>
        <InputLabelContainer>
        <Label>Phone Number</Label>
        <GeneralInput onChange={(e)=>{handlePhone(e)}}/>
        </InputLabelContainer>
        <InputLabelContainer>
        <Label>Confirm Password</Label>
        {confirmPasswordErr && <Err>Password must be matching</Err>}
        <div style={{position:"relative"}}>
        <GeneralInput type={showPassword ? "text" : "password"} onChange={(e)=> e.target.value !==password ? setConfirmPasswordErr(true) : setConfirmPasswordErr(false)}/>
        <Eye onClick={()=>setShowPassword(!showPassword)} src={showPassword ? opened : closed}/>
        </div>
        </InputLabelContainer>
        <InputLabelContainer>
        <Label> Security Question</Label>
        <Securityquestion>What is your school name ?</Securityquestion>
        <GeneralInput onChange={(e)=>setAnswer(e.target.value)}/>
        </InputLabelContainer>
        <AddressContainer>
        <Label> Address</Label>
        <GeneralInput onChange={(e)=>setaddress(e.target.value)}/>
        </AddressContainer>

        <DropdownContainer>
        <InputLabelContainer>
        <Label>Country</Label>
        <Dropdown onChange={(e)=>handleCountry(e)}>
        <option>--select--</option>
        { Country.getAllCountries().map(item=>(
            <option key={item.name} value={item.name + '/'+item.isoCode}>{item.name}</option>
        ))}
        
        </Dropdown>
        </InputLabelContainer>

        <InputLabelContainer>
        <Label>State</Label>
        <Dropdown onChange={(e)=>handleState(e)} >
        <option>--select--</option>
        { countryCode !=='' && State.getStatesOfCountry(countryCode).map(item=>(
            <option key={item.name} value={item.name + '/'+item.isoCode}>{item.name}</option>
        ))}
        
        </Dropdown>
        </InputLabelContainer>

        <InputLabelContainer>
        <Label>Zipcode</Label>
        {codeErr && <Err>Zip code must be 6 charcters</Err>}
        <GeneralInput type="number" inputMode="numeric" onChange={(e)=>handlezipCode(e)} style={{width:"10vw"}}/>
        </InputLabelContainer>

        <InputLabelContainer>
        <Label>City</Label>
        <Dropdown onChange={(e)=>{handleCity(e)}}>
        <option>--select--</option>

        { stateCode !=='' && City.getCitiesOfState(countryCode, stateCode).map(item=>(
            <option key={item.name} value={item.name}>{item.name}</option>
        ))}
        
        </Dropdown>
        </InputLabelContainer>

        
        </DropdownContainer>


        <Button onClick={()=>handleSubmit()}>Sign up</Button>

        
        </FormContainer>


        <Securityquestion> Already have an account ? <Link to={'/login'}>login</Link></Securityquestion>



    </Container>
  )
}

export default SignUp