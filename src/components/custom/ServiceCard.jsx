import { useDispatch } from "react-redux";
import { onTab } from "@store/slices/tabSlice";
import {Button} from "@ui";

export default function ServiceCard({children, icon, tab, btnText, styles}){
    
    const dispatch = useDispatch();

    function onForm(tab){
        dispatch(onTab(tab));
        document.querySelector(".form-section").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
        });
    }

    return(
        <div className={`w-full flex flex-col gap-8 text-left cursor-pointer bg-white shadow-lg sm:shadow-none sm:transition-shadow sm:duration-300 sm:hover:shadow-2xl p-5 rounded-lg ${styles || ""}`}>
            <div className="w-[50px] h-[50px] rounded-full bg-[#F1A501] flex justify-center items-center">
                {icon}
            </div>
            <div className="flex flex-col gap-5">
                <ol className="list-disc space-y-2 text-md text-[#212832] pl-5">
                    {children}
                </ol>   
            </div>
            <div>
                <Button onClick={() => onForm(tab)} otherTab={true}>
                    {btnText}
                </Button>
            </div>   
        </div>
    )
}