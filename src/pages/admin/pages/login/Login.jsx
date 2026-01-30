import { useEffect, useState, useRef } from "react"; 
import LeftSide from "./leftSide";
import { Input, Button } from "@ui";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";


export default function Login(){

    const [height, setHeight] = useState(window.innerHeight);
    const [inputType, setInputType] = useState(true);
    const [submitted, setSubmitted ] = useState(false);
    
    
    useEffect(() =>{
                
        const updatedHeight = () => setHeight(`${window.innerHeight}px`);
        updatedHeight();

        window.addEventListener("resize", updatedHeight);
        window.addEventListener("orientationchange", updatedHeight);

        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "scroll";
            window.removeEventListener("resize", updatedHeight);
            window.removeEventListener("orientationchange", updatedHeight);
        }
    }, []);


    function onSubmit(e){
        e.preventDefault();
        setSubmitted(prev => !prev);
    }

    return(
        <section className="grid grid-cols-[1fr] lg:grid-cols-[7fr_3fr] " style={{height: height}}>
            <section className="hidden lg:grid justify-self-center relative self-center border-b-2 border-b-[var(--secondary)] pr-10 pl-10"> 
                <LeftSide />
            </section>
            <section className="bg-gradient-to-b from-[var(--primary)] to-black">
                <section className="flex justify-center items-center h-[100%]">
                    <section className="backdrop-blur-lg rounded-lg bg-white/5 px-10 py-5 w-[90%]">
                        <form className="flex flex-col gap-10" onSubmit={onSubmit}>
                            <h2 className="text-white font-semibold text-xl">Hello Admin!</h2>
                            {submitted ? <>
                                <h2 className="text-[var(--focus)] text-lg">Code is sent to your email!</h2>
                                <Input
                                    label="Enter Six digit code"
                                    labelStyles="text-md text-white font-semibold"
                                    placeholder="Enter Six digit code"
                                    rightIcon={<RiLockPasswordFill size={25} color="white" />}
                                    type="password"
                                    mainParent="flex flex-col gap-3 flex justify-end"
                                    inputStyles="text-white w-[90%]"
                                    parentStyles="border-2 border-[var(--secondary)] rounded-lg pl-4 focus-within:border-[var(--focus)] py-3 pr-4"
                                 />
                            </> :<>
                             <Input 
                                label="Email"
                                labelStyles="text-md text-white font-semibold"
                                placeholder="Enter Admin Email"
                                rightIcon={<MdEmail size={25} color="white" onClick={() => console.log("clicked")} />}
                                type="email"
                                mainParent="flex flex-col gap-3 flex justify-end"
                                inputStyles="text-white w-[90%]"
                                parentStyles="border-2 border-[var(--secondary)] rounded-lg pl-4 focus-within:border-[var(--focus)] py-3 pr-4"
                            />
                            <Input 
                                label="Password"
                                labelStyles="text-md text-white font-semibold"
                                placeholder="Enter Admin Password"
                                rightIcon={inputType ? <IoEyeOff size={25} color="white" onClick={() => setInputType(false)} /> :  <FaEye size={25} color="white" onClick={() => setInputType(true)}  />   }
                                type={inputType ? "password" : "text"}
                                mainParent="flex flex-col gap-3 flex justify-end"
                                inputStyles="text-white w-[90%]"
                                parentStyles="border-2 border-[var(--secondary)] rounded-lg pl-4 focus-within:border-[var(--focus)] py-3 pr-4"
                            />
                            </>}
                            <Button otherPad={true}>
                                Go to Panel
                            </Button>
                        </form>
                    </section>
                </section>
            </section>
        </section>
    )
}