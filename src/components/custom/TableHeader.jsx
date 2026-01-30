export default function TableHeader({ children, styles }){
    return(
        <h2 className={`text-lg font-semibold text-[var(--primary)] justify-self-start pl-2 ${styles || ""}`}>{children}</h2>
    )
}