import React from "react";
import style from "../../assets/Styles/clock.module.css";
import ClockSVG from "../../assets/SVG/ClockSVG";
import Timer from "./Timer";
const Clock = ({color,iconCl}) => {
  return (
    <div className={style.clock_cont}>
      <div className={style.clock} style={{backgroundColor:color,color:iconCl}}>
        <ClockSVG iconCl={iconCl}/>
        <Timer/>
      </div>
    </div>
  );
};
 
export default Clock;
