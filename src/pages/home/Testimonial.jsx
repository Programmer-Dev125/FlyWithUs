import { TestimonialCard, Title } from "@custom";

export default function Testimonial(){
    const contents = [
        {id: 1, name: "Sarah M. USA", text: "Our trip was absolutely seamless! From booking flights to local tours, everything was perfectly organized. We didn’t have to worry about a single detail."},
        {id: 2, name: "David K. UK", text: "I’ve traveled a lot, but this was the smoothest experience I’ve ever had. The recommendations were spot on, especially the hidden gems we’d never have found ourselves."},
        {id: 3, name: "Anika R. India", text: "The customer service was amazing. Whenever I had a question, the team responded quickly and made me feel like a VIP traveler."},
        {id: 4, name: "Lucas P. Brazil", text: "The itinerary was well thought out and flexible. I loved how I could mix adventure with relaxation. Definitely booking again next year!"},
        {id: 5,name: "Emily J. Canada", text: "It felt like every part of the trip was personalized just for me. The local guides were so knowledgeable and friendly—made the journey unforgettable."},
        {id: 6, name: "Omar A. UAE", text: "Booking through this site saved me both time and money. The deals were unbeatable, and everything was transparent—no hidden costs!"},
        {id: 7, name: "Sofia L. Spain", text: "I was nervous about traveling solo, but thanks to the great planning and support, I felt safe and had the best adventure of my life."},
    ]
    
    return(
        <section className="content">
             <Title sub="See What Our" main="Clients" extra="Say About Us" center={true} />
             <p className="text-md text-[var(--primary)] text-center mt-2 w-[90%] md:w-[70%] xl:w-[50%] mx-auto">Your trust means the world to us. That’s why we carefully design each experience with comfort, safety, and authenticity in mind. From the first click of booking to the last step of your journey, our team is dedicated to giving you a seamless and memorable travel experience.</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] mx-auto mt-20">
                {contents.map((content) => <TestimonialCard key={content.id} name={content.name} text={content.text} styles="content" />)}
             </div>
        </section>
    )
}