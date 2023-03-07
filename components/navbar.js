import Link from "next/link";
import { useState } from "react";
import { ProfileIcon, SignOutIcon, AdminIcon } from "./icons_bunddle";



export default function Navbar(){
    const bgColor = "bg-blue-500";
    const [menuToggle, setMenuToggle] = useState(true);
    const [profileToggle, setProfileToggle] = useState(false);
    return(
        /**This navbar will provide header menu */
        /** this is background color */
        <nav className = "bg-gray-300"> 
             {/**max-w-6xl = max width 6 extra large mx-auto is right and left auto margin(this will be for mobile version) */}
            <div className = "max-w-auto mx-auto px-4 py-2 ">
                {/**flex-jsutify-between = 수평배치 */}
                <div className = "flex justify-between">
                    <div className =" flex space-x-4 py-5 px-2">
                        <div>
                            {/**mobile version hamburger bar */}
                            <button onClick={() => setMenuToggle(!menuToggle)} 
                            className ="md:hidden flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>

                        <div className = "flex items-center  text-gray-700">
                            <Link href="/" legacybehavior className =" ">
                                
                                    <span className = "font-bold">Home</span>
            
                            </Link>
                        </div>
                       
                        {/** In here control the item's betwwen space */}
                        <div className = "hidden md:flex items-center space-x-3">
                            <Link href ="#" legacybehavior clasName = "py-5 px-3 text-gray-700 hover:text-gray-900">
                                    About Us
                            </Link>

                            <Link href ="#" legacybehavior clasName = "py-5 px-3 text-gray-700 hover:text-gray-900">
                                    Pricing
                            </Link>
                        </div>
                    </div>
                </div>  
            </div>
        </nav>
    );
}