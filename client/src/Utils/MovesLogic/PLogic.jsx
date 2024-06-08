export const PLogic = (wt, currentPiece, rank, file, position) => {
  let moves = [];
  const myPiece = currentPiece[0];
  const opponentsPiece = myPiece === "w" ? "b" : "w";
  console.log(position);

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
console.log(y + dir[0],x + dir[1])
    if (
      position[y][x][0] === opponentsPiece &&
      position[y + dir[0]][x + dir[1]] === ""
    ) {
      console.log(1)
    }
    moves.push([y, x]);
  });
  return moves;
};

export const checkIfCanMove = (x, y, avMoves) => {
  let canMove = false;
  avMoves.forEach((cor) => {
    if (cor[0] === x && cor[1] === y) {
      canMove = true;
    }
  });
  return canMove;
};

export const checkIfCanCapture = () => {};
