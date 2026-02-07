export default function Title({sub, main, extra, center, size}){
    return(
        <h2 className={`${size || "text-3xl sm:text-5xl"} text-[var(--primary)] font-semibold ${center ? "text-center" : ""}`}>{sub} <span className="text-[var(--focus)] italic">{main}</span> {extra || ""}</h2>
    )
}