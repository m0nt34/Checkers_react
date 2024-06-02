import React, { useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [whitesTurn, setWhitesTurn] = useState(false);

  return (
    <UserContext.Provider value={{ whitesTurn, setWhitesTurn }}>
      {children}
    </UserContext.Provider>
  );
}
