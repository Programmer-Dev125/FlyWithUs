import {Input} from "@ui";
import { FaUserLarge, FaFacebookF, FaLocationDot } from "react-icons/fa6";
import {  MdEmail } from "react-icons/md";
import {  FaPhoneAlt } from "react-icons/fa";

export default function Contact(){
    const phoneContents = [
        {icon: FaPhoneAlt, text: "+44 07853734440"},
        {icon: MdEmail, text: "Info@travelwithusltd.co.uk"},
        {icon: FaLocationDot, text: "46 Orchard Way, Banbury, Oxfordshire, OX16 0HA"},
    ];

    return(
        <section className="content">
            <div className="flex flex-col gap-20 md:gap-0 md:flex-row justify-between w-[90%] xl:w-[80%] 2xl:w-[60%] mx-auto">
                <div className="relative w-[100%] md:w-[50%]">
                    {["top-[-10px] left-[-10px]", "top-20 right-[-20px]", "bottom-[-20px] left-[-20px]"].map((pos, index) => (
                        <svg
                            key={index}
                            height="100"
                            width="100"
                            className={`absolute ${pos}`}
                        >
                            <circle r="50" cx="50" cy="50" fill="var(--focus)"  />
                        </svg>
                    ))}
                    <div className="backdrop-blur-sm flex flex-col gap-10 h-[100%] bg-white/5 w-[100%] z-10 px-5 py-10 rounded-xl shadow-2xl">
                        <h2 className="text-2xl text-[var(--primary)] font-semibold">Get In Touch With Us</h2>
                        <div className="flex flex-col gap-10">
                            <Input 
                                label="Your Name" 
                                labelStyles="text-lg text-[var(--primary)]" 
                                mainParent="w-[100%] flex flex-col gap-3"
                                icon={<FaUserLarge size={25} color="var(--primary)"  />}
                                placeholder="Enter Name"
                                type="text" 
                                inputStyles="text-md text-[var(--primary)]" 
                                parentStyles="border border-[var(--primary)] px-5 py-3 rounded-lg cursor-pointer"
                            />
                            <Input 
                                label="Your Email" 
                                labelStyles="text-lg text-[var(--primary)]" 
                                mainParent="w-[100%] flex flex-col gap-3"
                                icon={<MdEmail size={25} color="var(--primary)"  />}
                                placeholder="Enter Email"
                                type="email" 
                                inputStyles="text-md text-[var(--primary)]" 
                                parentStyles="border border-[var(--primary)] px-5 py-3 rounded-lg cursor-pointer"
                            />
                            <Input 
                                label="Your Number" 
                                labelStyles="text-lg text-[var(--primary)]" 
                                mainParent="w-[100%] flex flex-col gap-3"
                                icon={<FaPhoneAlt size={25} color="var(--primary)"  />}
                                placeholder="Enter Valid Number"
                                type="text" 
                                inputStyles="text-md text-[var(--primary)]" 
                                parentStyles="border border-[var(--primary)] px-5 py-3 rounded-lg cursor-pointer"
                            />
                            <div className="flex flex-col gap-5">
                                <label className="text-md text-[var(--primary)]">Enter Message</label>
                                <textarea rows="5" className="border border-[var(--primary)] px-5 py-3 rounded-lg cursor-pointer outline-none" placeholder="Type Your Message"></textarea>
                            </div>
                            <div>
                                <button className="w-fit px-6 py-3 text-white text-md bg-[var(--focus)] rounded-md transition-transform duration-500 hover:scale-110 cursor-pointer">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative md:translate-y-[50%] w-[100%] md:w-[40%] lg:w-[30%]">
                     {["top-[-10px] left-[-10px]", "top-[10%] right-[-20px]"].map((pos, index) => (
                        <svg
                            key={index}
                            height="100"
                            width="100"
                            className={`absolute ${pos}`}
                        >
                            <circle r="50" cx="50" cy="50" fill="var(--focus)"  />
                        </svg>
                    ))}
                     <div className="relative w-[100%] h-fit p-4 flex justify-center items-center backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl">
                        <div className="flex flex-col gap-5">
                            {phoneContents.map((content, index) => <div key={index} className="flex flex-row gap-3 w-fit px-3 py-2 bg-[var(--focus)] rounded-br-2xl items-center rounded-tr-2xl">
                                <content.icon size={25} color="#ffffff" className="block"  />
                                <p className="text-md text-white">{content.text}</p>
                            </div>)}
                        </div>
                     </div> 
                </div>
            </div>
        </section>
    )
} 
