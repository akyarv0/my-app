import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: yellow;
    color: black;
    cursor: pointer;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <img src="https://http.cat/404" alt="" />
      <Link to="/"><Button >Go Home</Button></Link>
    </Container>
  );
};

export default NotFound;
