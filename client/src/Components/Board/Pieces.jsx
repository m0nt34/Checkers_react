import React from "react";
import { SetPosition } from "./SetPosition";
const Pieces = () => {
  const position = SetPosition();
  console.log(position);
  return (
    <div
      style={{
        position: "absolute",
        display: "grid",
        gridTemplateColumns: " repeat(8,100px)",
        gridTemplateRows: " repeat(8,100px)",
      }}
    >
      {position.map((a, i) => {
        return a.map((b, j) => {
          return (
            <div
              key={i + " " + j}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height:100,
                width:100
              }}
            >
              {b}
            </div>
          );
        });
      })}
    </div>
  );
};

export default Pieces;
