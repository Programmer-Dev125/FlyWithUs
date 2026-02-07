import Lottie from "lottie-react";
import Error404 from "../../assets/gifs/Error.json";
import {Link} from "react-router-dom";

export default function Error(){

    return(
        <section className="w-full min-h-screen flex justify-center items-center ov-hidden">
            <div className="flex flex-col gap-8">
                <Lottie animationData={Error404} loop={true} />
                <div className="text-center">
                    <Link to="/">
                        <button 
                            className="w-contain px-6 py-3 text-white text-md bg-[#F1A501] rounded-md transition-transform duration-500 hover:scale-110 cursor-pointer"
                        >Go Home</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}