import React from "react";
import styled from "styled-components";
import Series from "./Series";
import Rank from "./Rank";

const Content = () => {
  return (
    <Container>
      <Rank name="오늘 대한민국의 TOP 10영화" />
      <Series name="해외 시리즈" />
      <Series name="시리즈" />
    </Container>
  );
};

export default Content;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.black};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
