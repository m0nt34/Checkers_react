import React from "react";
import Board from "./Components/Board/Board";
import Clock from "./Components/Clock/Clock";
function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'15px'}}>
      <Clock color='#201f1c' iconCl="#fff"/>
      <Board />
      <Clock color='#fff' iconCl="#201f1c"/>
    </div>
  );
}
 
export default App;
