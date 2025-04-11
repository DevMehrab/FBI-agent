import { MdContentCopy } from "react-icons/md";
import { PasswordContext } from "./PasswordProvider";
import React, { useContext } from "react";

export const Output = () => {
    const {state} = useContext(PasswordContext)

    function handleClick (){
        async function copyToClipboard(text) {
            try {
              await navigator.clipboard.writeText(text);
              console.log('Text copied to clipboard');
            } catch (err) {
              console.error('Failed to copy:', err);
            }
          }
          
          copyToClipboard(state.password);
    }
  return (
    <div className="rounded shadow p-3 bg-neutral-800 flex justify-between items-center w-full text-neutral-200">
      <h1>{state.password || <p className="opacity-25">######</p>}</h1>
      <p onClick={handleClick} className="hover:text-sky-600 bg-neutral-800">
        <MdContentCopy />
      </p>
    </div>
  );
};
