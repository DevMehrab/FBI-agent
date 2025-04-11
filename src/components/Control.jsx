import React from "react";
import { Option } from "./Option";
import { Slider } from "./Slider";

export const Control = () => {
    return (
        <div className="py-4 w-full">
            <Option option={"Uppercase"} />
            <Option option={"Lowercase"} />
            <Option option={"Numbers"} />
            <Option option={"Special"} />
            <Slider />
        </div>
    );
};
