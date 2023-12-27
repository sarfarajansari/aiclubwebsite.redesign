import React from "react";
import styled from "styled-components";

const Container = styled.div`
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
const Sidebar = () => {
  return <Container>Sidebar</Container>;
};

export default Sidebar;
