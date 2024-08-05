import React, { createContext } from "react";

const ECContext = createContext();

const ECProvider = ({ children }) => {


  return (
    <ECContext.Provider
      value={{
      }}
    >
      {children}
    </ECContext.Provider>
  );
};

export { ECContext, ECProvider };