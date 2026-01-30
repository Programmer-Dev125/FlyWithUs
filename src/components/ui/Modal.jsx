export default function Modal({children, state, closeOnParent, setState, cardClick, cardStyle}){

    const closeModal = (e) =>{
        if(closeOnParent){
            e.stopPropagation();
            setState(false);
        }
    }


    return(
        <section className={`bg-black/20 fixed top-0 left-0 transition-opacity duration-200 w-screen h-screen ${state ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"} flex justify-center items-center`} onClick={closeModal} style={{zIndex: 9999}}>
            <section className={`bg-white rounded-lg p-3 ${cardStyle || ""} h-auto shadow-lg`} onClick={(e) => cardClick?.(e)}>
                {children}
            </section>
        </section>
    )
}