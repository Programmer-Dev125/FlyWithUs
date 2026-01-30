import {useState, useEffect, useRef, lazy} from "react";
import { RiAdminFill } from "react-icons/ri";
import { FaUsers , FaUserSecret, FaHotel } from "react-icons/fa";
import { MdOutlineFlightTakeoff, MdMenuOpen, MdEmail, MdAnalytics } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { SideBarTab } from "@custom";
import { useLocation, useNavigate } from "react-router";
import { TbSettingsFilled } from "react-icons/tb";
import { IoHourglassOutline } from "react-icons/io5";

import { Title } from "@custom";

const DashboardContent = lazy(() => import("./dashboardContent"));
const AdminVisitors = lazy(() => import("./admin-visitors/adminVisitors"));
const AdminBookings = lazy(() => import("./admin-bookings/adminBookings"));
const AdminHotels = lazy(() => import("./admin-hotels/adminHotels"));
const AdminMessages = lazy(() => import("./admin-messages/adminMessages"));
const AdminPendingQueries = lazy(() => import("./admin-pending-queries/adminPendingQueries"));
const AdminAnalytics = lazy(() => import("./admin-analytics/adminAnalytics"));
const AdminRevenue = lazy(() => import("./admin-revenue/adminRevenue"));
const AdminSettings = lazy(() => import("./admin-settings/adminSettings"));

export default function DashBoard(){
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [height, setHeight] = useState(window.innerHeight);
    const [ collapse, setCollapse ] = useState(false);
    const collapseRef = useRef(false);
    const sidebarRef = useRef(null);

    const allTabs = [
        {id: 1, text: "Admin", icon: RiAdminFill, link: "/admin/dashboard"},
        {id: 2, text: "Visitors", icon: FaUsers, link: "/admin/dashboard/visitors"},
        {id: 3, text: "Bookings", icon: MdOutlineFlightTakeoff, link: "/admin/dashboard/bookings"},
        {id: 4, text: "Hotels", icon: FaHotel, link: "/admin/dashboard/hotels"},
        {id: 4, text: "Messages", icon: MdEmail, link: "/admin/dashboard/messages"},
        {id: 5, text: "Pending Queries", icon: IoHourglassOutline, link: "/admin/dashboard/pending-queries"},
        {id: 7, text: "Analytics", icon: MdAnalytics, link: "/admin/dashboard/analytics" },
        {id: 8, text: "Revenue", icon: AiFillDollarCircle, link: "/admin/dashboard/revenue"},
        {id: 10, text: "Settings", icon: TbSettingsFilled, link: "/admin/dashboard/settings"}
    ]

    useEffect(() =>{
        const updateHeight = () => setHeight(window.innerHeight);
        updateHeight();
        
        document.body.style.overflow = "hidden";
        window.addEventListener("resize", updateHeight);
        window.addEventListener("orientationchange", updateHeight);

        const closeMenu = (e) =>{
            if(window.innerWidth < 1280 && !sidebarRef.current.contains(e.target) && collapseRef.current){
                setCollapse(false);
            }
        }
        window.addEventListener("mousedown", closeMenu);

        return () => {
            document.body.style.overflow = "scroll";
            window.removeEventListener("resize", updateHeight);
            window.removeEventListener("orientationchange", updateHeight);
            window.removeEventListener("mousedown", closeMenu);
        }
    }, []);


    const onLink = (route) =>{
        navigate(route);
        if(collapse && window.innerWidth < 1280){
            setCollapse(false);
            collapseRef.current = false;
        }
    }

    return(
        <section className={`grid ${collapse ? "grid-cols-[0fr_10fr]" : "grid-cols-[2fr_8fr]"}`} style={{height: height}}>
            <section ref={sidebarRef} className={`bg-[var(--primary)] absolute top-0 left-0 xl:relative transition-all duration-100 ease-in-out z-100 ${collapse ? "w-full h-full sm:w-auto sm:h-auto" : ""}`}>
                <div className={`bg-[var(--focus)] cursor-pointer flex items-center 
                    ${collapse ? "w-fit sm:w-full justify-center" : "w-[60px] h-[60px] justify-center justify-self-end self-end xl:rounded-bl-xl"}
                    `} onClick={() => {
                        setCollapse(prev => {
                            collapseRef.current = !prev;
                            return !prev;
                        })
                    }}>
                    <MdMenuOpen size={40} color="white" className={`transition-transform duration-300 ease-in-out ${collapse ? "rotate-[180deg]": "rotate-0"}`} />
                </div>
                <div className={`${collapse ? "block" : "hidden xl:block"}`} style={{paddingTop: "6rem"}}> 
                    {allTabs.map((tab) =>{
                        return <div onClick={() => onLink(tab.link)}>
                            <SideBarTab collapse={collapse} icon={<tab.icon size={30} color="white" />} text={tab.text} link={tab.link} />
                        </div>
                    })}
                </div>
            </section>
            <section className="overflow-y-scroll h-auto mt-5 pb-20  mx-auto scroll-hidden w-[95%] relative col-span-full xl:col-span-1">
                <div className="flex gap-5 items-center justify-self-end mt-10">
                    <div className="w-[50px] h-[50px] bg-[var(--secondary)] flex justify-center items-center rounded-full">
                        <FaUserSecret size={30} color="white" />
                    </div>
                    <p className="text-lg font-semibold text-[var(--primary)]">Welcome Admin!</p>
                </div>
                <div className="mt-10">
                    <Title sub="Welcome to Travel Website" main="Admin Dashboard" size="text-3xl" />
                </div>
                <section className="mt-10">
                    {pathname == "/admin/dashboard" && <DashboardContent />}
                    {pathname == "/admin/dashboard/visitors" && <AdminVisitors />}
                    {pathname == "/admin/dashboard/bookings" && <AdminBookings />}  
                    {pathname == "/admin/dashboard/hotels" && <AdminHotels />} 
                    {pathname == "/admin/dashboard/messages" && <AdminMessages />}
                    {pathname == "/admin/dashboard/pending-queries" && <AdminPendingQueries />}
                    {pathname == "/admin/dashboard/analytics" && <AdminAnalytics />}
                    {pathname == "/admin/dashboard/revenue" && <AdminRevenue />}
                    {pathname == "/admin/dashboard/settings" && <AdminSettings />}
                </section>  
            </section>
        </section>
    )
}