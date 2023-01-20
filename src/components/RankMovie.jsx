import React from "react";
import styled from "styled-components";
import { RankData } from "../style/RankData";
import Movie from "../asset/movie.png";

const RankMovie = ({ img, rank }) => {
  return (
    <Container>
      <Number src={RankData[rank]} />
      <Poster src={Movie} />
    </Container>
  );
};

export default RankMovie;

const Container = styled.div`
  height: 100px;
  width: 190px;
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
