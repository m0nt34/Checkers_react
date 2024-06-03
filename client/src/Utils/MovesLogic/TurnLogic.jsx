export const Turn = (wt, pc) => {
  if (pc[0] === "w" && wt||pc[0] === "b" && !wt) {
    console.log(wt,pc)
    return true;
  } else {
    return false;
  }
};
