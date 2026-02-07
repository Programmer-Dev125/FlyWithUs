import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import { Card, Table } from "@ui";
import { Dropdown } from "@custom";
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';


export default function AdminHotels(){

    const [hotelText, setHotelText] = useState("Per Day");

    const [allHotels, setAllHotels] = useState([
        {name: "John Doe", email: "johndoe@gmail.com", phone: "0333-5214101", destination: "India", checkIn: "Jan 20, 2025", checkOut: "Jan 25, 2025", rooms: 20, adult: 10, children: 10, completed: true},
        {name: "John Doe", email: "johndoe@gmail.com", phone: "0333-5214101", destination: "India", checkIn: "Jan 20, 2025", checkOut: "Jan 25, 2025", rooms: 20, adult: 10, children: 10, completed: false},
        {name: "John Doe", email: "johndoe@gmail.com", phone: "0333-5214101", destination: "India", checkIn: "Jan 20, 2025", checkOut: "Jan 25, 2025", rooms: 20, adult: 10, children: 10, completed: true},
    ])

    return(
        <section className="flex flex-col gap-15">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[7fr_3fr] gap-5">
                <Card styles="flex flex-col gap-10">
                    <div className="grid grid-cols-2">
                        <h2 className="text-lg text-[var(--primary)] font-semibold">Hotels {hotelText}</h2>
                        <Dropdown 
                            trigger={<div className="flex flex-row gap-2 items-center justify-self-end cursor-pointer">
                                <p className="text-[var(--primary)] text-md">{hotelText}</p>
                                <IoMdArrowDropdown size={30} color="var(--secondary)" />
                            </div>}
                            content={<div className="flex flex-col gap-2 cursor-pointer">
                                {["Per Day", "Per Week", "Per Month", "Per Year"].map((per) => <p onClick={() => setHotelText(per)}>{per}</p>)}
                            </div>}
                            styles="right-0 px-6 py-3  rounded-md w-fit"
                            closeOnClick={true}
                        />
                    </div>
                    <LineChart
                        series={[
                        { data: [2, 5, 3, 7, 4] },
                        ]}
                        height={300}
                    />
                </Card>
                <Card>
                    <h2 className="text-lg font-semibold text-[var(--primary)]">Popular Destinations</h2>
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'England' },
                                { id: 1, value: 20, label: 'Monaco' },
                                { id: 2, value: 30, label: 'Dubai' },
                            ],
                            },
                        ]}
                        height={300}
                    />
                </Card>
            </section>
            <Card className="flex flex-col gap-5">
                <h2 className="text-lg text-[var(--primary)] font-semibold">All Hotels Bookings</h2>
                <Table
                    contents={allHotels}
                    headers={["Name", "Email", "Phone", "Destination", "Check-in", "Check-out", "Rooms", "Adult", "Children", "Completed"]}
                    barStyle="grid grid-cols-10 min-w-[1535px]"
                    customKey={["completed"]} showCustom={[{stop: "completed", comp: <FcCheckmark size={30} />, fn: (e, content) => {}}]}
                />
            </Card>
            
        </section>
    )
}

