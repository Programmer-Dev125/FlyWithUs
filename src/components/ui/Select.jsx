import { useState } from "react";

export default function Select({
    label,
    labelStyles,
    mainParent,
    icon,
    options,
    parentStyles,
    optionStyle,
    selectStyle,
    parentCommon,
    flightCommon
}) {
    const common = "w-full border-2 border-[#ffffff80] px-5 py-3 rounded-lg cursor-pointer focus-within:border-[#F1A501]";
    const fCommon = "w-full border-2 border-[#cccccc] rounded-md px-3 py-4 focus-within:border-[#F1A501] cursor-pointer";

    return (
        <div className={`flex flex-col gap-5 w-full col-span-full sm:col-span-1 ${mainParent || ""}`}>
            {label && <label className={`${labelStyles || ""}`}>{label}</label>}

            <div
                className={`flex flex-row gap-3 w-full ${parentStyles || ""} ${
                    parentCommon ? common : flightCommon ? fCommon : ""
                }`}
            >
                {icon}

                <select className={`outline-none cursor-pointer w-full ${selectStyle || ""}`}>
                    {options.map((option, index) => (
                        <option className={`${optionStyle || ""}`} key={index}>
                            {option != null ? option : index + 1}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
