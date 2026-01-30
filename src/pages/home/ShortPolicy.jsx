import { Title, Pointer } from "@custom";

export default function ShortPolicy(){
    const contents = [
        {id: 1, title: "Data Collection", text: "The site collects personal details (name, contact, passport info), payment details, and usage data (IP, cookies, browsing)."},
        {id: 2, title: "Use of Data", text: "Information is used to process bookings, send confirmations, personalize offers, improve services, and comply with legal requirements."},
        {id: 3, title: "Data Sharing", text: "Information may be shared with travel partners (airlines, hotels), payment processors, or authorities, but never sold to third parties."},
        {id: 4, title: "User Rights & Security", text: "Users can request access, updates, deletion, or opt out of marketing. Data is protected with reasonable security measures."},
        {id: 5, title: "Other Provisions", text: "Covers cookies, children’s privacy, international transfers, policy updates, and contact details for inquiries."}
    ]


    return(
        <section className="flex flex-col gap-10 content">
            <Title sub="Privacy" main="Policy" center={true} />
            <section className="flex flex-col gap-10 lg:gap-0 lg:flex-row w-[90%] mx-auto justify-between items-center">
                <img src="/images/policy.svg" alt="policy image" className="w-[100%] lg:w-[40%]" />
                <div className="w-[100%] lg:w-[50%] flex flex-col gap-10">
                    {contents.map((content) => <Pointer key={content.id} title={content.title} text={content.text} headerStyle="border-l-5 border-l-[var(--focus)] pl-5" />)}
                </div>
            </section>
        </section>
    )
}