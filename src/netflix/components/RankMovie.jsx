import styled from "styled-components";
import { RankData } from "../../style/RankData";

const RankMovie = ({ img, rank, handleClick }) => {
  console.log(`${process.env.REACT_APP_IMAGE}${img}`);
  return (
    <Container>
      <Content onClick={handleClick}>
        <Number src={RankData[rank]} />
        <Poster src={`${process.env.REACT_APP_IMAGE}${img}`} />
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
