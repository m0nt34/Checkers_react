import React, { useContext, useRef, useState } from "react";
import { SetPosition, CopyPosition } from "../../Utils/SetPosition";
import Piece from "./Piece";
import style from "../../assets/Styles/board.module.css";
import {
  PLogic,
  checkIfCanCaptureHelpFunction,
  checkIfCanCaptureHelpFunctionK,
} from "../../Utils/MovesLogic/PLogic";
import { checkIfCanMove } from "../../Utils/MovesLogic/CheckIfCanMove";
import { checkIfPromote } from "../../Utils/PromotionLogic";
import { TurnContext } from "../../Context/Context";
import { Turn } from "../../Utils/TurnLogic";
const Pieces = () => {
  const { whitesTurn, setWhitesTurn } = useContext(TurnContext);
  const [position, setPosition] = useState(SetPosition());
  const curPc = useRef({
    pc: null,
    rank: null,
    file: null,
  });
  const capturePiece = useRef(false);
  const ref = useRef(null);
  const avMoves = useRef(null);

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
    let { moves, capture } = PLogic(whitesTurn, pc, rank, file, position);
    avMoves.current = moves;
    capturePiece.current = capture;
  };

  const onDragEnd = (e) => {
    if (Turn(whitesTurn, curPc.current.pc)) {
      const { x, y } = calculateCoords(e);
      if (checkIfCanMove(x, y, avMoves.current)) {
        if (x !== null && position[x][y] === "") {
          let newPosition = CopyPosition(position);
          let wt = whitesTurn;

          newPosition[curPc.current.rank][curPc.current.file] = "";
          newPosition[x][y] = curPc.current.pc;
          const { promote, newPositionWP } = checkIfPromote(
            newPosition,
            whitesTurn
          );
          if (promote) {
            newPosition = newPositionWP;
          }
          let { newPositionAC, wtAC } = checkIfPieceIsCaptured(
            newPosition,
            x,
            y,
            wt
          );
          wtAC = !wtAC;
          setWhitesTurn(wtAC);
          setPosition(newPositionAC);
        }
      }
    }
    avMoves.current = null;
  };

  const checkIfPieceIsCaptured = (newPositionAC, x, y, wtAC) => {
    if (capturePiece.current) {
      if(curPc.current.pc.endsWith('p')){
        let xx, yy;
        xx = x - (x > curPc.current.rank ? 1 : -1);
        yy = y - (y > curPc.current.file ? 1 : -1);
        newPositionAC[xx][yy] = "";
        capturePiece.current = false;
        if (
          checkIfCanCaptureHelpFunction(newPositionAC, x, y, whitesTurn ? "b" : "w")
        ) {
          wtAC = !wtAC;
        }
        return { newPositionAC, wtAC };
      }else if(curPc.current.pc.endsWith('k')){
        let xx, yy;
      
        xx = x - (x > curPc.current.rank ? 1 : -1);
        yy = y - (y > curPc.current.file ? 1 : -1);
        newPositionAC[xx][yy] = "";
        capturePiece.current = false;
        
        if (
          checkIfCanCaptureHelpFunctionK(newPositionAC, x, y, whitesTurn ? "b" : "w")
        ) {

          wtAC = !wtAC;
    
        }
        return { newPositionAC, wtAC };
      }
    } else {
      return { newPositionAC, wtAC };
    }
  };
  return (
    <div
      className={style.pieces_cont}
      ref={ref}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={calculateCoords}
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
