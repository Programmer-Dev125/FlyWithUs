import { useEffect, useState, useRef } from "react";

export default function LeftSide(){

    const [position, setPosition] = useState({first: 0, second: 0, third: 0});
    
    const firstEye = {first: useRef(null), second: useRef(null)};
    const secondEye = {first: useRef(null), second: useRef(null)};
    const thirdEye = {first: useRef(null), second: useRef(null)};

    useEffect(() =>{

        const mouseMove = (e) =>{
            const pupils = [
            firstEye.first.current,
            firstEye.second.current,
            secondEye.first.current,
            secondEye.second.current,
            thirdEye.first.current,
            thirdEye.second.current,
        ];

        pupils.forEach((pupil) => {
            if (!pupil) return;

                const eyeContainer = pupil.parentElement;
                if (!eyeContainer) return;

                const eyeRect = eyeContainer.getBoundingClientRect();
                const pupilRect = pupil.getBoundingClientRect();

                const cx = eyeRect.left + eyeRect.width / 2;
                const cy = eyeRect.top + eyeRect.height / 2;

                const dx = e.clientX - cx;
                const dy = e.clientY - cy;

                const angle = Math.atan2(dy, dx);

                const eyeRadius = Math.min(eyeRect.width, eyeRect.height) / 2;
                const pupilRadius = Math.min(pupilRect.width, pupilRect.height) / 2;
                const maxDistance = Math.max(0, eyeRadius - pupilRadius);

                // move only 60% distance
                const distance = 0.6 * maxDistance;

                const x = Math.cos(angle) * distance; // cos - How wide the angle 
                const y = Math.sin(angle) * distance; // sin - How tall the angle

                pupil.style.transform = `translate(${x}px, ${y}px)`;
            });
        };

        window.addEventListener("mousemove", mouseMove);
        return () => window.removeEventListener("mousemove", mouseMove);
    }, []);

    return(
        <section className="flex flex-row">
            <div className="lg:w-[200px] xl:w-[300px] bg-[var(--focus)] relative h-[250px] rounded-t-[100px] flex items-center justify-center self-end">
                <div className="flex flex-row gap-10 absolute top-5">
                    <div className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                        <div className="bg-gradient-to-r w-[25px] h-[25px] rounded-full 
                            from-[var(--primary)] to-[var(--secondary)]" ref={firstEye.first}></div>
                    </div>
                    <div className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                        <div className="bg-gradient-to-r w-[25px] h-[25px] rounded-full
                            from-[var(--primary)] to-[var(--secondary)]" ref={firstEye.second}></div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[200px] xl:w-[300px] bg-[var(--primary)] relative h-[300px] rounded-t-[100px] flex items-center justify-center self-end">
                    <div className="flex flex-row gap-10 absolute top-10">
                    <div className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                        <div className="bg-gradient-to-r w-[25px] h-[25px] rounded-full
                            from-[var(--primary)] to-[var(--secondary)]" ref={secondEye.first}></div>
                    </div>
                    <div className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                        <div className="bg-gradient-to-r w-[25px] h-[25px] rounded-full
                            from-[var(--primary)] to-[var(--secondary)]" ref={secondEye.second}></div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[200px] xl:w-[300px] bg-[var(--secondary)] relative h-[250px] rounded-t-[100px] flex items-center justify-center self-end">
                <div className="flex flex-row gap-10 absolute top-10">
                    <div className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                        <div className="bg-gradient-to-r w-[25px] h-[25px] rounded-full
                            from-[var(--primary)] to-[var(--secondary)]" ref={thirdEye.first}></div>
                    </div>
                    <div className="bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center">
                        <div className="bg-gradient-to-r w-[25px] h-[25px] rounded-full
                            from-[var(--primary)] to-[var(--secondary)]" ref={thirdEye.second}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}