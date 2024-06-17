export const checkIfPromote = (position, wt) => {

  if (wt) {
    for (let i = 1; i < 8; i+=2) {
      console.log(position[0][i]);
      if (position[0][i] === "wp") {
        
        position[0][i] = "wk"
        return { promote: true, newPositionWP: position };
      }
    }
  } else {
    for (let i = 0; i < 8; i+=2) {
      if (position[7][i] === "bp") {
        position[7][i] = "bk"
        return { promote: true, newPositionWP: position };
      }
    }
  }
  return { promote: false, newPositionWP:null };

};
