export const checkIfCanMove = (x, y, avMoves) => {
  let canMove = false;
  avMoves.forEach((cor) => {
    if (cor[0] === x && cor[1] === y) {
      canMove = true;
    }
  });
  return canMove;
};
