import { useState } from "react";
import { Card, Table, Modal } from "@ui";
import { FcDepartment } from "react-icons/fc";
import { TextGenerator } from "@custom";

import { PieChart } from '@mui/x-charts/PieChart';

export default function AdminPendingQueries(){
    const flightsHeader = ["Flying From", "Flying To", "Departing On", "Returning On", "Cabin Class", "Adult", "Children", "Infant", "Completed"];
    const hotelsHeader = ["Name", "Email", "Phone", "Destination", "Check-in", "Check-out", "Rooms", "Adult", "Children", "Completed"];
    const [modal, setModal] = useState(false);

    const [completed, setCompleted] = useState([
        {title: "Completed Flights Bookings", total: 20, img: "/images/flight.svg"},
        {title: "Completed Hotels Bookings", total: 15, icon: FcDepartment}
    ]);

    const [pending, setPending] = useState([
        {title: "Pending Flights Bookings", total: 20, img: "/images/pending.svg"},
        {title: "Pending Hotels Bookings", total: 10, img: "/images/pending.svg"},
    ])

    const [pendingFlights, setPendingFlights] = useState([
        {from: "Pakistan", to: "India", departOn: "Jan 20, 2025", returnOn: "Jan 25, 2025", class: "Economy", adult: 20, children: 30, infant: 10, completed: true},
        {from: "Pakistan", to: "India", departOn: "Jan 20, 2025", returnOn: "Jan 25, 2025", class: "Economy", adult: 20, children: 30, infant: 10, completed: false},
        {from: "Pakistan", to: "India", departOn: "Jan 20, 2025", returnOn: "Jan 25, 2025", class: "Economy", adult: 20, children: 30, infant: 10, completed: true},
        {from: "Pakistan", to: "India", departOn: "Jan 20, 2025", returnOn: "Jan 25, 2025", class: "Economy", adult: 20, children: 30, infant: 10, completed: false},
    ]);
    const [pendingHotels, setPendingHotels] = useState([
        {name: "John Doe", email: "johndoe@gmail.com", phone: "0333-5214101", destination: "India", checkIn: "Jan 20, 2025", checkOut: "Jan 25, 2025", rooms: 20, adult: 10, children: 10, completed: true},
        {name: "John Doe", email: "johndoe@gmail.com", phone: "0333-5214101", destination: "India", checkIn: "Jan 20, 2025", checkOut: "Jan 25, 2025", rooms: 20, adult: 10, children: 10, completed: false},
        {name: "John Doe", email: "johndoe@gmail.com", phone: "0333-5214101", destination: "India", checkIn: "Jan 20, 2025", checkOut: "Jan 25, 2025", rooms: 20, adult: 10, children: 10, completed: true},

    ]);

    const [tab, setTab] = useState("flights");

    const onFocus = (e, text) => {
        e.stopPropagation();
        setTab(text);
    }

    const openModal = (e, content) =>{
        e.stopPropagation();
        setModal(true);
    }

    return(
        <section className="flex flex-col gap-20">
            <section className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-10">
                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {completed.map((content) => <Card styles="flex gap-5 cursor-pointer transition-translate duration-200 ease-in-out hover:translate-y-[-20px] py-8">
                            {content?.img ? <img  src={content.img} alt="icon image" width="80" height="80" /> : <content.icon size={80} />}
                            <div>
                                <TextGenerator styles="text-3xl font-semibold text-[var(--primary)]" type="number" lastNumber={content.total} />
                                <p className="text-md text-[var(--primary)] mt-2">{content.title}</p>
                            </div>
                        </Card>)}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {pending.map((content) => <Card styles="flex gap-5 cursor-pointer transition-translate duration-200 ease-in-out hover:translate-y-[-20px] py-8">
                            <img src={content.img} alt="icon image" width="80" height="80" />
                            <div>
                                <TextGenerator styles="text-3xl font-semibold text-[var(--primary)]" type="number" lastNumber={content.total} />
                                <p className="text-md text-[var(--primary)] mt-2">{content.title}</p>
                            </div>
                        </Card>)}
                    </div>
                </div>
                <Card>
                    <h2 className="text-lg font-semibold text-[var(--primary)]">Bookings Section</h2>
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'Hotel Booking' },
                                { id: 2, value: 30, label: 'Flight Booking' },
                            ],
                            },
                        ]}
                        height={250}
                    />
                </Card>
            </section>
            <Card styles="flex flex-col gap-10">
                <div className="flex flex-col sm:flex-row border-2 border-white w-fit">
                    <p onClick={(e) => onFocus(e, "flights")} className={`px-20 py-2 cursor-pointer transition-all duration-100 ${tab === "flights" ? "bg-[var(--focus)] text-white shadow-none" : "bg-white text-[var(--primary)] shadow-lg "}`}>
                        Pending Flights
                    </p>
                    <p onClick={(e) => onFocus(e, "hotels")} className={`px-20 py-2 cursor-pointer transition-all duration-100 ${tab === "hotels" ? "bg-[var(--focus)] shadow-none text-white" : "bg-white text-[var(--primary)] shadow-lg"}`}>
                        Pending Hotels
                    </p>
                </div>
                <Table 
                    contents={tab === "flights" ? pendingFlights: pendingHotels}
                    headers={tab === "flights" ? flightsHeader : hotelsHeader}
                    barStyle={`grid ${tab === "flights" ? "grid-cols-9": "grid-cols-10"} min-w-[1535px]`}
                    customKey={["completed"]} showCustom={[
                        {stop: "completed", comp: <img src="/images/cross.svg" alt="icon" width="30" className="cursor-pointer" />, fn: openModal},
                    ]}
                />
            </Card>
            <Modal
                state={modal}
                closeOnParent={true}
                setState={setModal}
                cardClick={(e) => e.stopPropagation()}
                cardStyle="w-[90%] sm:w-fit"
            >
                <div className="flex flex-col gap-5">
                    <h2 className="text-md text-[var(--primary)]">Are you sure the {tab === "flights" ? "Flight Booking" : "Hotel Booking"} is completed?</h2>
                    <button className="bg-green-500 px-5 py-1 rounded-md shadow-lg transition-transform duration-100 hover:scale-110 cursor-pointer text-white text-md font-semibold w-fit" onClick={(e) =>{
                        e.stopPropagation();
                        setModal(false);
                    }}>Completed</button>
                </div>
            </Modal>
        </section>
    )
}