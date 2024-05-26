import React from "react";
import { ToChar } from "../../../Hooks/UseToChar";
const Ranks = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => ToChar(i));
  return (
    <div>
      {ranks.map((rank) => (
        <span key={rank}>{rank}</span>
      ))}
    </div>
  );
};

export default Ranks;
