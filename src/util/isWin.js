import { winData } from "../data/win";

export const intersect = (f, s) => {
  return f.filter((v) => s.includes(v));
};

export const isWin = (user) => {
  if (user.length >= 3) {
    let i = 0;
    for (i in winData) {
      if (intersect(winData[i], user).length === 3) return true;
    }
  }
  return false;
};
