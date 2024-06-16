const captureDirections = [
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];
export const PLogic = (wt, currentPiece, rank, file, position) => {
  let moves = [];
  const myPiece = currentPiece[0];
  const opponentsPiece = myPiece === "w" ? "b" : "w";
  const direction = wt
    ? [
        [-1, -1],
        [-1, 1],
      ]
    : [
        [1, -1],
        [1, 1],
      ];
  if (checkIfCanCapture(wt, position, opponentsPiece)) {
  console.log(1);

    direction.forEach((dir) => {
      const x = parseInt(file) + parseFloat(dir[1]);
      const y = parseInt(rank) + parseFloat(dir[0]);
      if (x < 8 && x >= 0 && y < 8 && y >= 0) {
        // console.log(position[y][x][0] === opponentsPiece);
        // console.log(position[y + dir[0]][x + dir[1]] === "");

        if (
          position[y][x][0] === opponentsPiece &&
          position[y + dir[0]][x + dir[1]] === ""
        ) {
          moves.push([y + dir[0], x + dir[1]]);
        }
      }
    });
  } else {
    direction.forEach((dir) => {
      const x = parseInt(file) + parseFloat(dir[1]);
      const y = parseInt(rank) + parseFloat(dir[0]);
      if (x < 8 && x >= 0 && y < 8 && y >= 0) {
        // console.log(position[y][x][0] === opponentsPiece);
        // console.log(position[y + dir[0]][x + dir[1]] === "");
        moves.push([y, x]);
      }
    });
  }
  return moves;
};

export const checkIfCanCapture = (wt, position, opponentsPiece) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (wt && position[i][j][0] === "w") {
        if (checkIfCanCaptureHelpFunction(position, i, j, opponentsPiece)) {
          return true;
        }
      } else if (!wt && position[i][j][0] === "b") {
        if (checkIfCanCaptureHelpFunction(position, i, j, opponentsPiece)) {
          return true;
        }
      }
    }
  }

  return false;
};
const checkIfCanCaptureHelpFunction = (position, i, j, opponentsPiece) => {
  console.log("coordinates of current piece", i, j);

  for (let k = 0; k < captureDirections.length; k++) {
    const x = parseInt(j) + parseFloat(captureDirections[k][1]);
    const y = parseInt(i) + parseFloat(captureDirections[k][0]);
    //console.log(y,x)
    if (
      x < 8 &&
      x >= 0 &&
      y < 8 &&
      y >= 0 &&
      y + captureDirections[k][0] < 8 &&
      y + captureDirections[k][0] >= 0 &&
      x + captureDirections[k][1] < 8 &&
      x + captureDirections[k][1] >= 0
    ) {
      if (
        position[y][x][0] === opponentsPiece &&
        position[y + captureDirections[k][0]][x + captureDirections[k][1]] ===
          ""
      ) {
        return true;
      }
    }
  }
  return false;
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
