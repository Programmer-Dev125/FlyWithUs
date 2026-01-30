import {Input, Select} from "@ui";
import { IoLocation } from "react-icons/io5";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoIosMan , IoMdTime} from "react-icons/io";
import { FaChildren } from "react-icons/fa6";
import { MdChildFriendly, MdEmail } from "react-icons/md";


export default function CarForm(){
    return(
        <div className="flex flex-col gap-8">
            <h2 className="text-2xl text-white font-semibold">Search for Cheap Cars Rental</h2>
            <div className="flex flex-col gap-15">
              <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row justify-between items-center">
                <Input 
                  label="Pick-up Location"
                  labelStyles="text-white text-lg font-semibold"
                  parentCommon={true}
                  mainParent="flex flex-col gap-5 w-[100%] xl:w-[48%]"
                  inputStyles="text-white"
                  icon={<IoLocation size={30} color="#ffffff80" />}
                  type="text"
                  placeholder="Pick-up location"
                />
                <Input 
                  label="Drop-off Location"
                  labelStyles="text-white text-lg font-semibold"
                  parentCommon={true}
                  mainParent="flex flex-col gap-5  w-[100%] xl:w-[48%]"
                  inputStyles="text-white"
                  icon={<IoLocation size={30} color="#ffffff80" />}
                  type="text"
                  placeholder="Pick-up location"
                />
            </div>
            <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row justify-between items-center">
                <Input 
                  label="Pick-up Date"
                  labelStyles="text-white text-lg font-semibold"
                  mainParent="flex flex-col gap-5 w-[100%] xl:w-[23%]"
                  parentCommon={true}
                  icon={<FaCalendarAlt size={30} color="#ffffff80" />}
                  type="date"
                  inputStyles="text-white"
                />
                <Input 
                  label="Pick-up Time"
                  labelStyles="text-white text-lg font-semibold"
                  mainParent="flex flex-col gap-5 w-[100%] xl:w-[23%]"
                  parentCommon={true}
                  icon={<IoMdTime size={30} color="#ffffff80" />}
                  type="time"
                  inputStyles="text-white"
                />
                <Input 
                  label="Drop-off Date"
                  labelStyles="text-white text-lg font-semibold"
                  mainParent="flex flex-col gap-5 w-[100%] xl:w-[23%]"
                  parentCommon={true}
                  icon={<FaCalendarAlt size={30} color="#ffffff80" />}
                  type="date"
                  inputStyles="text-white"
                />
                <Input 
                  label="Drop-off Time"
                  labelStyles="text-white text-lg font-semibold"
                  mainParent="flex flex-col gap-5 w-[100%] xl:w-[23%]"
                  parentCommon={true}
                  icon={<IoMdTime size={30} color="#ffffff80" />}
                  type="time"
                  inputStyles="text-white"
                />
            </div>
            <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row justify-between items-center">
                <Input 
                  label="Customer Name"
                  labelStyles="text-white text-lg font-semibold"
                  mainParent="flex flex-col gap-5 w-[100%] xl:w-[30%]"
                  parentCommon={true}
                  icon={<IoIosMan size={30} color="#ffffff80" />}
                  type="text"
                  placeholder="Enter Name"  
                  inputStyles="text-white"
                />
                <Input 
                  label="Customer Email"
                  labelStyles="text-white text-lg font-semibold"
                  mainParent="flex flex-col gap-5 w-[100%] xl:w-[30%]"
                  parentCommon={true}
                  icon={<MdEmail size={30} color="#ffffff80" />}
                  type="text"
                  placeholder="Enter Email"  
                  inputStyles="text-white"
                />
                <Input 
                  label="Customer Name"
                  labelStyles="text-white text-lg font-semibold"
                  mainParent="flex flex-col gap-5 w-[100%] xl:w-[30%]"
                  parentCommon={true}
                  icon={<FaPhoneAlt size={30} color="#ffffff80" />}
                  type="text"
                  placeholder="Enter Phone"  
                  inputStyles="text-white"
                />
            </div>
            </div>
            <div className="mt-5">
                <button className="w-contain px-6 py-3 text-white text-md bg-[#F1A501] rounded-md transition-transform duration-500 hover:scale-110 cursor-pointer">Search For Cars</button>
            </div>
        </div>
    )
}