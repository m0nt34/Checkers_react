import React from "react";
import style from "./board.module.css";
const Piece = ({ pc, rank, file }) => {
  const onDragStart = (e) => {

    e.dataTransfer.setData("text/plain", `${pc},${rank},${file}`);
  
  };
  return (
    <>
      {pc === "bp" ? (
        <div
          className={style.black_b}
          draggable="true"
          onDragStart={(e) => onDragStart(e)}
        ></div>
      ) : (
        <div
          className={style.white_b}
          draggable="true"
          onDragStart={(e) => onDragStart(e)}
        ></div>
      )}
    </>
  );
};
export default Piece;
