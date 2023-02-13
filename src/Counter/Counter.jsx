import React from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import styled from "styled-components";
import { counterNumberAtom, counterStateAtom } from "./CounterAtom";

const Counter = () => {
  const [selected, setSelected] = useRecoilState(counterStateAtom);
  const [counter, setCounter] = useRecoilState(counterNumberAtom);
  const resetCounter = useResetRecoilState(counterNumberAtom);
  const menuData = ["plus", "minus", "reset"];

  const handleNumChange = () => {
    switch (selected) {
      case "plus":
        setCounter((prev) => prev + 1);
        break;
      case "minus":
        setCounter((prev) => prev - 1);
        break;
      case "reset":
        resetCounter();
    }
  };
  return (
    <Container>
      <MenuContainer>
        {menuData.map((menu, i) => (
          <Menu
            key={i}
            onClick={() => setSelected(menu)}
            isSelected={selected === menu}
          >
            {menu}
          </Menu>
        ))}
      </MenuContainer>
      {counter}
      <button onClick={handleNumChange}>{selected}</button>
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MenuContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Menu = styled.div`
  flex: 1;
  color: ${({ isSelected }) => (isSelected ? "red" : "black")};
  text-align: center;
`;
