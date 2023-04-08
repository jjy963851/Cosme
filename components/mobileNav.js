import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import PersonIcon from "@mui/icons-material/Person";



export default function MobileNav(){
    return(
      
        <div className=" p-5 sticky top-0 bg-white border-t-2 shadow-lg z-auto border-b-slate-200 lg:hidden">
      <div className="flex justify-between px-3">
        <Link href="/">
          <HomeIcon />
        </Link>
        <Link href="/favorite">
          <SearchIcon />
        </Link>
        <Link href="/routine">
          <AddToQueueIcon />
        </Link>
        <Link href="/favorite">
          <Menu />
        </Link>
        <Link href="/profile">
          <PersonIcon />
        </Link>
      </div>
    </div>
    

    );

    
}