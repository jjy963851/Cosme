import Header from "@/components/header";
import MainPageCard from "@/components/mainPageCard";
import MainPageLocal from "@/components/mainPageLocal";
import MainPageProduct from "@/components/mainPageProduct";
import Link from "next/link";

export default function MainPage(){
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


  const date = new Date();
  
    return(
       <div className = "flex flex-col mx-auto">
          <h1 className = "flex-col mx-auto font-extrabold text-2xl lg:text-4xl mt-5">
           {`Issue ${monthNames[date.getMonth()]} ${date.getDay() +26}`}
          </h1>
        <h2 className ="font-semibold text-lg mx-auto pt-10">Routine Collection</h2>
        <div className ="pt-5">
          <MainPageCard/>
        </div>
        <div>
          <MainPageCard/>
        </div>

        <h2 className ="font-semibold text-lg mx-auto pt-10">IYKYK</h2>
        <div className ="pt-5"><MainPageProduct/></div>


        <h2 className ="font-semibold text-lg mx-auto pt-10">Glossier, Williamsburg</h2>
        <p className="font-semibold text-sm mx-auto">Your local Favorites</p>
        <div className ="pt-5"><MainPageLocal/></div>
       </div>
            
         
    );
}