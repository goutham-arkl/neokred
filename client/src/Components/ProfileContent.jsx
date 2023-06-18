import React, { useContext, useEffect } from "react";
import { styled } from "styled-components";
import avatar from "../assets/3.svg";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 50px;
  gap: 40px;
`;
const Image = styled.img`
  width: 244px;
  height: 244px;
  object-fit: cover;
  border-radius: 50%;
  background-color: aliceblue;
`;

const Content = styled.div`
  width: 28vw;
  border: 1px solid #e2e7f0;
  padding-left: 30px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Heading = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22px;
  letter-spacing: 2px;
  color: #7181a1;
`;

const Table = styled.table`
  margin-bottom: 50px;
`;
const Tr = styled.tr``;
const Td = styled.td`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #7181a1;
  padding: 15px;
`;

const ProfileContent = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Container>
      <Image src={avatar} />
      <Content>
        <Heading>PROFILE</Heading>
        <Table>
          <Tr>
            <Td>Name</Td>
            <Td>{currentUser.name}</Td>
          </Tr>
          <Tr>
            <Td>Email</Td>
            <Td>{currentUser.email}</Td>
          </Tr>
          <Tr>
            <Td>DOB</Td>
            <Td>{currentUser.dob}</Td>
          </Tr>
          <Tr>
            <Td>Phone number</Td>
            <Td>{currentUser.mobile}</Td>
          </Tr>
          <Tr>
            <Td>Address</Td>
            <Td>{currentUser.address}</Td>
          </Tr>
          <Tr>
            <Td>City</Td>
            <Td>{currentUser.city}</Td>
          </Tr>
          <Tr>
            <Td>State </Td>
            <Td>{currentUser.state}</Td>
          </Tr>
          <Tr>
            <Td>ZIP code </Td>
            <Td>{currentUser.zipCode}</Td>
          </Tr>
          <Tr>
            <Td>Country </Td>
            <Td>{currentUser.country}</Td>
          </Tr>
          <Tr>
            <Td>Security </Td>
            <Td>
              What is your school name?<br></br>
              {currentUser.securityAnswer}
            </Td>
          </Tr>
        </Table>
      </Content>
    </Container>
  );
};

export default ProfileContent;
