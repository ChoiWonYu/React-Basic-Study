import styled from "styled-components";
import CommonMovie from "./CommonMovie";
import RankMovie from "./RankMovie";
import { slideSetting } from "../data/SlideConfig";
import Slider from "react-slick";
import { useState } from "react";
import ModalPotal from "./ModalPotal";
import MovieModal from "./MovieModal";

const MovieMenu = ({ isRank, name, movies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = (movieInfo) => {
    setIsOpen(true);
    setInfo(movieInfo);
    console.log(movieInfo);
  };

  return (
    <Container isRank>
      {isOpen && (
        <ModalPotal>
          <MovieModal handleClose={closeModal} info={info} />
        </ModalPotal>
      )}

      {name}
      {movies && (
        <>
          <Slider {...slideSetting}>
            {movies.map((movieInfo, idx) =>
              isRank ? (
                <RankMovie
                  key={movieInfo.id}
                  img={movieInfo.poster_path}
                  rank={idx}
                  handleClick={() => handleClick(movieInfo)}
                />
              ) : (
                <CommonMovie
                  key={movieInfo.id}
                  img={movieInfo.poster_path}
                  handleClick={() => handleClick(movieInfo)}
                />
              )
            )}
          </Slider>
        </>
      )}
    </Container>
  );
};

export default MovieMenu;

const Container = styled.div`
  width: 100vw;
  height: ${(props) => (props.isRank ? "120px" : "100px")};
`;
