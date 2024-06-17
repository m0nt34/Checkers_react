import React, { useState } from "react";
import style from "../../assets/Styles/board.module.css";
import wp from "../../assets/Pieces_Imgs/wp.png";
import bp from "../../assets/Pieces_Imgs/bp.png";
import wk from "../../assets/Pieces_Imgs/wk.png";
import bk from "../../assets/Pieces_Imgs/bk.png";
const Piece = ({ pc, rank, file }) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", `${pc},${rank},${file}`);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
    setIsGrabbing(true);
  };

  const onDragEnd = (e) => {
    e.target.style.display = "block";
    setIsGrabbing(false);
  };

  const imgSrc =
    pc[0] === "b" ? (pc[1] === "p" ? bp : bk) : pc[1] === "p" ? wp : wk;
  const imgClass = pc === "bp" ? style.black_b : style.white_b;

  return (
    <img
      src={imgSrc}
      style={{ cursor: isGrabbing ? "grabbing" : "grab" }}
      className={imgClass}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      }}
    />
  );
};

export default Piece;
