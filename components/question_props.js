import Link from "next/link";
import { useState } from "react";

export default function QuestionProps(props){
    const [isReadMoreShown, setReadMoreShown] = useState(true)
    return(
        <>
         
         <div className="w-full h-full lg:w-2/3 mx-auto py-5">
        
        <div className = " mx-auto border-2 bg-stone-300 border-gray-200 border-opacity-60 py-10 rounded-xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-5/6 pl-3 pt-2">
            <h1 className = "  font-bold text-3xl pb-2"> {props.shopName}</h1>
            <p className = " font-semibold text-2xl pb-5">{props.city}</p>

            <p className={`${isReadMoreShown? "":"line-clamp-none"} line-clamp-3 lg:line-clamp-none`} >
                {props.description}
                </p>
            <button className ="lg:hidden text-gray-500 hover:text-pink-200 trainsition duration-300 ease-in" 
            onClick={()=>setReadMoreShown(!isReadMoreShown)}>
                
            </button>

            <p classname = " font-semibold text-md ">{props.recommendation}</p>
            
        </div>
        </div>
       
        <div className="py-2"></div>
        <div className = " mx-auto border-2 bg-slate-200 border-gray-200 border-opacity-60  rounded-xl shadow-md overflow-hidden pl-2">
        <div classname="flex justify-around ">
            <div className="flex gap-x-40 lg:gap-x-72 pb-3">
            <h1 className = "text-md font-semibold"> Skin</h1>
            <h1 className = "text-md font-semibold -ml-3"> Age</h1>
            <h1 className="text-md font-semibold"> Concerns</h1>
            </div>
            </div>
        

        <div className="flex flex-col">
            <div classname="flex justify-around ">
            <div className="flex gap-x-24 lg:gap-56 pb-3">
            <h1 className = "text-md font-semibold"> {props.skinType}</h1>
            <h1 className = "text-md font-semibold -ml-3"> {props.age}</h1>
            <div className="flex flex-col">
            <div className=" flex-col text-sm font-semibold pl-20"> 
            <div className=" border-2 border-gray-500 rounded-md">{props.concern1}</div>
            <div className="pt-1"></div>
            <div className="border-2 text-center border-gray-500 rounded-md"> {props.concern2}</div>
            </div>
            </div>
            </div>
            </div>

        </div>
        </div>

        </div>
       
        
        
        
        </>
    );
}