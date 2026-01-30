import { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import {  MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Footer(){
    const [height, setHeight] = useState(0);
    const navigate = useNavigate();

    function route(path){
        navigate(path);
    }

    useEffect(() => {
          const handleHeight = () =>{
               const elem = document.getElementById("mobile-menu");
               if(elem && window.innerWidth <= 767){
                    const height = elem.clientHeight + 40;
                    setHeight(height);
               }else{
                    setHeight(0);
               }
          }
          handleHeight();
          window.addEventListener("resize", handleHeight);
          return () => window.removeEventListener("resize", handleHeight);
    }, [])

    return(
        <section className="pt-10 pb-3 bg-[#212832] mt-40">
          <div className="w-[90%] mx-auto grid grid-cols-1 gap-10 sm:gap-0 sm:grid-cols-3"> 
               <div className="text-center sm:text-justify">
                    <h2 className="text-xl text-[#F1A501] font-semibold sm:w-fit">Pages</h2>
                    <div className="mt-4">
                         <p className="text-md text-white cursor-pointer transition-colors duration-200 hover:text-[#F1A501] sm:w-fit" onClick={() => route("/")}>Home</p>
                         <p className="text-md text-white mt-2 cursor-pointer transition-colors duration-200 hover:text-[#F1A501] sm:w-fit" onClick={() => route("/about")}>About</p>
                         <p className="text-md text-white mt-2 cursor-pointer transition-colors duration-200 hover:text-[#F1A501] sm:w-fit" onClick={() => route("/policy")}>Policy</p>
                         <p className="text-md text-white mt-2 cursor-pointer transition-colors duration-200 hover:text-[#F1A501] sm:w-fit" onClick={() => route("/flights")}>Flights</p>
                    </div>
               </div>
               <div className="text-center sm:text-justify sm:justify-self-center">
                    <h2 className="text-xl text-[#F1A501] font-semibold sm:w-fit">Contacts</h2>
                    <div className="mt-4">
                         <p className="text-md text-white cursor-pointer transition-colors duration-200 hover:text-[#F1A501] sm:w-fit">+44 07853734440</p>
                         <p className="text-md text-white cursor-pointer mt-2 transition-colors duration-200 hover:text-[#F1A501] sm:w-fit">46 Orchard Way, Banbury, Oxfordshire, OX16 0HA</p>
                         <a href="mailto:Info@travelwithusltd.co.uk" className="text-md text-white cursor-pointer mt-2 transition-colors duration-200 hover:text-[#F1A501] sm:w-fit">Info@travelwithusltd.co.uk</a>
                    </div>
               </div>
               <div className="text-center sm:text-justify sm:justify-self-end sm:text-right">
                    <h2 className="text-xl text-[#F1A501] font-semibold sm:w-fit">Destinations</h2>
                    <div className="mt-4">
                         <p className="text-md text-white cursor-pointer transition-colors duration-200 hover:text-[#F1A501] sm:w-fit">Maldives</p>
                         <p className="text-md text-white cursor-pointer mt-2 transition-colors duration-200 hover:text-[#F1A501] sm:w-fit">Bali</p>
                         <p className="text-md text-white cursor-pointer mt-2 transition-colors duration-200 hover:text-[#F1A501] sm:w-fit">United Kingdom</p>
                    </div>
               </div>
          </div>
          <div className={`w-[90%] sm:w-[50%] mx-auto border-t-1 border-t-[#cccccc] pt-5 mt-15 md:mb-0`} style={{marginBottom: height}}>
               <p className="text-lg text-center text-white font-semibold">Copywrite by http://travelwithusltd.co.uk/</p>
          </div>
        </section>
    )
}