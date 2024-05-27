import React from "react";
import style from "./board.module.css";
const Piece = ({ pc, rank, file }) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", `${pc},${rank},${file}`);
    setTimeout(() => {
      e.target.style.display = 'none'
    }, 0);
  };
  return (
    <>
      {pc === "bp" ? (
        <div
          className={style.black_b}
          draggable="true"
          onDragStart={(e) => onDragStart(e)}
          onDragEnd={(e)=>e.target.style.display = 'block'}

        ></div>
      ) : (
        <div
          className={style.white_b}
          draggable="true"
          onDragStart={(e) => onDragStart(e)}
          onDragEnd={(e)=>e.target.style.display = 'block'}
        ></div>
      )}
    </>
  );
};
export default Piece;
