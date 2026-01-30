export default function Table({contents, headers, barStyle, showCustom, customKey, tableStyle, customStyle}){
    return(
        <section className={`w-full overflow-x-auto scroll-hidden ${tableStyle || ""}`}>
            <div className={`${barStyle || ""} mt-8 items-center border-b border-b-[var(--secondary)] pb-3`}>
                {headers.map((header, index) => <h2 className={`text-lg font-semibold text-[var(--primary)] justify-self-start pl-2`} key={index}>{header}</h2>)}
            </div>
            {contents.map((content, index) => 
                <div className={`${barStyle || ""}`} key={index}>
                    {Object.entries(content).map(([key, value], i) => <div className={`text-md text-wrap text-[var(--primary)] ${(index + 1) % 2 == 0 ? "bg-black/10" : ""} py-3 pl-2`} key={i}>
                        {customKey?.includes(key) ? showCustom.map((custom) => custom.stop === key ? <p className={`${customStyle || ""}`} onClick={(e) => custom?.fn?.(e, content)}>{custom?.comp || custom?.text}</p> : "") : <p>{value}</p>}
                    </div>)}
                </div>
            )}
        </section>
    )
}
