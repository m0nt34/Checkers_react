export const PLogic = (wt, rank, file) => {
  let moves = [];
  const direction = wt
    ? [
        [-1, -1],
        [-1, 1],
      ]
    : [
        [1, -1],
        [1, 1],
      ];
  direction.forEach((dir) => {
    const x = parseInt(file) + parseFloat(dir[1]);
    const y = parseInt(rank) + parseFloat(dir[0]);

    moves.push([y, x]);
  });
  return moves;
};

export const checkIfCanMove = (x, y,avMoves) => {
  let canMove = false;
  avMoves.forEach((cor) => {
    if (cor[0] === x && cor[1] === y) {
      canMove = true;
    }
  });
  return canMove;
};
