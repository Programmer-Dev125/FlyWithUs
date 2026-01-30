import { ServiceCard, Title } from "@custom";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

export default function Services(){
    
    const contents = [
        {icon: MdAirplanemodeActive, tab: "flight", btnText: "Book a Flight", 
            arr: ["Fast, simple booking with transparent fares and no surprises.", 
                "Comfortable seating and modern in-flight entertainment for every trip.", 
                "On-time departures and proactive flight status updates.",
                "Friendly cabin crew focused on safety and a pleasant journey.",
                "24/7 customer support to help with changes, upgrades, or special requests."]},
        {icon: FaHotel, tab: "hotel", btnText: "Book a Hotel", 
            arr: ["Seamless check-in and express check-out for a stress-free stay.",
                  "Spotless, well-appointed rooms with premium bedding and high-speed Wi-Fi.", 
                  "Delicious on-site dining and flexible room-service options.", 
                  "Concierge assistance for local experiences, tours, and reservations.",
                  "Secure premises with round-the-clock guest support and safety measures."
                ]},
        {icon: FaCarSide, tab: "car", btnText: "Book a Car", 
            arr: [  "Prompt pick-up and drop-off with professional, licensed drivers.",
                    "Wide vehicle selection — economy, luxury, and family-friendly options.",
                    "Real-time tracking and easy ride details in the app or email.",
                    "Clean, well-maintained cars with transparent, meter-based pricing.",
                    "Flexible booking and cancellation policies for changing itineraries."
                ]}
        ];

    return(
        <div className="w-[90%] mx-auto flex flex-col gap-20 content">
            <Title sub="We Provide our services from" main="United Kingdom" extra="to African Continent" center={true} /> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {contents.map((content, index) => <ServiceCard key={index} icon={<content.icon size={30} color="#ffffff" className="items-start"/>}
                    tab={content.tab} btnText={content.btnText} styles="content"
                >
                    {content.arr.map((text, index) => <li key={index} className="text-md text-[var(--primary)]">{text}</li>)}
                </ServiceCard>)}
            </div>
        </div>
    )
}
