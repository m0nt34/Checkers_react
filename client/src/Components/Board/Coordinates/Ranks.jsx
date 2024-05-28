import React from "react";

const Ranks = ({ ranks }) => {
  const setColor = (i) => {
    return i % 2 == 0 ? "var(--light_sqr)" : "var(--dark_sqr)";
  };
  return (
    <div style={{ display: "flex", position: "absolute", bottom: 0 }}>
      {ranks.map((rank, i) => (
        <span
          style={{
            width: 100,
            fontWeight: 600,
            fontSize: 22,
            color: setColor(i),
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "1%",
            zIndex: 2,
            userSelect:'none'
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
