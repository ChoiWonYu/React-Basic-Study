import React from "react";
import styled from "styled-components";
import Movie from "../asset/movie.png";

const MovieModal = ({ info, handleClose }) => {
  const { overview, genre_ids, poster_path } = info;
  return (
    <Background onClick={handleClose}>
      <Content>
        <Poster src={`${process.env.REACT_APP_IMAGE}${poster_path}`} />
        <TextContainer>
          {overview || "개요"}
          <DescriptionContainer>
            <p>출연: 출연진</p>
            <p>장르: {genre_ids || "액션"}</p>
          </DescriptionContainer>
        </TextContainer>
      </Content>
    </Background>
  );
};

export default MovieModal;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 800px;
  height: 500px;
  background-color: black;
`;

const Poster = styled.img`
  width: 100%;
  height: 60%;
`;

const TextContainer = styled.div`
  display: flex;
  width: 80%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;
