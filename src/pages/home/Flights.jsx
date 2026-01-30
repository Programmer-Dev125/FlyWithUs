import { Title, Pointer } from "@custom";

export default function Flights(){
    const contents = [
       {id: 1, title: "Compare Airlines Easily", text: "View prices, flight times, and amenities side by side to find the best option."},
       {id: 2, title: "Flexible Search" , text: "Filter by nonstop, layovers, departure times, or preferred airlines to match your travel style."},
       {id: 3, title: "Best Deals First", text: "Highlighted options help you grab the lowest fares and special promotions."},
       {id: 4, title: "Smart Recommendations", text:  "Suggestions based on your past searches, budget, and destination trends."},
       {id: 5, title: "Smart Recommendations", text: "Suggestions based on your past searches, budget, and destination trends."},
       {id: 6, title: "Seamless Booking", text: "Secure checkout with instant confirmation, making your travel planning stress-free."}
    ];

    return(
        <section className="flex flex-col gap-15 content">
            <Title sub="Choose" main="Flights" center={true} />
            <section className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-[90%] mx-auto justify-between items-center">
                <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
                    {contents.map((content) => <Pointer key={content.id} title={content.title} text={content.text} headerStyle="border-l-5 border-l-[var(--focus)] pl-5" />)}
                </div>
                <img src="/images/mapSearch.svg" alt="policy image" className="w-[100%] lg:w-[40%]" />
            </section>
        </section>
    )
}