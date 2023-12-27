import React from "react";
import styled from "styled-components";

const Container = styled.div`
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Header = () => {
  return <Container>Header</Container>;
};

export default Header;
