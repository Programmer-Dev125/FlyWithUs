import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

export default function SidebarTab({ collapse, icon, text, link}){
    const {pathname} = useLocation();
    const textRef = useRef(null);

    useEffect(() =>{
        setTimeout(() =>{
            if(textRef?.current){
                if(collapse){
                    textRef.current.className = "text-white text-lg block xl:hidden";
                }else {
                    textRef.current.className = "text-white text-lg hidden xl:block";
                }
            }
        }, 50)
    }, [collapse]);

    return(
        <div className={`flex flex-row items-center transition-colors duration-300 hover:bg-[var(--focus)] gap-10 pr-10 pl-10 pt-5 pb-5 cursor-pointer ${pathname == link  ? "bg-[var(--focus)]" : "bg-[var(--primary)]"}`}>
                {icon}
            <p ref={textRef}>{text}</p>
        </div>
    )
}
