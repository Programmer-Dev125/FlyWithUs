export default function TableCell({children, id, styles}){
    return(
        <p className={`text-md text-[var(--primary)] ${id % 2 == 0 ? "bg-black/10" : ""} py-3 pl-2 ${styles || ""}`}>{children}</p>
    )
}