import React from "react";
import style from "../../../assets/Styles/board.module.css";
const Ranks = ({ ranks }) => {
  const setColor = (i) => {
    return i % 2 == 0 ? "var(--light_sqr)" : "var(--dark_sqr)";
  };
  return (
    <div draggable="false" className={style.coordinates_Ranks}>
      {ranks.map((rank, i) => (
        <span
          draggable="false"
          style={{
            color: setColor(i),
          }}
          key={rank}
        >
          {rank}
        </span>
      ))}
    </div>
  );
};

export default Ranks;
