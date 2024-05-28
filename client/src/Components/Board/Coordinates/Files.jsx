import React from "react";

const Files = ({ files }) => {
  const setColor = (i) => {
    return i % 2 == 1 ? "var(--light_sqr)" : "var(--dark_sqr)";
  };
  return (
    <div
      draggable="false"
      style={{
        display: "grid",
        position: "absolute",
        left: "1%",
        top: "0.5%",
        userSelect: "none",
      }}
    >
      {files.map((file, i) => {
        return (
          <span
            draggable="false"
            style={{
              height: 100,
              fontWeight: 600,
              fontSize: 22,
              color: setColor(i),
              zIndex: 2,
              userSelect: "none",
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
