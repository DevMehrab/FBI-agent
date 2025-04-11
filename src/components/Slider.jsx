import React, { useContext, useState } from "react";
import { PasswordContext } from "./PasswordProvider";

export const Slider = () => {
    const { state, dispatch } = useContext(PasswordContext)
    const [value, setValue] = useState(state.length); // Default 
    const min = 6;
    const max = 32;

    const handleChange = (e) => {
        setValue(parseInt(e.target.value));
        dispatch({
            type: 'CHANGE_LENGTH',
            payload: parseInt(e.target.value)
        })
    };
    return (
        <div className="w-full">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
                className="w-full h-2 my-2 bg-sky-200 rounded-lg appearance-none cursor-pointer dark:bg-neutral-800
                
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:w-4
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-sky-800
                [&::-webkit-slider-thumb]:dark:bg-neutral-300
                [&::-webkit-slider-thumb]:shadow-lg"
            />
            <div className="flex justify-between items-center select-none">
                <p className="text-neutral-200 py-2">Length: {value}</p>
               
            </div>
        </div>
    );
};
