import { Suspense, lazy, useEffect, useRef, useState } from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import Menu from "@pages/menu/menu";
import Footer from "./footer/footer";
import Lottie from "lottie-react";
import Loader from "./assets/gifs/Loader.json";
import Error from "@pages/404/Error";


const Home = lazy(() => import("@pages/home/Home"));
const About = lazy(() => import("@pages/about/About"));
const Policy = lazy(() => import("@pages/policy/policy"));
const Flight = lazy(() => import("@pages/flights/flight"));
const Login = lazy(() => import("@admin/login/Login"));
const Dashboard = lazy(() => import("@admin/dashboard/Dashboard"));

export default function App(){  
   
  return(  
    <BrowserRouter>
      <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <Lottie animationData={Loader} loop={true} />
        </div>
      }
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/policy" element={<Policy />} />  
            <Route path="/flights" element={<Flight />}  /> 
            <Route path="/admin" element={<Login />} />
            <Route path="/admin/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardHome />} />
                <Route path="/visitors" element={<Dashboard />} />
                <Route path="/bookings" element={<Dashboard />} />
                <Route path="/hotels" element={<Dashboard />} />
                <Route path="/messages" element={<Dashboard />} />
                <Route path="/pending-queries" element={<Dashboard />} />
                <Route path="/analytics" element={<Dashboard />} />
                <Route path="/revenue" element={<Dashboard />} />
                <Route path="/settings" element={<Dashboard />} />
                <Route path="*" element={<Error />} />
            </Route>
            {/* <Route path="/admin/dashboard/visitors" element={<Dashboard />} />
            <Route path="/admin/dashboard/bookings" element={<Dashboard />} />
            <Route path="/admin/dashboard/hotels" element={<Dashboard />} />
            <Route path="/admin/dashboard/messages" element={<Dashboard />} />
            <Route path="/admin/dashboard/pending-queries" element={<Dashboard />} />
            <Route path="/admin/dashboard/analytics" element={<Dashboard />} />
            <Route path="/admin/dashboard/revenue" element={<Dashboard />} />
            <Route path="/admin/dashboard/settings" element={<Dashboard />} /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter> 
  )
}

function Layout({children}){
  const [isScrolling, setIsScrolling] = useState(false);
  const routes = ["/", "/about", "/policy", "/flights"];
  const { pathname } = useLocation();
  const path = pathname.toLowerCase(); 
  
  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [pathname]);
  
  useEffect(() =>{
     const handleScroll = () =>{
      const elem = document.getElementById("menuRef");
      if(elem){
        let y = window.scrollY;
        let height = elem.clientHeight;
        y > height ? setIsScrolling(true) : setIsScrolling(false);
      }
     }


     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  function handleScrollUp(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  
  return(
    <>
      <main className="flex flex-col gap-30 mb-20">
        {routes.includes(path) && <section>
                <Menu />
                  {path != "/" && <svg viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0" style={{zIndex: -1}}>
                    <path fill="#FFF1DA" d="M70.1,-26.6C77.1,-1.2,59.6,28.4,35.1,45.5C10.6,62.6,-20.9,67.3,-39.3,54C-57.7,40.6,-63,9.2,-54.3,-18.6C-45.6,-46.4,-22.8,-70.6,4.4,-72C31.5,-73.5,63.1,-52.1,70.1,-26.6Z" transform="translate(120 0)" />
                  </svg>}
              </section>}
        {children}
        {isScrolling && <div onClick={handleScrollUp} className="fixed bottom-10 right-20 w-[50px] h-[50px] hidden md:flex justify-center shadow-lg items-center bg-[#F1A501] cursor-pointer rounded-full" style={{zIndex: 10000}}>
           <IoIosArrowUp size={25} color="white" />
        </div>}
      </main>
      {routes.includes(path) && <Footer />}  
    </>    
  )
}