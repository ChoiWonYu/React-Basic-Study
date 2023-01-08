import { useEffect, useState } from "react";
import styled from "styled-components";
import Board from "./board/Board";
import { isWin } from "./util/isWin";

function App() {
  const [redUser, setRedUser] = useState([]);
  const [blueUser, setBlueUser] = useState([]);
  const [isRedTurn, setIsRedTurn] = useState(true);
  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    if (isWin(redUser)) alert("Red Win");
    else if (isWin(blueUser)) alert("Blue Win");
  }, [redUser, blueUser]);

  const handleBoardClick = (num) => {
    if (isRedTurn) setRedUser(redUser.concat([num]).sort());
    else setBlueUser(blueUser.concat([num]).sort());
    setIsRedTurn(!isRedTurn);
  };

  return (
    <Container>
      {numList.map((num) => (
        <Board
          key={num}
          onClick={() => handleBoardClick(num)}
          id={num}
          redUser={redUser}
          blueUser={blueUser}
        />
      ))}
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
`;
