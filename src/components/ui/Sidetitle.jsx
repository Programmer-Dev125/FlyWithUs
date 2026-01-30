export default function SideTitle({text}){
    return(
        <div className="flex gap-4 items-center">
            <div className="w-[12px] h-[12px] bg-[var(--focus)] rounded-full"></div>
            <h2 className="text-2xl italic text-[var(--primary)] font-semibold">{text}</h2>
        </div>
    )
}