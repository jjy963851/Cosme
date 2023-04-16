import React, {useState} from 'react';

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import PersonIcon from "@mui/icons-material/Person";
import {
    AdjustIcon,
    ArchiveBoxIcon,
    PostIcon,
    AdminIcon,
    ProfileIcon,
    HamburgerIcon,
    SignOutIcon,
}from "./icons_bunddle";



export default function Sidebar(props){
    
    const [menuToggle, setMenuToggle] =useState(true);
    const [profileToggle, setProfileToggle] = useState(false);

    return(
      //Upper menu control
      
        <div>
          <div className ="hidden md:block max-h-screen">
            <nav className = "bg-white">
              {/**when screen become large, x margin is auto filled sm: means when screen become small lg: also same px is padding to x*/}
              <div className = " mx-auto px-2 sm:px-6 lg:px-8">
                {/** flex container. justify between means 좌우마지막에 정렬 */}
                <div className ="flex items-center justify-between h-16">
                  {/** 상단 메뉴 */}
                  {/** flex container, 작은화면일때 버튼늘어남 작은화면일때 왼쪽으로 붙음 */}
                    
                    <div className = "pl-5">
                    <Link href="/mainpage">
                    <ArrowBackIcon/>
                    </Link>
                    </div>
                    
                  
                  {/*right side menu*/}
                   <div>
                      <div>
                        <button tpye = "button"
                        className='bg-gray-800 flex text-sm rounded-full  focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                        id="profile"
                        onClick={()=>{setProfileToggle(!profileToggle)}}>
                        <svg className = "h-8 w-8 rounded-full"
                        src=""
                        alt="user data"/>
                        </button>
                      </div>
                      
                      {/**when clicked profile button control */}
                      <div className ={` ${ profileToggle ? "" : "hidden"}
                      origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white
                      ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                        <a href="#" legacybehavior className='flex items-center px-4 py-2 text-sm text-gray-700'>
                          <ProfileIcon className ="mr-2"/>
                              Your Profile
                        </a>
                        <a href="#" legacybehavior className='flex items-center px-4 py-2 text-sm text-gray-700'>
                          <AdminIcon className ="mr-2"/>
                              Setting
                        </a>
                        <a href="#" legacybehavior className='flex items-center px-4 py-2 text-sm text-gray-700'>
                          <SignOutIcon className ="mr-2"/>
                              Sign Out
                        </a>
                      </div>

                      
                   </div>
                </div>
              </div>
            </nav>
          </div>
    </div>
    );
}