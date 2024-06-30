import React, { useContext, useEffect, useRef, useState } from "react";
import style from "../../assets/Styles/clock.module.css";
import ClockSVG from "../../assets/SVG/ClockSVG";
import { TurnContext } from "../../Context/Context";
const Clock = ({ color, iconCl, wt }) => {
  const { whitesTurn } = useContext(TurnContext);
  var rotationDeg = useRef(90);
  const [timer, setTimer] = useState({
    min: 3,
    sec: 0,
  });
  const startTimer = () => {
    if ((wt && whitesTurn) || (!wt && !whitesTurn)) {
      const x = setInterval(() => {
        changeRotationDeg();
        setTimer((prev) => {
          let { min, sec } = prev;
          if (sec === 0) {
            if (min === 0) {
              clearInterval(x);
              return { min: 0, sec: 0 };
            } else {
              return { min: min - 1, sec: 59 };
            }
          } else {
            return { min, sec: sec - 1 };
          }
        });
      }, 1000);
      return x;
    }
  };
  const changeRotationDeg = () => {
    rotationDeg.current += 90;
    rotationDeg.current=rotationDeg.current%360

  };
  useEffect(() => {
    const x = startTimer();

    return () => {
      clearInterval(x);
    };
  }, [whitesTurn]);

  return (
    <div
      className={style.clock_cont}
      style={{
        opacity: (wt && whitesTurn) || (!wt && !whitesTurn) ? "1" : "0.6",
      }}
    >
      <div
        className={style.clock}
        style={{ backgroundColor: color, color: iconCl }}
      >
        <ClockSVG iconCl={iconCl} rotation={rotationDeg} />
        <div className={style.timer}>
          {timer.min}:{timer.sec < 10 ? "0" : null}
          {timer.sec}
        </div>
      </div>
    </div>
  );
};

export default Clock;
