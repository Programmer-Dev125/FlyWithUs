import { useState, useRef } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Card, Table } from "@ui";
import { Dropdown } from "@custom";
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';


export default function AdminVisitors(){

    const [visitorText, setVisitorText] = useState("Per Day");

    const allVisitors = [
        {country: "India", date: "Jan 20, 2025", time: "20 seconds"},
        {country: "Pakistan", date: "Jan 25, 2025", time: "20 minutes"},
        {country: "England", date: "Jan 13, 2025", time: "30 seconds"},
        {country: "Africa", date: "Jan 12, 2025", time: "1 Hour"}
    ]

    return (
       <section className="flex flex-col gap-20">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[7fr_3fr] gap-5">
                <Card styles="flex flex-col gap-10">
                    <div className="grid grid-cols-2">
                        <h2 className="text-lg font-semibold text-[var(--primary)]">Visitors {visitorText}</h2>
                        <Dropdown 
                            trigger={<div className="flex flex-row gap-5 items-center justify-self-end cursor-pointer">
                                <p className="text-md text-[var(--primary)]">{visitorText}</p>
                                <IoMdArrowDropdown size={30} color="var(--secondary)" />
                            </div>} 
                            content={<div className="flex flex-col gap-3 cursor-pointer">
                                {["Per Day", "Per Week", "Per Month", "Per Year"].map((per) => <p onClick={() => setVisitorText(per)} className="text-md text-[var(--primary)]">{per}</p>)}
                            </div>} 
                            closeOnClick={true} 
                            styles="right-0 px-6 py-3 w-fit rounded-md"
                        />
                    </div>
                    <LineChart 
                        series={[
                        { data: [2, 5, 3, 7, 4] },
                        ]}
                        height={300}
                    />
                </Card>
                <Card styles="flex flex-col gap-5">
                    <h2 className="text-lg font-semibold text-[var(--primary)]">Vistors From</h2>
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'Europe' },
                                { id: 1, value: 20, label: 'North America' },
                                { id: 2, value: 30, label: 'South America' },
                            ],
                            },
                        ]}
                        height={300}
                    />
                </Card>
            </section>
            <Card>
                <h2 className="text-lg font-semibold text-[var(--primary)]">All Visitors</h2>
                <Table headers={["Country", "Date", "Time Spent"]} contents={allVisitors} barStyle={"grid grid-cols-3 min-w-[639px]"} />
            </Card>
       </section> 
    )
}