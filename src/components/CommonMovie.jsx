import React from "react";
import styled from "styled-components";
import Movie from "../asset/movie.png";

const CommonMovie = ({ img, handleClick }) => {
  return (
    <Container>
      <Img src={Movie} onClick={handleClick} />
    </Container>
  );
};

export default CommonMovie;

const Container = styled.div`
  height: 80px;
  width: 190px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 5px 0px;
`;
