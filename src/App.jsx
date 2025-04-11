import { useState } from "react";
import "./App.css";
import { Output } from "./components/Output";
import { Control } from "./components/Control";
import { GenerateBtn } from "./components/GenerateBtn";
import { PasswordProvider } from "./components/PasswordProvider";

function App() {
  return (
    <PasswordProvider>
      <div className="h-screen flex justify-center items-center bg-neutral-900 p-3 flex-col">
        <h1 className="absolute top-0 p-4 text-xl uppercase text-neutral-800 font-bold">Password Generator</h1>
        <div className="flex justify-center items-start flex-col w-screen max-w-96">
          <Output />
          <Control />
          <GenerateBtn />
        </div>
      </div>
    </PasswordProvider>
  );
}

export default App;
