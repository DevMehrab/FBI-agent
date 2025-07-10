import React, { useContext, useEffect, useRef, useState } from "react";
import { Message } from "./Message";
import { ChatContext } from "../context/context";
import useApi from "../hooks/useApi";

export const Chat = () => {
  const { history, isLoading } = useContext(ChatContext);
  console.log(history);
  const targetRef = useRef();

  let list = history.map((el, i) => {
    return (
      <Message key={i} text={el.parts[0].text} isUser={el.role === "user"} />
    );
  });
  useEffect(() => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <>
      <div className="p-4 text-center border-b border-b-cyan-900">
        <p className="text-cyan-600">FBI agent protocol</p>
      </div>
      <div className="flex flex-col flex-1 sm:flex-none border-0 sm:border-white h-96 p-4 border-b-0 overflow-y-scroll scrollbar-hidden">
        {list}
        {isLoading && <Message text={"typing..."} isUser={false} />}
        <div ref={targetRef}></div>
      </div>
    </>
  );
};
