import React from "react";
import styled from "styled-components";
import Movie from "../asset/movie.png";

const CommonMovie = ({ img }) => {
  return <Container src={Movie}></Container>;
};

export default CommonMovie;

const Container = styled.img`
  height: 80px;
  width: 190px;
  background-color: red;
  display: flex;
  margin: 5px 0px;
`;
