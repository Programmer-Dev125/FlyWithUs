export default function Card({styles, children}){
    return(
        <div className={`bg-white border border-[#E5E7EB] rounded-lg py-5 px-4 ${styles || "" }`}> 
            {children}
        </div>
    )
}