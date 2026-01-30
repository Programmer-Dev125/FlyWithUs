import { useRef } from "react";

export default function Input({
    label,
    labelStyles,
    value,
    mainParent,
    icon,
    onChange,
    placeholder,
    type,
    inputStyles,
    parentStyles,
    parentCommon,
    flightCommon,
    rightIcon,
    onFocus,
    onBlur
}) {
    const inputRef = useRef(null);

    const common = "w-full border-2 border-[#ffffff80] px-5 py-3 rounded-lg cursor-pointer focus-within:border-[var(--focus)]";
    const fCommon = "w-full border-2 border-[#cccccc] rounded-md px-3 py-4 focus-within:border-[var(--focus)] cursor-pointer";

    const openInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            if (["date", "time"].includes(type)) {
                inputRef.current.showPicker();
            }
        }
    };

    return (
        <div className={`flex flex-col gap-5 w-full col-span-full sm:col-span-1 ${mainParent || ""}`}>
            {label && <label className={`${labelStyles || ""}`}>{label}</label>}

            <div
                className={`flex flex-row gap-4 items-center ${parentStyles || ""} ${
                    parentCommon ? common : flightCommon ? fCommon : ""
                }`}
                onClick={openInput}
            >
                {icon || ""}

                <input
                    ref={inputRef}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    value={value || ""}
                    type={type}
                    className={`peer border-none outline-none w-full ${inputStyles || ""}`}
                    onChange={onChange}
                />

                {rightIcon || ""}
            </div>
        </div>
    );
}
