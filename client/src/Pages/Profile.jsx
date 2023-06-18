import { styled } from "styled-components"
import Navbar from "../Components/Navbar";
import ProfileContent from "../Components/ProfileContent";
import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";

const Container=styled.div`
    width: 100vw;

`;


const Profile = () => {
  const {setCurrentUser} = useContext(AuthContext);

  useEffect(()=>{
    const token=localStorage.getItem('accessToken')
      console.log('hi')
      axios.get('http://localhost:5000/api/auth/verify',{headers:{"token":"Bearer "+localStorage.getItem('accessToken')}}).then((res)=>{
      
      console.log(res.data)
    }).catch((err)=>{
      
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      setCurrentUser(false)
        
    })
     
},[])

  return (
    <Container>
      <Navbar/>
      <ProfileContent/>
    </Container>
  )
}

export default Profile