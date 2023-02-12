import React from "react";
import styled from "styled-components";
import MovieMenu from "./MovieMenu";

const Content = () => {
  return (
    <Container>
      <MovieMenu isRank={true} name="오늘 대한민국의 TOP 10영화" />
      <MovieMenu isRank={false} name="해외 시리즈" />
      <MovieMenu isRank={false} name="시리즈" />
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
