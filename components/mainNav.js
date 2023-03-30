import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import PersonIcon from "@mui/icons-material/Person";



export default function MainNav(){

    return(
        
        <aside className="hidden ml-3 sticky top-48 z-0 lg:block">
            <div className="flex flex-col gap-5">
           <Link href="/" className="">
          <HomeIcon />
        </Link>
        <Link href="/favorite" className="w-2">
          <SearchIcon />
        </Link>
        <Link href="/routine" className="w-2">
          <AddToQueueIcon />
        </Link>
        <Link href="/favorite" className="w-2">
          <Menu />
        </Link>
        <Link href="/profile" className="w-2">
          <PersonIcon />
        </Link>
        </div>
        </aside>
        
    );
}