import React, { useState, createContext } from "react";

export const TurnContext = createContext();

export function UserProvider({ children }) {
  const [whitesTurn, setWhitesTurn] = useState(true);

  return (
    <TurnContext.Provider value={{ whitesTurn, setWhitesTurn }}>
      {children}
    </TurnContext.Provider>
  );
}