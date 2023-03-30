import Link from "next/link";

import { useState } from "react";
export default function MainPageCard(props){
    const[isReadMoreShown, setReadMoreShown] = useState(true)
return(
<div className =" w-full h-full lg:w-2/3 mx-auto  border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden">
<div className ="grid lg:flex lg:gap-x-3">
<div className="flex-col lg:w-1/2">
    <Link href="/routine">
    <img src="/img1.jpg" alt="card" className="w-full h-full object-cover rounded-lg"/>
    </Link>
</div>
    <div className="mx-auto lg:w-1/2 p-2 lg:p-6">
       <h2 className="text-xl font-bold lg:mb-4">@madbunny</h2>
       <p className ={`${isReadMoreShown ? " " : "line-clamp-none "} line-clamp-2 lg:line-clamp-none text-gray-700 lg:mb-4`}>card desicripton blah goes here something yes yes hello this is test and checking how to fix it card desicripton blah goes here something yes yes </p>
       <button className="lg:hidden text-gray-500 hover:text-indigo-300 trainsition duration-300 ease-in"
       onClick={() => setReadMoreShown(!isReadMoreShown)}
       >
        {isReadMoreShown ? "read more" : "read less"}
       </button>
       <div className= {`${isReadMoreShown ? "hidden" : ""} lg:block`}>
       <h1 className="text-xl font-bold lg:mb-4"> SpongeBob Square Pants Routine</h1>
       <p className ="text-gray-700 mb-4">card desicripton blah goes here something yes yes</p>
       </div>
       <div className="flex end space-x-20 font-semibold lg:items-end lg:mt-20 xl:mt-40">
        <p>Price</p>
        <p>Steps</p>
        <p>Type</p>
       </div>
       <div className ="flex flex-wrap gap-3 mt-4 xl:mt-10">
        <p className ="text-blue-500">#tag</p>
        <p className ="text-blue-500">#tag</p>
        <p className ="text-blue-500">#tag</p>
       </div>
    </div>



</div>
</div>
);
}