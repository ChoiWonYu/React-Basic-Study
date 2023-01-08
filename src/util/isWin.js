export const isWin = (user) => {
  if (user.length >= 3) {
    if (user[0] + user[2] === 2 * user[1]) return true;
    if (user.length === 4 && user[1] + user[3] === 2 * user[4]) return true;
  }
  return false;
};
