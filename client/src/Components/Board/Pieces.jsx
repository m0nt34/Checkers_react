import React, { useRef, useState } from "react";
import { SetPosition, CopyPosition } from "./SetPosition";
import Piece from "./Piece";
import style from "../../assets/Styles/board.module.css";
const Pieces = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState(SetPosition());
  const [curPc, setCurPc] = useState({
    pc: null,
    rank: null,
    file: null,
  });

  const calculateCoords = (e) => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = Math.floor((e.clientY - top) / size);
    if (x > 7 || x < 0 || y > 7 || y < 0) {
      return { x: null, y: null };
    }

    return { x, y };
  };

  const onDragStart = (e) => {
    const [pc, rank, file] = e.dataTransfer.getData("text").split(",");
    setCurPc({
      pc: pc,
      rank: rank,
      file: file,
    });
  };
  
  const onDragEnd = (e) => {
    const { x, y } = calculateCoords(e);
    if (x !== null && position[x][y] === "") {
      const newPosition = CopyPosition(position);
      newPosition[curPc.rank][curPc.file] = "";

      newPosition[x][y] = curPc.pc;
      setPosition(newPosition);
    }
  }

  
  return (
    <div
      className={style.pieces_cont}
      ref={ref}
      onDragStart={(e) => onDragStart(e)}
      onDragEnd={(e) => onDragEnd(e)}
    >
      {position.map((a, i) => {
        return a.map((b, j) => {
          return b ? (
            <div
              className={style.positional_piece}
              key={i + " " + j}
              draggable="false"
            >
              <Piece pc={b} rank={i} file={j} />
            </div>
          ) : (
            <div key={i + " " + j} draggable="false"></div>
          );
        });
      })}
    </div>
  );
};

export default Pieces;
