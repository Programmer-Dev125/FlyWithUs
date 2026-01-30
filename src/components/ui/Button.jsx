export default function Button({children , onClick, otherPad}){
    return(
         <button onClick={onClick} className={`${otherPad ? "px-6 py-3" : "px-5 py-4"}  w-fit bg-[var(--focus)] shadow-lg rounded-md text-white mt-5 transition-transform duration-300 hover:scale-110 cursor-pointer`}>{children}</button>
    )
}