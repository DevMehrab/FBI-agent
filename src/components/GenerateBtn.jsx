import React, { useContext } from "react";
import { PasswordContext } from "./PasswordProvider";

export const GenerateBtn = () => {
    const { state, dispatch } = useContext(PasswordContext)

    function handleClick(){
        dispatch({
            type:'GENERATE_PASSWORD',

        })
    }
  return <button onClick={handleClick} className="rounded w-full bg-cyan-900 p-3 hover:bg-sky-900 uppercase text-neutral-900">Generate</button>;
};
