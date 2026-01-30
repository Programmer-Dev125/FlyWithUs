import { useState } from "react";
import { Title } from "@custom";
import { Input, Select, Button } from "@ui";
import { IoLocation } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { FaChildren } from "react-icons/fa6";
import { MdChildFriendly } from "react-icons/md";



export default function Flight(){

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
       <section className="flex flex-col gap-10 animated-content">
          <Title sub="Search Book" main="Cheap Flights" extra="Around the World" center={true} />
          <section className="backdrop-blur-md bg-white/20 shadow-xl rounded-lg px-5 py-5 w-[90%] xl:w-[60%] mx-auto flex flex-col gap-10">
             <section className="flex gap-3">
                <p onClick={() => setTrip("round")} className={`${trip == "round" ? "bg-[var(--focus)] text-white": "bg-white text-[var(--primary)]"} shadow-lg text-md px-6 cursor-pointer py-2 rounded-md`}>Round</p>
                <p onClick={() => setTrip("one")} className={`${trip == "one" ? "bg-[var(--focus)] text-white": "bg-white text-[var(--primary)]"} shadow-lg text-md px-6 cursor-pointer py-2 rounded-md`}>One Trip</p>
             </section>
             <section className="flex flex-col gap-15">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <Input 
                        label="Flying From"
                        labelStyles="text-md font-semibold text-[var(--primary)]"
                        icon={<IoLocation size={30} color="var(--primary)" />}
                        placeholder="Enter Departure City"
                        type="text"
                        mainParent="flex flex-col gap-3"
                        inputStyles="text-[var(--primary)]"
                        flightCommon={true}
                        />
                    <Input 
                        label="Flying To"
                        labelStyles="text-md font-semibold text-[var(--primary)]"
                        icon={<IoLocation size={30} color="var(--primary)" />}
                        placeholder="Enter Destination City"
                        type="text"
                        mainParent="flex flex-col gap-3 flex justify-end"
                        inputStyles="text-[var(--primary)]"
                        flightCommon={true}
                        />
                 </div>
                 <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${trip == "round" ? 3 : 2} gap-10`}> 
                     <Input 
                        label="Departing On"
                        labelStyles="text-md font-semibold text-[var(--primary)]"
                        icon={<FaCalendarDays size={30} color="var(--primary)" />}
                        placeholder="Enter Destination City"
                        type="date"
                        mainParent="flex flex-col gap-3"
                        inputStyles="text-[var(--primary)]"
                        flightCommon={true}
                        />
                    {trip == "round" && 
                      <Input 

                        label="Returning On"
                        labelStyles="text-md font-semibold text-[var(--primary)]"
                        icon={<FaCalendarDays size={30} color="var(--primary)" />}
                        placeholder="Enter Destination City"
                        type="date"
                        mainParent="flex flex-col gap-3 flex justify-end"
                        inputStyles="text-[var(--primary)]"
                        flightCommon={true}

                     /> 
                    }
                    <Select 
                        label="Cabin Class"
                        labelStyles="text-md font-semibold text-[var(--primary)]"
                        mainParent={`${trip == "round" ? "col-span-full" : "col-span-1"} lg:col-span-1 flex flex-col gap-3`}
                        icon={<FaCalendarDays size={30} color="var(--primary)" />}
                        options={["Economy", "Economy Premium", "Business Class", "First Class"]}
                        flightCommon={true}
                        optionStyle="text-[var(--primary)] text-md"
                        selectStyle="text-[var(--primary)]"
                    /> 
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {infos.map((info) => {
                        return info.sel == info.ages[info.ages.length - 1] ? <Select 
                            label={info.label}
                            labelStyles="text-[var(--primary)] text-md font-semibold"
                            icon={<info.icon size={30} color="var(--primary)" />}
                            mainParent="flex flex-col gap-5"
                            options={Array.from({length: 9})}
                            optionStyle="text-[var(--primary)]"
                            selectStyle="text-[var(--primary)]]"
                            flightCommon={true}
                        /> : <div className="flex flex-col gap-5" key={info.id}>
                                <label className="text-[var(--primary)] text-md">{info.label}</label>
                                <div className="flex flex-row gap-10 md:gap-5">
                                    {info.ages.map((age, i) => <div  key={i} className={`w-[30px] h-[30px] rounded-full flex shadow-xl justify-center items-center cursor-pointer ${info.sel == age ? "bg-[var(--focus)] text-white" : "bg-white text-black hover:bg-[var(--focus)] hover:text-white"}`}
                                    onClick={() => onSelect(info.about, age)}
                                    >
                                        <p className="text-md">{age}</p>
                                    </div>)}
                                </div>
                            </div>
                    })}
                 </div>
                 <div>
                    <Button>
                        Book a Flight
                    </Button>
                 </div>
             </section>
          </section>
       </section>
    );
}