import { useState, useEffect, useRef } from "react";
import { Link, useLocation} from "react-router-dom";
import { MdHome, MdPolicy, MdAirplaneTicket } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Form from "@pages/home/form";
import { FaPlaneDeparture } from "react-icons/fa";

export default function Menu(){

    const {pathname} = useLocation();
    const timeoutRef = useRef(null);
    const [id, setId] = useState(0);

    const contents =  [
        {id: 0, img: "/images/form-1.jpg"},
        {id: 1, img: "/images/form-2.jpg"},
        {id: 2, img: "/images/form-3.jpg"},
    ]

    const current = contents[id];

    const menuPaths = [
      {icon: MdHome, text: "Home", link: "/"},
      {icon: BsInfoCircleFill, text: "About", link: "/about"},
      {icon: MdPolicy, text: "Policy", link: "/policy"},
      {icon: MdAirplaneTicket, text: "Flights", link: "/flights"},
    ]
    
    useEffect(() =>{
      if(pathname === "/"){
          timeoutRef.current = setTimeout(() => {
            setId((prev) => prev === (contents.length - 1) ? 0: prev + 1);
          }, 5000);
      }
      return () => {
        if(timeoutRef?.current){
            clearTimeout(timeoutRef.current);
        }
      }
    }, [pathname, id]);

    return(
        <section className={`relative ${pathname === "/" && "pb-20"}`}>
          {pathname === "/" && <img 
            src={current.img}
            className="absolute top-0 w-[100%] h-full brightness-50"
            style={{zIndex: -1}}
          />}
          <section className="z-10 relative flex flex-col gap-20">
            <div id="menuRef" className="w-[90%] mx-auto hidden md:flex flex-row justify-between items-center">
              <Link to="/"> 
                <img 
                  src="/images/logo.png"
                  alt="logo image"
                  className="block w-50 h-50"
                />
              </Link>
              <div className={`md:w-[50%] lg:w-[40%] flex md:flex-row items-center justify-between self-right`}>
                  {menuPaths.map((menu, index) => 
                    <Link to={menu.link} key={index}>
                      <div className="flex flex-col items-center transition-transform duration-200 cursor-pointer hover:scale-120">
                        <menu.icon size={25}  color={`${pathname === menu.link ? "var(--focus)" : pathname === "/" ? "white" : "var(--primary)"}`} />
                        <p className="text-lg" style={{color: pathname === menu.link ? "var(--focus)" : pathname === "/" ? "white" : "var(--primary)"}}>{menu.text}</p>
                      </div>
                    </Link>
                  )}
              </div>              
            </div>
            <div className="animated-content md:hidden w-[100%] py-3 fixed bottom-0 bg-white/50 backdrop-blur-md shadow-2xl" style={{zIndex: 100}} id="mobile-menu">
                <div className="w-[90%] mx-auto flex flex-row justify-between items-center justify-between ">
                    <div 
                      className="w-[70px] h-[70px] absolute top-[-33px] left-1/2 transform -translate-x-1/2 bg-[var(--focus)] flex justify-center items-center rounded-full shadow-2xl" 
                      style={{zIndex: 90}}
                    >
                        <Link to="/">
                            <img  src="/images/menu-logo.png" alt="logo" className="w-[50px] h-[50px]" />
                        </Link>
                    </div>
                    {menuPaths.map((menu, index) => 
                        <Link to={menu.link} key={index}>
                            <div className="flex flex-col items-center transition-transform duration-200 cursor-pointer hover:scale-120">
                                <menu.icon size={15}  color={`${pathname === menu.link ? "var(--focus)" : "var(--primary)"}`} />
                                <p className="text-[10px] sm:text-sm" style={{color: pathname === menu.link ? "var(--focus)" : "var(--primary)"}}>{menu.text}</p>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            {pathname === "/" &&  <div className="pt-20 md:pt-0">
                <Form />
              </div>}
          </section>
        </section>
    )
}