export const Turn = (wt, pc) => {
  if (pc[0] === "w" && wt||pc[0] === "b" && !wt) {
    return true;
  } else {
    return false;
  }
};
