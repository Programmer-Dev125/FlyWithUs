import {useState, useRef, useEffect} from "react";
import {Title} from "@custom";

export default function Destination(){
    const [step, setStep] = useState(1);
    const contents = [
        { id: 1, title: "Choose Your Dream Destination", image: "/images/dest-1.svg"},
        {id: 2, title: "Contact Us or Submit a Form", image: "/images/dest-2.svg"},
        {id: 3, title: "Enjoy Your Travel", image: "/images/dest-3.svg"}
    ];
        
    const rightRef = useRef(null);

    useEffect(() =>{
        const allSections = rightRef.current.querySelectorAll(".content-section");
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setStep(Number(entry.target.dataset.step));
            }
            });
        },
        {
            threshold: 0.1,        // triggers earlier
            rootMargin: "-40% 0px -40% 0px", // center the trigger zone 
        }
        );

        allSections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, [])

    return(
        <section className="w-[90%] mx-auto flex flex-col gap-30 content"> 
            <Title sub="Reach Your" main="Dream" extra="Destination" center={true} />
            <section className="flex flex-col md:flex-row justify-between align-start">
                <section className="w-[100%] justify-between md:justify-normal md:w-[30%] flex flex-row flex-wrap md:flex-col gap-2 sticky left-0 top-10 self-start">
                    {Array.from({length: contents.length}).map((_, i) => {
                        return <div className="flex flex-row gap-5" key={i + 1}>
                                <div className="flex flex-col gap-2 items-center">
                                    <p className={`w-[40px] h-[40px] border flex justify-center items-center rounded-full 
                                    ${step == (i + 1) ? "bg-[var(--focus)] text-white border-2-white" : "text-[var(--primary)] border-2-[var(--secondary)]"}`}>{i + 1}</p>
                                   {(i + 1) != contents.length &&  <div className="w-[2px] h-[100px] bg-[var(--secondary)] hidden md:block"></div>}
                                </div>
                                <p className="mt-2 text-md text-[var(--primary)]">{contents[i].title}</p>
                               </div>
                    })}
                </section>
                <section ref={rightRef} 
                 className="flex flex-col w-[68%] gap-20 justify-center items-center"
                >  
                {contents.map((content) => 
                <div
                    key={content.id}
                    data-step={content.id}
                    className="content-section flex flex-col justify-center"
                    >
                    <img src={content.image} alt={content.title} className="h-auto" />
                </div>)}
                </section>
            </section>
        </section>
    )
}