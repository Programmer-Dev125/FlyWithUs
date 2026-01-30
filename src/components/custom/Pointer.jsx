export default function Pointer({title, text, extraStyles, lists, lastText ,rightBorder, leftBorder, icon, headerStyle}){
    return(
         <div  className={`${extraStyles || ""} ${rightBorder ? "border-r-5 border-r-[var(--focus)] pr-5" : "" } ${leftBorder ? "border-l-5 border-l-[var(--focus)] pl-5" : ""}`}>
            <div className={`flex gap-3 items-center mb-3`}>
                <h2 className={`text-lg text-[var(--primary)] font-semibold ${headerStyle || ""}`}>{title}</h2>
                {icon && <div className={`w-[33px] h-[33px] rounded-full bg-[var(--focus)] flex justify-center items-center`}>
                    {icon}
                </div>}
            </div>
            <p className="text-md text-[var(--primary)] indent-10">{text}</p>
            {lists?.length > 0 && lists.map((list, index) => <div key={index}>
                   <p className="text-md text-[var(--primary)] font-semibold indent-10 mt-5 mb-5">{list?.title}</p>
                   {list.data.map((insideList, index) => <ol key={index} className="list-disc pl-15">
                    <li className="text-md text-[var(--primary)]">{insideList}</li>
                   </ol>)}
                </div>)}
            {lastText && <p className="text-md text-[var(--primary)] indent-10">{lastText}</p>}    
        </div>
    )
}
