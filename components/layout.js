
import React from "react";
import Sidebar from "./SideBar";
import Footer from "./footer";
import Navbar from "./navbar";
import MobileNav from "./mobileNav";
import MainNav from "./mainNav";


export default function Layout({children}){
    return(
        <>
        <MainNav/>
        <div className="lg:-mt-40">
        <Sidebar/>
        </div>   
        {children}
        <MobileNav/>   
            
        </> 
        
    );
}