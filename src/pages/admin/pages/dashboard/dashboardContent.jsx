import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcTodoList, FcRatings, FcPortraitMode, FcMoneyTransfer } from "react-icons/fc";
import { TextGenerator, Dropdown } from "@custom";
import { Card, Table } from "@ui";
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';


export default function DashboardContent(){
    const [bookingStatus, setBookingStatus] = useState("Per Month");

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const upperCardRow = [
        {id: 1, icon: FcTodoList, last: 30, title: "Bookings"},
        {id: 2, icon: FcRatings, last: 20, title: "Visitors"},
        {id: 3, icon: FcPortraitMode, last: 10, title: "Users"},
        {id: 4, icon: FcMoneyTransfer, last: 50, title: "Revenue"},
    ];

    const recentVisitors = [
        {from: "Pakistan", date: "October 20, 1999", timeSpent: "20 seconds" },
        {from: "India", date: "October 20, 1999", timeSpent: "20 minutes"},
        {from: "England", date: "October 20, 1999", timeSpent: "35 minutes"},
    ]

    const recentBookings = [
        {from: "Pakistan", fromDate: "Jan 20, 2025", to: "India", toDate: "Feb 20, 2025"},
        {from: "Pakistan", fromDate: "Jan 20, 2025", to: "India", toDate: "Feb 20, 2025"},
        {from: "Pakistan", fromDate: "Jan 20, 2025", to: "India", toDate: "Feb 20, 2025"},
    ];

    const recentMessages = [
        {from: "Pakistan", name: "Abdul Ahad", email: "ahad@gmail.com", number: "0333-1922829"},
        {from: "India", name: "John Doe", email: "john@gmail.com", number: "0333-19237373"},
        {from: "England", name: "John Pork", email: "pork@gmail.com", number: "0333-192373119"},
    ]

    return(
        <section className="flex flex-col gap-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {upperCardRow.map((content) => <Card key={content.id} styles="transition-translate duration-300 hover:translate-y-5 cursor-pointer">
                    <div className="flex gap-10">
                        <content.icon size={40} />
                        <div>
                            <TextGenerator styles="text-3xl font-semibold text-[var(--primary)]" type="number" lastNumber={content.last} />
                            <p className="text-md text-[var(--primary)] mt-2">{content.title}</p>
                        </div>
                    </div>
                </Card>)}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[7fr_3fr] gap-5">
                <Card styles="flex flex-col gap-5">
                    <div className="grid grid-cols-2">
                        <h2 className="text-lg font-semibold text-[var(--primary)]">Bookings {bookingStatus}</h2>
                        <Dropdown 
                            trigger={<div className="flex flex-row gap-2 items-center justify-self-end cursor-pointer">
                                <p className="text-[var(--primary)] text-md">{bookingStatus}</p>
                                <IoMdArrowDropdown size={30} color="var(--secondary)" />
                            </div>}
                            content={<div className="flex flex-col gap-2 cursor-pointer">
                                {["Per Week", "Per Month", "Per Year"].map((per) => <p onClick={() => setBookingStatus(per)}>{per}</p>)}
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
                <Card styles="flex flex-col gap-5">
                    <h2 className="text-lg font-semibold text-[var(--primary)]">Popular Destinations</h2>
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'Apples' },
                                { id: 1, value: 20, label: 'Bananas' },
                                { id: 2, value: 30, label: 'Cherries' },
                            ],
                            },
                        ]}
                        height={300}
                    />
                </Card>
            </div>
            <Card>
                <h2 className="text-xl text-[var(--primary)] font-semibold">Recent Visitors</h2>
                <Table  contents={recentVisitors} headers={["From", "Date", "Time Spent"]} barStyle={"grid grid-cols-3 min-w-[639px]"}   />
            </Card>
            <Card>
                <h2 className="text-xl text-[var(--primary)] font-semibold">Recent Bookings</h2>
                <Table  contents={recentBookings} headers={["From", "Start", "To", "End Date"]} barStyle={"grid grid-cols-4 min-w-[639px]"}  />
            </Card>
            <Card>
                <h2 className="text-xl text-[var(--primary)] font-semibold">Recent Messages</h2>
                <Table contents={recentMessages} headers={["Country", "Name", "Email", "Number"]} barStyle={"grid grid-cols-4 min-w-[639px]"} 
                  />
            </Card>
        </section>
    )
}
