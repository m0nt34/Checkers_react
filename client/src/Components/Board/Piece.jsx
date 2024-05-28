import React from "react";
import style from "./board.module.css";
const Piece = ({ pc, rank, file }) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", `${pc},${rank},${file}`);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  };
  return (
    <>
      {pc === "bp" ? (
        <div
          style={{ cursor: "default" }}
          className={style.black_b}
          draggable="true"
          onDragStart={(e) => onDragStart(e)}
          onDragEnd={(e) => (e.target.style.display = "block")}
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
          }}
        ></div>
      ) : (
        <div
          style={{ cursor: "default" }}
          className={style.white_b}
          draggable="true"
          onDragStart={(e) => onDragStart(e)}
          onDragEnd={(e) => (e.target.style.display = "block")}
          onDragOver={(e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
          }}
        ></div>
      )}
    </>
  );
};
export default Piece;
