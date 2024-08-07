import React, { createContext, useRef, useState } from "react";

const ECContext = createContext();

const ECProvider = ({ children }) => {

  const [sendHint,setSendHint] = useState('');
  const [sendEmojie,setSendEmojie] = useState('');
  const [sendAns,setSendAns] = useState('');
  const [sendNote,setSendNote] = useState('');
  const emojiInputRef = useRef(null);



    const handleSuggestEC = async () => {
      try {
        const response = await fetch("https://vyld-cb-dev-api.vyld.io/api/v1/activity-games?name=emoji_charades");
        const res = await response.json();
        const topics = Object.keys(res.data.result);
        const rndtop = topics[Math.floor(Math.random()*3)];
        const SuggestionOpt= res.data.result[rndtop];
        const SuggestionOptLen = SuggestionOpt.length;
        const finalSuggestion =  SuggestionOpt[Math.floor(Math.random()*SuggestionOptLen)]
        setSendAns(finalSuggestion.text);
        // setSendEmojie(finalSuggestion.options[Math.floor(Math.random()*2)].data);
        if (emojiInputRef.current) {
          emojiInputRef.current.focus();
          document.execCommand('insertText', false, finalSuggestion.options[Math.floor(Math.random()*2)].data);
        }
        setSendHint(rndtop);
      } catch (error) {
        console.error("Error fetching grid letters:", error);
      }
    };

  const handleHintChange = (event) => {
    let value = event.target.value;
    if (value.length > 55) {
      value = value.slice(0, 55); 
    }
    const lineCount = value.split('\n').length;
    if (lineCount <= 4) {
      const trimmedValue = value.replace(/^\s+/g, '');
      setSendHint(trimmedValue);
    }
  };
  const handleAnsChange = (event) => {
    let value = event.target.value;
    if (value.length > 55) {
      value = value.slice(0, 55); 
    }
    const lineCount = value.split('\n').length;
    if (lineCount <= 4) {
      const trimmedValue = value.replace(/^\s+/g, '');
      setSendAns(trimmedValue);
    }
  };
  const handleNoteChange = (event) => {
    let value = event.target.value;
    if (value.length > 55) {
      value = value.slice(0, 55); 
    }
    const lineCount = value.split('\n').length;
    if (lineCount <= 4) {
      const trimmedValue = value.replace(/^\s+/g, '');
      setSendNote(trimmedValue);
    }
  };

  const handleEmojieChange = (event) => {
    // event.preventDefault();
    console.log("I am changing", sendEmojie);
    let value = event.target.value;
    console.log(value);
    if (value.length > 24) {
      value = value.slice(0, 24); 
    }
    const lineCount = value.split('\n').length;
    if (lineCount <= 4) {
      const trimmedValue = value.replace(/^\s+/g, '');
      setSendEmojie(trimmedValue);
    }
  };


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
        handleAnsChange,
        handleEmojieChange,
        handleHintChange,
        handleNoteChange,
        handleSuggestEC,
        emojiInputRef,
      }}
    >
      {children}
    </ECContext.Provider>
  );
};

export { ECContext, ECProvider };