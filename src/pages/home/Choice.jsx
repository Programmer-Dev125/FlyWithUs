import { Title, Pointer } from "@custom";
export default function Choice(){
    const contents = [
        {id: 1, title: "Hassle-Free Planning", text: "We take care of everything—from flights and hotels to activities—so you can focus on enjoying your trip."},
        {id: 2, title: "Tailored Experiences", text: "Every journey is customized to match your style, whether you want adventure, relaxation, culture, or a mix of all three."},
        {id: 3, title: "Best Price Guarantee", text: "With exclusive deals and transparent pricing, you’ll always get the best value for your money."},
        {id:4, title: "Trusted by Travelers Worldwide", text: "Thousands of happy customers rely on us for safe, smooth, and memorable trips."},
        {id: 5, title: "Local Expertise", text: "Our handpicked guides and partners give you insider access to hidden gems most tourists miss."},
        {id: 6, title: "24/7 Support", text: "Wherever you are, our support team is just a message away—travel with total peace of mind."},  
    ];

    return(
        <section className="flex flex-col gap-10 content">
             <Title sub="Why People" main="Choose" extra="Us" center={true} />
             <section className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-[90%] mx-auto justify-between items-center">
                <div className="flex flex-col gap-8 w-[100%] lg:w-[50%]">
                    {contents.map((content) => <Pointer key={content.id} title={content.title} text={content.text} headerStyle="border-l-5 border-l-[var(--focus)] pl-5" />)}
                </div>
                <img src="/images/aggrement.svg" className="w-[100%] lg:w-[40%] h-auto" alt="contract image" />
             </section>
        </section>
    )
}