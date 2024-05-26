import React from "react";
import style from "./board.module.css";
import {ToChar} from "../../Hooks/UseToChar";
import Ranks from "./Coordinates/Ranks";
const Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => ToChar(i));
  const files = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const getBgColor = (i, j) => {
    return (i + j) % 2 == 1 ? "var(--dark_sqr)" : "var(--light_sqr)";
  };
  return (
    <div className={style.board}>
      {ranks.map((rank, i) => {
        return (
          <div className={style.rank} key={rank}>
            {files.map((file, j) => {
              return (
                <div className={style.sqr} key={rank + " " + file} style={{backgroundColor:getBgColor(i,j)}}>
                  {rank + " " + file}
                </div>
              );
            })}
          </div>
        );
      })}
      <Ranks></Ranks>
    </div>
  );
};

export default Board;
