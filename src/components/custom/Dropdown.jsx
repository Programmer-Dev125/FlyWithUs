import { useState, useEffect, useRef } from "react";

export default function Dropdown({trigger, content, closeOnClick, styles}){
    const [toggle, setToggle] = useState(false);
    const isOnRef = useRef(false);

    useEffect(() =>{
        const onClick = (e) =>{
            if(isOnRef.current){
                setToggle(false);
            }
        }

        window.addEventListener("click", onClick);
        return () => window.removeEventListener("click", onClick);
    }, [])

    const handleClick = (e) =>{
        e.stopPropagation();
        setToggle((prev) =>{
            isOnRef.current = !prev;
            return !prev;
        });
    }


    return(
        <div className="relative">
            <div onClick={handleClick}>
                {trigger}
            </div>
            <div className={`bg-white shadow-lg absolute z-10 transition-all duration-100 ease-in-out ${styles || ""} ${toggle ? "opacity-100 translate-y-4 pointer-events-auto" : "opacity-0 translate-y-0 pointer-events-none"}`} onClick={(e) => {
                if(!closeOnClick){
                    e.stopPropagation();
                }
            }}> 
                {content}
            </div>
        </div>
    )
}