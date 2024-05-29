import React from "react";
import style from "../../assets/Styles/board.module.css";
import { ToChar } from "../../Utils/ToChar";
import Ranks from "./Coordinates/Ranks";
import Files from "./Coordinates/Files";
import Pieces from "./Pieces";
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
      <Pieces />
      <Files files={files} />
      {ranks.map((rank, i) => {
        return (
          <div className={style.rank} key={rank} style={{userSelect:'none'}} draggable='false'>
            {files.map((file, j) => {
              return (
                <div
                  className={style.sqr}
                  key={rank + " " + file}
                  style={{ backgroundColor: getBgColor(i, j) ,userSelect:'none'}}
                  draggable='false'
                  
                >
                  
                </div>
              );
            })}
          </div>
        );
      })}
      <Ranks ranks={ranks} />
    </div>
  );
};

export default Board;
