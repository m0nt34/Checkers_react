import React, { useContext, useRef, useState } from "react";
import { SetPosition, CopyPosition } from "./SetPosition";
import Piece from "./Piece";
import style from "../../assets/Styles/board.module.css";
import { PLogic } from "../../Utils/MovesLogic/PLogic";
import { TurnContext } from "../../Context/Context";
import { Turn } from "../../Utils/TurnLogic";
const Pieces = () => {
  const { whitesTurn, setWhitesTurn } = useContext(TurnContext);

  const ref = useRef(null);
  let avMoves = useRef(null);
  const [position, setPosition] = useState(SetPosition());
  const curPc = useRef({
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
    curPc.current = {
      pc: pc,
      rank: rank,
      file: file,
    };
    avMoves.current = PLogic(
      whitesTurn,
      position,
      curPc.current.rank,
      curPc.current.file
    );
  };

  const onDragEnd = (e) => {
    const { x, y } = calculateCoords(e);
    // console.log(avMoves.current);
    // console.log(checkIfCanMove(x, y))
    if (checkIfCanMove(x, y)) {
      if (Turn(whitesTurn, curPc.current.pc)) {
        if (x !== null && position[x][y] === "") {
          const newPosition = CopyPosition(position);
          newPosition[curPc.current.rank][curPc.current.file] = "";

          newPosition[x][y] = curPc.current.pc;
          setPosition(newPosition);
          setWhitesTurn(!whitesTurn);
        }
      }
    }
    avMoves.current = null;
  };
  const checkIfCanMove = (x, y) => {
    let canMove = false;
    avMoves.current.forEach((cor) => {
      if (cor[0] === x && cor[1] === y) {
        canMove = true;
      }
    });
    return canMove;
  };
  return (
    <div
      className={style.pieces_cont}
      ref={ref}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
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
