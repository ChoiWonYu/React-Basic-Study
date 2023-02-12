import React from "react";
import styled from "styled-components";
import { RankData } from "../style/RankData";
import Movie from "../asset/movie.png";

const RankMovie = ({ img, rank, handleClick }) => {
  return (
    <Container>
      <Content onClick={handleClick}>
        <Number src={RankData[rank]} />
        <Poster src={Movie} />
      </Content>
    </Container>
  );
};

export default RankMovie;

const Container = styled.div`
  height: 100px;
  width: 190px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 5px 0;
  justify-content: space-around;
  background-color: white;
`;

const Number = styled.img`
  height: 100%;
`;

const Poster = styled.img`
  width: 60%;
  height: 100%;
  justify-self: flex-end;
`;
