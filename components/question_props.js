import Link from "next/link";
import { useState } from "react";

export default function QuestionProps(props){
    const [isReadMoreShown, setReadMoreShown] = useState(true)
    return(
        <>
         
         <div className="w-full  lg:w-2/3 mx-auto py-5">
        
        <div className = " mx-auto border-2 bg-stone-300 border-gray-200 border-opacity-60 py-7 rounded-xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-5/6 pl-3 pt-2">
            <h1 className = "  font-bold text-3xl pb-2"> {props.shopName}</h1>
            <p className = " font-semibold text-2xl pb-5">{props.city}</p>

            <p className={`${isReadMoreShown? "":"line-clamp-none"} line-clamp-2 lg:line-clamp-none`} >
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
        
  <div className="flex items-center ">
    <div className="w-1/3 font-semibold text-center">Skin</div>
    <div className="w-1/3 font-semibold text-center">Age</div>
    <div className="w-1/3 font-semibold text-center">Concerns</div>
  </div>
  <div className="flex items-center py-2 px-4">
    <div className="w-1/3 text-center font-semibold">{props.skinType}</div>
    <div className="w-1/3 text-center font-semibold">{props.age}</div>
    <div className="w-1/3 flex flex-col items-center">
      <div className="border-2 border-gray-300 rounded-md py-1 px-2 mb-1 font-semibold">{props.concern1}</div>
      <div className="border-2 border-gray-300 rounded-md py-1 px-2 font-semibold">{props.concern2}</div>
    </div>
  </div>



        </div>

        </div>
       
        
        
        
        </>
    );
}