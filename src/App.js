import { useEffect, useState } from "react";
import styled from "styled-components";
import Board from "./Board";

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
    console.log("hi");
  };
  const isWin = (user) => {
    if (user.length >= 3) {
      if (user[0] + user[2] === 2 * user[1]) return true;
      if (user.length === 4 && user[1] + user[3] === 2 * user[4]) return true;
    }
    return false;
  };
  console.log(blueUser, redUser);
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
