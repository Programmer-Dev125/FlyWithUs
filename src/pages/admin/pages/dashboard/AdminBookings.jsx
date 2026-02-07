import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

import { Card, Table } from "@ui";
import { Dropdown } from "@custom";

export default function AdminBookings(){
    const [bookingText, setBookingText] = useState("Per Day");
    const [allBookings, setAllBookings] = useState([
        {from: "Pakistan", to: "India", departureDate: "Jan 20, 2025", returningDate: "Jan 25, 2025", cabin: "Business", adult: "10", children: "5", infant: "2", completed: false },
        {from: "Pakistan", to: "India", departureDate: "Jan 20, 2025", returningDate: "Jan 25, 2025", cabin: "Business", adult: "10", children: "5", infant: "2", completed: true },
        {from: "Pakistan", to: "India", departureDate: "Jan 20, 2025", returningDate: "Jan 25, 2025", cabin: "Business", adult: "10", children: "5", infant: "2", completed: false },
        {from: "Pakistan", to: "India", departureDate: "Jan 20, 2025", returningDate: "Jan 25, 2025", cabin: "Business", adult: "10", children: "5", infant: "2" , completed: true},
    ])
    return (
       <section className="flex flex-col gap-20">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[7fr_3fr] gap-5">
                <Card styles="flex flex-col gap-10">
                    <div className="grid grid-cols-2">
                        <h2 className="text-lg text-[var(--primary)] font-semibold">Bookings {bookingText}</h2>
                        <Dropdown 
                            trigger={<div className="flex flex-row gap-2 items-center justify-self-end cursor-pointer">
                                <p className="text-[var(--primary)] text-md">{bookingText}</p>
                                <IoMdArrowDropdown size={30} color="var(--secondary)" />
                            </div>}
                            content={<div className="flex flex-col gap-2 cursor-pointer">
                                {["Per Day", "Per Week", "Per Month", "Per Year"].map((per) => <p onClick={() => setBookingText(per)}>{per}</p>)}
                            </div>}
                            styles="right-0 px-6 py-3 rounded-md w-fit"
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
            <Card>
                <h2 className="text-lg text-[var(--primary)] font-semibold">All Bookings</h2>
                <Table contents={allBookings} headers={["Flying From", "Flying To", "Departing On", "Returning On", "Cabin Class", "Adult", "Children", "Infant", "Completed"]} barStyle={"grid grid-cols-9 min-w-[1279px]"} customKey={["completed"]} showCustom={[
                    {stop: "completed", comp: <FcCheckmark size={30} />, fn: (e, content) => {}}
                ]}
                />
            </Card>
       </section>
    );
}