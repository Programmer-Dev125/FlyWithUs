import { useState } from "react";
import {Input, Select, Button} from "@ui";
import { IoLocation } from "react-icons/io5";
import { FaCalendarAlt, FaUser, FaPhoneAlt } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { FaChildren } from "react-icons/fa6";
import { MdChildFriendly, MdEmail } from "react-icons/md";

export default function FlightForm(){

    const [trip, setTrip] = useState("round");
    const [infos, setInfos] = useState([
        {id: 1, about: "adult", ages: ["0", "1", "2", "3", "3+"], sel: "", label: "Adult(12+ years)", finalResult: "", icon: IoIosMan },
        {id: 2, about: "child", ages: ["0", "1", "2", "2+"], sel: "", label: "Children (2-12 yrs)", finalResult: "", icon: FaChildren},
        {id: 3, about: "infant", ages: ["0", "1", "2", "2+"], sel: "", label: "Infants (0-2 yrs)", finalResult: "", icon: MdChildFriendly},
    ])

    const onSelect = (about, age) =>{
        const data = infos.map((info, index) => {
            if(info.about == about){
               info.sel = age;
               return info;
            }else{
                return info;
            }
        })
        setInfos(data);
    }

    return(
        <div className="flex flex-col gap-5">
            <h2 className="text-2xl text-white font-semibold">Search for Cheap Flights</h2>
            <div className="flex flex-row gap-3">
                <p className={`text-md px-3 py-2 cursor-pointer rounded-lg ${trip == "round" ? "text-white bg-[var(--focus)]" : "bg-white text-[var(--primary)]" }`} onClick={() => setTrip("round")}>Round Trip</p>
                <p className={`text-md px-3 py-2 cursor-pointer rounded-lg ${trip == "one way" ? "text-white bg-[var(--focus)]" : "bg-white text-[var(--primary)]" }`} onClick={() => setTrip("one way")}>One Way</p>
            </div>
            <div className="flex flex-col gap-12 mt-10">
                {/* <div className="grid grid-cols-3 gap-10">
                    <Input 
                        label="Name"
                        labelStyles="text-white text-lg font-semibold"
                        icon={<FaUser size={25} color="#ffffff80" />}
                        mainParent={true}
                        parentCommon={true}
                        type="text"
                        placeholder="Enter Your Name"
                        inputStyles="text-white"
                    />
                    <Input 
                        label="Email"
                        labelStyles="text-white text-lg font-semibold"
                        icon={<MdEmail size={25} color="#ffffff80" />}
                        mainParent={true}
                        parentCommon={true}
                        type="text"
                        placeholder="Enter Your Email"
                        inputStyles="text-white"
                    />
                    <Input 
                        label="Number"
                        labelStyles="text-white text-lg font-semibold"
                        icon={<FaPhoneAlt size={25} color="#ffffff80" />}
                        mainParent={true}
                        parentCommon={true}
                        type="text"
                        placeholder="Enter Your Phone Number"
                        inputStyles="text-white"
                    />
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <Input 
                        label="Flying From"
                        labelStyles="text-white text-lg font-semibold"
                        icon={<IoLocation  size={25} color="#ffffff80" />}
                        parentCommon={true}
                        type="text"
                        placeholder="Enter departure City"
                        inputStyles="text-white"  />
                    <Input 
                        label="Flying To"
                        labelStyles="text-white text-lg font-semibold"
                        icon={<IoLocation  size={25} color="#ffffff80" />}
                        parentCommon={true}
                        type="text"
                        placeholder="Enter Destination City"
                        inputStyles="text-white"
                    />
                </div>
                <div className={`grid ${trip === "round" ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-2"} gap-10`}>
                    <Input 
                        label="Departing On"
                        labelStyles="text-white text-lg font-semibold"
                        icon={<FaCalendarAlt  size={25} color="#ffffff80" />} 
                        parentCommon={true}
                        type="date" placeholder="Select Departure Date"
                        inputStyles="text-white"
                    />
                    {trip == "round" && <Input 
                        label="Returning On"
                        labelStyles="text-white text-lg font-semibold"
                        icon={<FaCalendarAlt  size={25} color="#ffffff80" />}
                        parentCommon={true}
                        type="date"
                        placeholder="Select Departure Date"
                        inputStyles="text-white"  />
                    }
                    <Select 
                        label="Cabin Class"
                        labelStyles="text-white text-lg font-semibold"
                        icon={<GiCommercialAirplane size={25} color="#ffffff80" />}
                        parentCommon={true}
                        options={["Economy Class", "Economy Premium", "Business Class", "First Class"]}
                        optionStyle="text-[var(--primary)]"
                        selectStyle="text-white"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {infos.map((info) => {
                        return info.sel == info.ages[info.ages.length - 1] ? <Select 
                            label={info.label}
                            labelStyles="text-white text-lg font-semibold"
                            icon={<info.icon size={25} color="#ffffff80" />}
                            parentCommon={true}
                            options={Array.from({length: 9})}
                            optionStyle="text-[var(--primary)]"
                            selectStyle="text-white"
                        /> : <div className="flex flex-col gap-5">
                                <label className="text-white text-lg font-semibold">{info.label}</label>
                                <div className="flex gap-5">
                                    {info.ages.map((age, i) => <div  key={i} className={`w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer ${info.sel == age ? "bg-[var(--focus)] text-white" : "bg-white text-[var(--primary)] hover:bg-[var(--focus)] hover:text-white"}`}
                                    onClick={() => onSelect(info.about, age)}
                                >
                                    <p className="text-md">{age}</p>
                                </div>)}
                                </div>
                            </div>
                        
                    })}
                </div>
                <Button otherPad={true}>
                    Book Flights
                </Button>
            </div>
        </div>
    );
}