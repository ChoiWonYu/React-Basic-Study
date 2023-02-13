import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { counterAtom } from "./NumberAtom";

const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterAtom);
  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const handleMinus = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <RecoilRoot>
      <div>
        {counter}
        <button onClick={handlePlus}>+1</button>
        <button onClick={handleMinus}>-1</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </RecoilRoot>
  );
};

export default Counter;
