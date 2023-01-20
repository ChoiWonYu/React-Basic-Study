import React from "react";
import styled from "styled-components";
import CommonMovie from "./CommonMovie";
import RankMovie from "./RankMovie";
import { slideSetting } from "../data/SlideConfig";
import Slider from "react-slick";
import { MovieData } from "../data/MovieData";

const MovieMenu = ({ isRank, name }) => {
  const Movies = MovieData.results;

  return (
    <Container isRank>
      {name}
      <Slider {...slideSetting}>
        {Movies.map((comp, idx) =>
          isRank ? (
            <RankMovie key={comp.id} img={comp.poster_path} rank={idx} />
          ) : (
            <CommonMovie key={comp.id} img={comp.poster_path} />
          )
        )}
      </Slider>
    </Container>
  );
};

export default MovieMenu;

const Container = styled.div`
  width: 100vw;
  height: ${(props) => (props.isRank ? "120px" : "100px")};
`;
