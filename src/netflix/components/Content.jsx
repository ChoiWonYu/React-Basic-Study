import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieMenu from "./MovieMenu";
import { Axios } from "../Axios";

const Content = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [topRated, setTopRated] = useState();
  const [popular, setPopular] = useState();
  const [nowPlaying, setNowPlaying] = useState();

  useEffect(() => {
    setIsLoading(true);
    getTopRatedMovie();
    getNowPlayingMovie();
    getPopularMovie();
    setIsLoading(false);
  }, []);
  const getTopRatedMovie = async () => {
    try {
      const res = await Axios("/movie/top_rated");
      setTopRated(res.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const getNowPlayingMovie = async () => {
    try {
      const res = await Axios("/movie/now_playing");
      setNowPlaying(res.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const getPopularMovie = async () => {
    try {
      const res = await Axios("/movie/popular");
      setPopular(res.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <MovieMenu
            isRank={true}
            name="오늘 대한민국의 TOP 10영화"
            movies={topRated}
          />
          <MovieMenu isRank={false} name="해외 시리즈" movies={nowPlaying} />
          <MovieMenu isRank={false} name="시리즈" movies={popular} />
        </>
      )}
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
