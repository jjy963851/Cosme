import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import SearchBar from "@/pages/searchBar";
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';

export default function MainNav(){
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  function handleSearchClick() {
    setIsSearchVisible(true);
  }

  function handleSearchClose() {
    setIsSearchVisible(false);
  }

    return(
        <>
        <aside className={`${isSearchVisible ? 'blur' : ''} ml-3 sticky top-48 z-0 hidden lg:block`}>
            <div className="flex flex-col gap-5">
           <Link href="/" className="">
          <HomeIcon />
        </Link>
        <button onClick={handleSearchClick} className="w-2">
          <SearchIcon />
        </button>
        <Link href="/submit" className="w-2">
          <AddToQueueIcon />
        </Link>
        <Link href="/savedPage" className="w-2">
          <PhotoCameraBackIcon/>
        </Link>
        <Link href="/profilePage" className="w-2">
          <PersonIcon />
        </Link>
        </div>
        
        </aside>
        {isSearchVisible && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
            <SearchBar onClose={handleSearchClose} />
          </div>
        )}
        </>
    );
}