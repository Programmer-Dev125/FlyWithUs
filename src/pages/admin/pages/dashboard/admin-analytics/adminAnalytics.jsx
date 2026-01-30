import { useState } from "react";
import { TextGenerator } from "@custom";
import { Card, SideTitle } from "@ui";
import { FcPortraitMode } from "react-icons/fc";
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { FcDepartment, FcFeedback } from "react-icons/fc";

export default function AdminAnalytics(){
    const [contents, setContents] = useState([
        {sectionTitle: "Users Visited",
            cards: [
                {icon: FcPortraitMode, cardTitle: "Total Number of Users visited your website", type: "number", last: 20},
                {img: "/images/globe.svg", cardTitle: "Most Popular Country", type: "text", last: "England"},
            ], 
            chartData: [{data: [{id: 0, value: 10, label: "Europe"}, {id: 1, value: 20, label: "America"}, {id: 2, value: 40, label: "South America"}]}]},
        
        {sectionTitle: "Flight Bookings", 
            cards: [
                {img: "/images/flight.svg", cardTitle: "Total Number of Flight Bookings", type: "number", last: 20},
                {img: "/images/globe.svg", cardTitle: "Most Popular Destination", type: "text", last: "England"},
            ], 
            chartData: [{data: [{id: 0, value: 10, label: "Europe"}, {id: 1, value: 20, label: "America"}, {id: 2, value: 40, label: "South America"}]}]},
        {sectionTitle: "Hotel Bookings", 
            cards: [
                {icon: FcDepartment, cardTitle: "Total Number of Hotel Bookings", type: "number", last: 30},
                {img: "/images/globe.svg", cardTitle: "Most Popular Hotel", type: "text", last: "Hotel Malbury"},
            ], chartData: [{data: [{id: 0, value: 10, label: "Europe"}, {id: 1, value: 20, label: "America"}, {id: 2, value: 40, label: "South America"}]}]},
        {sectionTitle: "Messages", 
        cards: [
            {icon: FcFeedback, cardTitle: "Total Number of Messages Received", type: "number", last: 30},
            {img: "/images/globe.svg", cardTitle: "Most Messages Received From which country", type: "text", last: "Latvia"},
        ], chartData: [{data: [{id: 0, value: 10, label: "Europe"}, {id: 1, value: 20, label: "America"}, {id: 2, value: 40, label: "South America"}]}]},
    ]);
    return(
        <section className="flex flex-col gap-20">
            {contents.map((content, index) => {
                index += 1;
                return <section className="flex flex-col gap-8">
                        <SideTitle text={content.sectionTitle} />
                        <section className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className={`flex flex-col gap-10 ${index % 2 === 0 ? "order-last" : "order-first"}`}>
                                {content.cards.map((card) => 
                                    <Card styles="flex gap-10 transition-translate duration-150 hover:translate-y-[-15px]">
                                        {card?.icon ? <card.icon size={50} /> : <img src={card.img} alt="icon image" width="50" height="50" />}
                                        <div>
                                            {
                                                card.type == "number" ? <TextGenerator styles="text-3xl font-semibold text-[var(--primary)]" type="number" lastNumber={card.last} /> : 
                                                <TextGenerator styles="text-3xl font-semibold text-[var(--primary)]" type="text" finalString={card.last} />
                                            }
                                            <p className="text-md text-[var(--primary)] mt-2">{card.cardTitle}</p>
                                        </div>
                                    </Card>)}
                            </div>
                            <Card className={`flex flex-col gap-5`}>
                                <PieChart
                                    series={content.chartData}
                                    height={200}
                                />
                            </Card>
                        </section>
                    </section>
            })}
        </section>
    );
}