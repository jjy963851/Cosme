import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function GPT(){
    
    return(
<>


<div className="h-full border-b-2 border-gray-200 border-opacity-60 mx-3 py-2 rounded-lg overflow-hidden">
<h1 className = "font-extrabold text-lg lg:text-2xl ">Routine Drops</h1>
<div className=" mx-10 grid md:flex">
<Link href = "/routine" legacyBehavior>
<img src="/img1.jpg" alt="Card image" className="w-1/2 md:h-1/2 md:w-1/3 lg:w-1/6 pb-2 rounded-xl ml-4 transition duration-300 transform hover:scale-105"/>
</Link>
<div className="flex flex-col w-atuo md:w-1/2 md:p-4 lg:w-5/6 ">
<h2 className="text-xl md:text-2xl font-bold mb-2">Spongebob Square Pants Routine</h2>
<p className="flex-grow  text-gray-700 text-start line-clamp-2 md:line-clamp-none">Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start</p>
<div className ="flex items-center space-x-10">
<p>Price</p>
<p>Steps</p>
<p>Type</p>
</div>
</div>
</div>
</div>


<div className="h-full border-b-2 border-gray-200 border-opacity-60 mx-3 py-5 rounded-lg overflow-hidden">
<h1 className = "font-extrabold text-lg lg:text-2xl ">KEEP IT, DITCH IT</h1>
<div className="mx-10 grid md:flex">
    <div className = "flex justify-between gap-x-3 pl-4 md:pr-5 "> 
    <Link href = "/keepit" legacyBehavior>   
    <img src="/img1.jpg" alt="Card image" className="hidden md:block w-2/4 lg:w-1/2 pb-2 rounded-xl transition duration-300 transform hover:scale-105 "/>
    </Link>

    <Link href = "/keepit" legacyBehavior>
    <img src="/img1.jpg" alt="Card image" className="w-1/2 lg:w-1/2 pb-2 rounded-xl transition duration-300 transform hover:scale-105"/>
    </Link>
    </div>

<div className=" w-atuo md:w-1/2 md:p-4 lg:w-5/6">
<h2 className="text-xl md:text-2xl font-bold mb-2">Hear it from Us</h2>
<p className="text-gray-700  line-clamp-2 md:line-clamp-none">Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start</p>
</div>
</div>
</div>


<div className="h-full border-b-2 border-gray-200 border-opacity-60 mx-3 py-5 rounded-lg overflow-hidden">
<h1 className = "font-extrabold text-lg lg:text-2xl ">Local Shop</h1>
<div className="mx-10 flex flex-col">
<Link href = "/shop" legacyBehavior>
<img src="/img1.jpg" alt="Card image" className="ml-4 md:hidden w-1/2 h-1/2 lg:w-1/4 pb-2 rounded-xl transition duration-300 transform hover:scale-105"/>
</Link>
<div className = "grid md:flex  gap-x-1 ml-2 pr-10"> 
<div className="flex flex-col  md:w-1/2 md:p-4 lg:w-1/3">
<h2 className="hidden md:block text-xl md:text-2xl font-bold mb-2 ">Spongebob Square Pants Routine</h2>
<p className=" hidden md:block  md:line-clamp-3 lg:line-clamp-none flex-grow lg:py-2  text-gray-700 ">Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start</p>
</div>
<div className="flex flex-col md:w-1/2 md:p-4 lg:w-1/3 ">
<h2 className="text-xl md:text-2xl font-bold mb-2">Spongebob Square Pants Routine</h2>
<p className="flex-grow  md:line-clamp-3 lg:line-clamp-none lg:py-2 text-gray-700">Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start</p>
</div>
<Link href = "/shop" legacyBehavior>
<img src="/img1.jpg" alt="Card image" className="hidden md:block mt-3 w-1/3 h-1/3 lg:w-1/5 lg:mt-5 xl:w-1/6 xl:mx-16 pb-2 rounded-xl mr-4 transition duration-300 transform hover:scale-105"/>
</Link>
</div>


</div>
</div>

</>
    );
}