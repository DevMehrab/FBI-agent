import React, { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { Chat } from "./components/Chat";
import { ChatProvider } from "./provider/ChatProvider";

function App() {
  return (
    <>
      <ChatProvider>
        <div className="bg-black h-screen flex justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center max-w-2xl">
            <Chat />
            <Input />
          </div>
        </div>
      </ChatProvider>
    </>
  );
}

export default App;
