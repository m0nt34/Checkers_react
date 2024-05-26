export const SetPosition = () => {
  const position = Array(8)
    .fill("")
    .map(() => new Array(8).fill(""));

  for (let i = 0; i < 8; i+=2) {
    position[1][i] = "bp";
    position[5][i] = "wp";
    position[7][i] = "wp";
  }
  for (let i = 1; i < 8; i+=2) {
    position[0][i] = "bp";
    position[2][i] = "bp";
    position[6][i] = "wp";
  }

  return position
};


