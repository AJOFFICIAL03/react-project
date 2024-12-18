"use client";

import { createContext } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
  const ajay = "Ajay singh";
  return (
    <div>
      <MyContext.Provider value={ajay}>{children}</MyContext.Provider>
    </div>
  );
};

export default Context;
