import { useEffect, useState } from "react"
import { IoSettings } from "react-icons/io5";

export default function AdminRevenue(){

    const [height, setHeight] = useState(0);

    useEffect(() => {

        const starter = () => {
            setHeight(window.innerHeight);
        }

        starter();

        window.addEventListener("resize", starter);

        return () => {
            window.removeEventListener("resize", starter);
        }

    }, [])


    return(
        <div className="w-full flex flex-col gap-3 justify-center items-center">
            <img src="/images/maintain.svg" alt="pending" style={{ height: height / 2 }} />
            <div className="flex flex-row gap-3 items-center">
                <p className="text-base text-[var(--primary)] font-semibold">This page is under maintenance</p>
                <div className="flex justify-center items-center w-[30px] h-[30px] animate-spin">
                    <IoSettings color="var(--focus)" size={30} />
                </div>
            </div>
        </div>
    )
}