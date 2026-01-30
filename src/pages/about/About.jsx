import {Title, Pointer} from "@custom";
import { FaUser, FaGem, FaWifi } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { CiCircleList } from "react-icons/ci";
import { SlBookOpen } from "react-icons/sl";


export default function About(){
    const contents = [
        {id: 1, title: "Who We Are",  text: "We are a team of passionate travelers and explorers who understand the joy of discovering new places. Our goal is to make travel planning easy, fun, and accessible to everyone.", icon: FaUser},
        {id: 2, title: "Our Mission", text: "We believe travel should be affordable, simple, and inspiring. That’s why we bring together the best deals, trusted partners, and useful tools to help you explore the world with confidence.", icon: GoGoal},
        {id: 3, title: "What We Offer", text: "From flights and hotels to complete holiday packages, guides, and travel tips — we provide everything you need to plan your trip in one convenient place. Whether it’s a quick getaway or a dream vacation, we’ve got you covered.", icon: CiCircleList},
        {id: 4, title: "Why Choose Us", text: "We’re committed to offering transparent pricing, genuine deals, and customer support you can rely on. With us, you’ll spend less time worrying about bookings and more time enjoying your journey.", icon: FaGem},
        {id: 5, title: "Our Promise", text: "We make travel stress-free so you can focus on creating memories. Every booking, every recommendation, and every service we offer is designed to make your experience smoother and more enjoyable.", icon: SlBookOpen},
        {id: 6, title: "Stay Connected", text: "Join our community of travelers! Subscribe to our updates for the latest deals, insider tips, and fresh inspiration to plan your next adventure.", icon: FaWifi},
    ]
  
    return(
        <section className="w-[90%] mx-auto flex flex-col gap-20 animated-content">
            <div className="flex flex-col gap-5">
                <Title sub="About" main="Us" />
                <p className="text-[#212832] text-lg leading-loose indent-10">"At <span className="text-lg bg-[var(--focus)] text-white px-2 py-1 rounded-lg">travelwithusltd.co.uk</span>, we believe travel should be more than just getting from one place to another — it should be effortless, inspiring, and affordable. Born out of a love for exploring the world, we set out to make booking flights, hotels, and travel experiences simple for everyone. Our team works tirelessly to bring you the best deals, trustworthy recommendations, and round-the-clock support, so you can focus on making memories. Whether you’re planning a weekend getaway or a dream vacation, we’re here to help you every step of the way. Let’s make your journey unforgettable."</p>
            </div>
            <div className="flex flex-col gap-10">
                <Title sub="Our" main="Mission" />
                <section className="flex flex-col gap-10">
                    {contents.map((content) => <Pointer key={content.id} icon={<content.icon size={20} color="#ffffff" />}  title={content.title} text={content.text} headerStyle="border-l-5 border-l-[var(--focus)] pl-5" />)}
                </section>
            </div>
        </section>
    )
}