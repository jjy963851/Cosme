import { ArrowRightIcon, EyeIcon, ChatIcon} from "@heroicons/react/outline"
import Link from "next/link";
import { useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import MobileNav from "./mobileNav";

export default function CardProps2(props){
   
    const[isReadMoreShown, setReadMoreShown] = useState(true)
    return(
 /**padding 4, small size screen, card size will be half of the screen */
        /** this container will make overall card will responsive  */
        <div className = "h-full">

            {/** this is image control! height full, border-2 테두리 opacity=투명도 */}
            <div className = "mt-10 xl:mt-0 lg:border-b-2 border-gray-200  border-opacity-60 rounded-lg overflow-hidden">
                {/**this will be the product title */}
                
                <h3 className = " text-4xl font-semibold my-6">
               {props.userName}
                </h3>
                <div className ="flex items-center justify-between flex-wrap ">
                <div>
                <a>
                <FacebookIcon className=" w-5 h-5 mr-1 -mt-3" />
               
                </a>
                <a className="">
                <YouTubeIcon className="w-5 h-5 mr-1 -mt-3" />
                </a>

                <a className="">
                <InstagramIcon className="w-5 h-5 mr-1 -mt-3" />
                </a>
                </div>

                {/*ingredient*/}
                <div className="pr-10">
                    <div className ="text-sm font-mono text-slate-400">
                            #Calsume
                    </div>
                    <div className ="text-sm font-mono text-slate-400">
                            #Vitamine
                    </div>
                </div>
                </div>
                
           {/** here will be the main ocntent and explain */}
           <p className ={` ${isReadMoreShown ? "" : "line-clamp-none"} line-clamp-4 md:line-clamp-none leading-relaxed my-3 `}>
                {props.content}
            </p>
            <button className ="lg:hidden text-gray-500 hover:text-pink-200 trainsition duration-300 ease-in" 
            onClick={()=>setReadMoreShown(!isReadMoreShown)}>
                {isReadMoreShown ? "read more..." : "read less..."}
            </button>
            {/**transition duration = when hover it, the hover effect time? */}
            <div className ={` ${isReadMoreShown ? "" : "hidden"} md:block p-6 `}>

           

            <h2 className = "text-2xl font-semibold mb-1">
            Combination
            </h2>
            <span className = "text-gray-700">
                {props.productType}
            </span>

            <h1 className ="text-2xl font-semibold text-grey-700 mb-1">
           {props.price}
            </h1>
            <span className = "mb-5 text-gray-700">
                USD
            </span>

           
            <h3 className ="text-2xl font-semibold my-3">
            Skin Concern
            </h3>
            <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  border-gray-700">
                <div className ="flex items-center flex-wrap gap-5 ">
                    <span className =" ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden">Sun</span>
                    <span className ="ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden">Sun Spots</span>
                    <span className ="ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden" >Acne</span>
                    <span className ="ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden">Atopic Dermatits</span>
                </div>
                </span>
               
            </div> 
            </div>
            
        </div>





    );
}