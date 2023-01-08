import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Board = ({ id, redUser, blueUser, onClick }) => {
  const [isRedSelect, setIsRedSelect] = useState(false);
  const [isBlueSelect, setIsBlueSelect] = useState(false);
  useEffect(() => {
    if (redUser.includes(id)) setIsRedSelect(true);
    else if (blueUser.includes(id)) setIsBlueSelect(true);
  });
  return (
    <Container
      isRedSelect={isRedSelect}
      isBlueSelect={isBlueSelect}
      onClick={onClick}
    >
      {id}
    </Container>
  );
};

export default Board;

const Container = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  background-color: ${(props) =>
    props.isRedSelect ? "red" : props.isBlueSelect ? "blue" : "none"};
`;
