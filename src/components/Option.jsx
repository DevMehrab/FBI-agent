import React, { useState, useContext } from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import { FaSquareCheck } from "react-icons/fa6";
import { PasswordContext } from "./PasswordProvider";

export const Option = ({ option }) => {
  const [checked, setChecked] = useState(false);
  const { state, dispatch } = useContext(PasswordContext)
  const style = checked ? "py-2 text-cyan-600" : "py-2 text-neutral-500"
  function handleClick() {
    setChecked((prev) => !prev);
    dispatch({
        type:'TOGGLE_OPTION',
        payload: {option}
    })
    
  }
  return (
    <div className={style}>
      <div
        className="flex justify-start items-center cursor-pointer select-none"
        onClick={handleClick}
      >
        {checked ? <FaSquareCheck /> : <FaRegSquareCheck />}
        <p className="ml-2 ">{option}</p>
      </div>
    </div>
  );
};
