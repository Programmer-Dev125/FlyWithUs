import { useEffect } from "react";
import {Link} from "react-router-dom";
import Destination from "./destination";
import Services from "./Services";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import Choice from "./Choice";
import ShortPolicy from "./ShortPolicy";
import Flights from "./Flights";
import {Button} from "@ui";
import { TextGenerator } from "@custom";

export default function Home(){
  
    useEffect(() =>{
      const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) =>{
            if(entry.isIntersecting){
              entry.target.classList.add("animated-content");
              observer.unobserve(entry.target);
            }
          })
     })

     const allContents = document.querySelectorAll(".content");
     allContents.forEach((el) => observer.observe(el));
    }, [])

    return(
        <section className="flex flex-col gap-30">
          <section className="w-[90%] mx-auto flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center relative content">
            <section className="flex flex-col gap-3 w-[100%] md:w-[45%]">
                <h2 className="text-xl text-[var(--focus)]">Best Destinations around the world</h2>
                <TextGenerator finalString="Travel, enjoy, live a new and full life." styles="text-6xl leading-normal text-[var(--primary)] relative" type="text" />
                <p className="text-lg text-[var(--primary)]">Ready for your next adventure? Discover amazing destinations and exclusive deals tailored just for you!</p>
                <Link to="/flights">
                  <Button>
                    Find Out More
                  </Button>
                </Link>
            </section>
            <section className="w-[100%] md:w-[45%]">
              <img src="/images/headerImage3.svg" alt="headerImage" className="w-full h-auto" />
            </section>
          </section>
          <Destination />
          <Services />
          <Contact />
          <Testimonial />
          <Choice />
          <ShortPolicy />
          <Flights />
        </section>
    );
}