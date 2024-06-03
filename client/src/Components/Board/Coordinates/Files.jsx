import React from "react";
import style from "../../../assets/Styles/board.module.css";
const Files = ({ files }) => {
  const setColor = (i) => {
    return i % 2 == 1 ? "var(--light_sqr)" : "var(--dark_sqr)";
  };
  return (
    <div draggable="false" className={style.coordinates_Files}>
      {files.map((file, i) => {
        return (
          <span
            draggable="false"
            style={{
              color: setColor(i),
            }}
            key={file}
          >
            {file}
          </span>
        );
      })}
    </div>
  );
};

export default Files;
