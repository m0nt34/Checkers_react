import React from "react";
import style from "./board.module.css";
import {ToChar} from "../../Hooks/UseToChar";
import Ranks from "./Coordinates/Ranks";
import Files from "./Coordinates/Files";
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
      <Files files={files}/>
      {ranks.map((rank, i) => {
        return (
          <div className={style.rank} key={rank}>
            {files.map((file, j) => {
              return (
                <div className={style.sqr} key={rank + " " + file} style={{backgroundColor:getBgColor(i,j)}}>
                  {/* {rank + " " + file} */}
                </div>
              );
            })}
          </div>
        );
      })}
      <Ranks ranks={ranks}/>
    </div>
  );
};

export default Board;
