import {useState, useEffect, useRef} from "react";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import { FaCarSide } from "react-icons/fa";
import FlightForm from "./flightForm";
import HotelForm from "./hotelform";
import CarForm from "./carform";
import { onTab } from "@store/slices/tabSlice.jsx";
import { useSelector, useDispatch } from "react-redux";

export default function Form(){

    const tab = useSelector((state) => state.tabState);
    const dispatch = useDispatch();
    const [id, setId] = useState(0);
    const timeoutRef = useRef(null);
    const tabTitles = [
        {id: 1, icon: PiAirplaneTiltFill, focus: "flight", text: "Flights"},
        {id: 2, icon: LiaHotelSolid, focus: "hotel", text: "Hotel"},
    ]
    const contents =  [
        {id: 0, img: "/images/form-1.jpg"},
        {id: 1, img: "/images/form-2.jpg"},
        {id: 2, img: "/images/form-3.jpg"},
    ]
        
    useEffect(() =>{
        timeoutRef.current = setTimeout(() =>{
            setId((prev) => prev == (contents.length - 1) ? 0 : prev + 1);
        }, 4000);
        return () => clearTimeout(timeoutRef.current);
    }, [id]);


    return(
        <section className="flex flex-col gap-20 content">
                <section className="relative flex justify-center items-center h-auto">
                   <div className="w-[90%] xl:w-[60%] form-section">
                        <div className="flex flex-row w-[100%]">
                            {tabTitles.map((title) => 
                                <div
                                    key={title.id}
                                    className={`flex flex-row gap-3 items-center cursor-pointer px-5  py-3 ${title.id == 1 ? "rounded-tl-lg" : ""}  ${tab == title.focus ? "bg-[var(--focus)]" : "bg-white"}`} 
                                    onClick={() => dispatch(onTab(title.focus))}
                                    >
                                        <title.icon 
                                            size={20} 
                                            color={`${tab == title.focus ? "#ffffff" : "#000000"}`} 
                                        />
                                        <p 
                                            className={`text-sm sm:text-base ${tab == title.focus ? "text-white" : "text-[var(--primary)]"}`}
                                        >
                                            {title.text}
                                        </p>
                                </div>
                            )}
                        </div>
                        <div className={`backdrop-blur-md bg-white/10 z-10 w-[100%] flex flex-col gap-10 px-4 py-10`}>
                            {tab == "flight" && <FlightForm />}
                            {tab == "hotel" && <HotelForm />}
                        </div>
                   </div>
                </section>
        </section>
    )
}