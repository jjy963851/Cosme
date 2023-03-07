
import React from "react";
import Sidebar from "./SideBar";
import Footer from "./footer";
import Navbar from "./navbar";


export default function Layout({children}){
    return(
        
        <div className ="w-full p-0">
            
        <Sidebar/>
        {children}
            
            
        </div>
        
    );
}