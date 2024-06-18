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

  let capture = false;
  if (checkIfCanCapture(wt, position, opponentsPiece)) {
    if (currentPiece.endsWith("p")) {
      captureDirections.forEach((dir) => {
        const x = parseInt(file) + parseFloat(dir[1]);
        const y = parseInt(rank) + parseFloat(dir[0]);
        if (
          x < 8 &&
          x >= 0 &&
          y < 8 &&
          y >= 0 &&
          y + dir[0] < 8 &&
          y + dir[0] >= 0 &&
          x + dir[1] < 8 &&
          x + dir[1] >= 0
        ) {
          if (
            position[y][x].startsWith(opponentsPiece) &&
            position[y + dir[0]][x + dir[1]] === ""
          ) {
            moves.push([y + dir[0], x + dir[1]]);
            capture = true;
          }
        }
      });
    } else {
      for (let m = 0; m < captureDirections.length; m++) {
        for (let k = 1; k < 8; k++) {
          const x = parseInt(file) + parseFloat(captureDirections[m][1] * k);
          const y = parseInt(rank) + parseFloat(captureDirections[m][0] * k);
          const xx =
            parseInt(file) + parseFloat(captureDirections[m][1] * (k + 1));
          const yy =
            parseInt(rank) + parseFloat(captureDirections[m][0] * (k + 1));

          if (position?.[y]?.[x] === undefined) {
            break;
          }
          if (position[y][x].startsWith(opponentsPiece)) {
            if (
              position?.[yy]?.[xx] === undefined ||
              position[yy][xx].startsWith(myPiece)
            ) {
              break;
            } else {
              moves.push([yy, xx]);
              capture = true;
            }
          }
        }
      }
    }
  } else {
    if (currentPiece.endsWith("p")) {
      direction.forEach((dir) => {
        const x = parseInt(file) + parseFloat(dir[1]);
        const y = parseInt(rank) + parseFloat(dir[0]);
        if (x < 8 && x >= 0 && y < 8 && y >= 0) {
          moves.push([y, x]);
        }
      });
    } else {
      captureDirections.forEach((dir) => {
        for (let i = 1; i < 8; i++) {
          const x = parseInt(file) + parseFloat(dir[1] * i);
          const y = parseInt(rank) + parseFloat(dir[0] * i);
          if (position?.[y]?.[x] === undefined) {
            break;
          }
          if (position[y][x].startsWith(opponentsPiece)) {
            break;
          }
          if (position[y][x].startsWith(myPiece)) {
            break;
          }
          moves.push([y, x]);
        }
      });
    }
  }
  return { moves, capture };
};

export const checkIfCanCapture = (wt, position, opponentsPiece) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (wt && position[i][j].startsWith("w")) {
        if (position[i][j].endsWith("k")) {
          if (checkIfCanCaptureHelpFunctionK(position, i, j, opponentsPiece)) {
            return true;
          }
        } else {
          if (checkIfCanCaptureHelpFunction(position, i, j, opponentsPiece)) {
            return true;
          }
        }
      } else if (!wt && position[i][j].startsWith("b")) {
        if (position[i][j].endsWith("k")) {
          if (checkIfCanCaptureHelpFunctionK(position, i, j, opponentsPiece)) {
            return true;
          }
        } else {
          if (checkIfCanCaptureHelpFunction(position, i, j, opponentsPiece)) {
            return true;
          }
        }
      }
    }
  }

  return false;
};
export const checkIfCanCaptureHelpFunction = (
  position,
  i,
  j,
  opponentsPiece
) => {
  for (let k = 0; k < captureDirections.length; k++) {
    const x = parseInt(j) + parseFloat(captureDirections[k][1]);
    const y = parseInt(i) + parseFloat(captureDirections[k][0]);
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
        position[y][x].startsWith(opponentsPiece) &&
        position[y + captureDirections[k][0]][x + captureDirections[k][1]] ===
          ""
      ) {
        return true;
      }
    }
  }
  return false;
};

export const checkIfCanCaptureHelpFunctionK = (
  position,
  i,
  j,
  opponentsPiece
) => {
  for (let m = 0; m < captureDirections.length; m++) {
    for (let k = 1; k < 8; k++) {
      const x = parseInt(j) + parseFloat(captureDirections[m][1] * k);
      const y = parseInt(i) + parseFloat(captureDirections[m][0] * k);
      const xx = parseInt(j) + parseFloat(captureDirections[m][1] * (k + 1));
      const yy = parseInt(i) + parseFloat(captureDirections[m][0] * (k + 1));

      if (
        position?.[y]?.[x] === undefined ||
        position?.[yy]?.[xx] === undefined
      ) {
        break;
      }
      if (position[y][x].startsWith(opponentsPiece)) {
        if (position[yy][xx] === "") {
          return true;
        } else {
          break;
        }
      }
    }
  }
  return false;
};
