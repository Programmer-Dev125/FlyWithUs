import { useState } from "react";
import { Input, Select, Button } from "@ui";
import { IoLocation } from "react-icons/io5";
import { FaCalendarAlt, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { FaChildren  } from "react-icons/fa6";
import { MdChildFriendly } from "react-icons/md";
import { MdRoomService, MdEmail } from "react-icons/md";

export default function HotelForm(){
    const [infos, setInfos] = useState([
        {id: 1, about: "room", ages: ["1", "2", "3", "3+"], sel: "", label: "Rooms", finalResult: "", icon: MdRoomService },
        {id: 2, about: "adult", ages: ["1", "2", "3", "3+"], sel: "", label: "Adult(17+ yrs)", finalResult: "", icon: IoIosMan},
        {id: 3, about: "child", ages: ["0", "1", "2", "2+"], sel: "", label: "Children (0-17 yrs)", finalResult: "", icon: FaChildren},
    ]);

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
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl text-white font-semibold">Search and Save on Hotels</h2>
            <div className="flex flex-col gap-12">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[6fr_2fr_2fr] gap-10">
                    <Input 
                        label="Destination"
                        labelStyles="text-lg text-white font-semibold"
                        mainParent={true}
                        icon={<IoLocation size={30} color="#ffffff80" />}
                        placeholder="Enter destination, hotel name, airport"
                        type="text"
                        inputStyles="text-white"
                        parentCommon={true}
                    />
                    <Input 
                        label="Check-in"
                        labelStyles="text-lg text-white font-semibold"
                        mainParent={true}
                        icon={<FaCalendarAlt size={30} color="#ffffff80" />}
                        type="date"
                        inputStyles="text-white"
                        parentCommon={true}
                    />
                    <Input 
                        label="Check-out"
                        labelStyles="text-lg text-white font-semibold"
                        mainParent={true}
                        icon={<FaCalendarAlt size={30} color="#ffffff80" />}
                        type="date"
                        inputStyles="text-white"
                        parentCommon={true}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {infos.map((info) => {
                        return info.sel == info.ages[info.ages.length - 1] ? <Select 
                            label={info.label}
                            labelStyles="text-white text-lg font-semibold"
                            icon={<info.icon size={25} color="#ffffff80" />}
                            mainParent={true}
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
            </div>
            <Button otherPad={true}>
                Book Hotel
            </Button>
        </div>
    );
}