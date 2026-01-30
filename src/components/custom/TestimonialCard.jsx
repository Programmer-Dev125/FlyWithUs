export default function TestimonialCard({text, name, styles}){
    return(
        <div className={`bg-white flex flex-col gap-5 rounded-lg py-3 px-5 shadow-lg transition-transform duration-300 hover:translate-y-[-20px] ${styles || ""}`}>
           <p className="text-3xl text-[var(--focus)]">""</p>
           <p className="text-md text-[var(--primary)] leading-loose">{text}</p>
           <p>{name}</p>
        </div>
    )
}