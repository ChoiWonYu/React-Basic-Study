import { useEffect, useState } from "react";
import styled from "styled-components";
import Board from "./board/Board";
import { isWin } from "./util/isWin";

function App() {
  const [redUser, setRedUser] = useState([]);
  const [blueUser, setBlueUser] = useState([]);
  const [isRedTurn, setIsRedTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    if (isWin(redUser)) setWinner("Red");
    else if (isWin(blueUser)) setWinner("Blue");
  }, [redUser, blueUser]);

  const handleBoardClick = (num) => {
    if (isRedTurn) setRedUser(redUser.concat([num]).sort());
    else setBlueUser(blueUser.concat([num]).sort());
    setIsRedTurn(!isRedTurn);
  };

  const clearBoard = () => {
    setRedUser([]);
    setBlueUser([]);
    setWinner("");
  };

  return (
    <>
      <BoardContainer>
        {numList.map((num) => (
          <Board
            key={num}
            onClick={() => handleBoardClick(num)}
            id={num}
            redUser={redUser}
            blueUser={blueUser}
          />
        ))}
      </BoardContainer>
      <MenuContainer>
        {winner && <h1>{winner} Win!</h1>}
        <button onClick={clearBoard}>Restart</button>
      </MenuContainer>
    </>
  );
}

export default App;
const BoardContainer = styled.div`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
`;
const MenuContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
