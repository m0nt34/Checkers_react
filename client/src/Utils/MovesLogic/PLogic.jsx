export const PLogic = (wt, position, rank, file) => {
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
    console.log(file,rank)
    //moves.push(y,x)
  });
  return moves;
};
