import React, { useReducer, useRef, useState } from "react";
import { SetPosition, CopyPosition } from "./SetPosition";
import Piece from "./Piece";
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
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        display: "grid",
        gridTemplateColumns: " repeat(8,100px)",
        gridTemplateRows: " repeat(8,100px)",
      }}
      onDragStart={(e) => {
        const [pc, rank, file] = e.dataTransfer.getData("text").split(",");
        setCurPc({
          pc: pc,
          rank: rank,
          file: file,
        });
      }}
      onDragEnd={(e) => {
        const newPosition = CopyPosition(position);

        newPosition[curPc.rank][curPc.file] = "";

        const { x, y } = calculateCoords(e);
        console.log(x,y)
        if (x!==null) {
          newPosition[x][y] = curPc.pc;
          setPosition(newPosition);
        } 
      }}
    >
      {position.map((a, i) => {
        return a.map((b, j) => {
          return b ? (
            <div
              key={i + " " + j}
              draggable="false"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 100,
                width: 100,
              
              }}
            >
              <Piece pc={b} rank={i} file={j} />
            </div>
          ) : (
            <div key={i + " " + j}></div>
          );
        });
      })}
    </div>
  );
};

export default Pieces;
