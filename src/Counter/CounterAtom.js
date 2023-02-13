import { atom, selector } from "recoil";

export const counterNumberAtom = atom({
  key: "CounterNumberAtom",
  default: 0,
});

export const counterStateAtom = atom({
  key: "CounterStateAtom",
  default: "plus",
});
