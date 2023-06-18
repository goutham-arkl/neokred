import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import styled from 'styled-components';
import logo from '../assets/2.svg';
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Container = styled.div`
  width: 100%;
  height: 8vh;
  border-bottom: 2px solid #e2e7f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 155px;
  height: 44px;
`;

const RightContent = styled.span`
  margin-left: auto;
`;
const Admin=styled.span`
    color: #A0ABC0;
`;

const Navbar = () => {
  const navigate = useNavigate()
  const {currentUser,setCurrentUser} = useContext(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: 'Do you want to logout?',
     
      showCancelButton: true,
      confirmButtonText: 'Yes',
    
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
       
      }
    }).then((result) => {
      if (result.isConfirmed) {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    setCurrentUser(false)
    navigate('/login')
      } else if (result.isDenied) {
        
      }
    })
    
  
  };
  return (
    <Container>
      <Logo src={logo} />
      <RightContent><Admin>{currentUser.name}</Admin> <br></br><span onClick={()=>handleLogout()}>Logout</span></RightContent>
    </Container>
  );
};

export default Navbar;
