import React, { useState } from "react";
import { ChatContext } from "../context/context";

export const ChatProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <ChatContext.Provider
        value={{ history, setHistory, isLoading, setIsLoading }}
      >
        {children}
      </ChatContext.Provider>
    </>
  );
};
