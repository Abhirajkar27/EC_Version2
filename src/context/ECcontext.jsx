import React, { createContext, useState } from "react";

const ECContext = createContext();

const ECProvider = ({ children }) => {

  const [sendHint,setSendHint] = useState('');
  const [sendEmojie,setSendEmojie] = useState('');
  const [sendAns,setSendAns] = useState('');
  const [sendNote,setSendNote] = useState('');


  return (
    <ECContext.Provider
      value={{
        sendAns,
        setSendAns,
        sendEmojie,
        setSendEmojie,
        sendHint,
        setSendHint,
        sendNote,
        setSendNote,
      }}
    >
      {children}
    </ECContext.Provider>
  );
};

export { ECContext, ECProvider };