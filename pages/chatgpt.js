import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function GPT({imageUrl, title, description}){
   
    return(
<>


<div className="h-full border-b-2 border-gray-200 border-opacity-60 mx-3 py-5 rounded-lg overflow-hidden">
<h1 className = "font-extrabold text-lg lg:text-2xl ">Routine Drops</h1>
<div className="flex">
<Link href = "/routine" legacyBehavior>
<img src="/img1.jpg" alt="Card image" className="w-1/2 lg:w-1/4 pb-2 rounded-xl ml-4"/>
</Link>
<div className="flex flex-col p-4 w-1/2 lg:w-5/6 ">
<h2 className="text-2xl font-bold mb-2">Spongebob Square Pants Routine</h2>
<p className="flex-grow py-4 text-gray-700 text-start">Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start</p>
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
<div className="flex">
    <div className = "flex justify-between gap-x-3 ml-4 pr-10"> 
    <Link href = "/keepit" legacyBehavior>
        
<img src="/img1.jpg" alt="Card image" className="w-1/2 lg:w-1/2 pb-2 rounded-xl"/>

</Link>
    <Link href = "/keepit" legacyBehavior>
    
<img src="/img1.jpg" alt="Card image" className="w-1/2 lg:w-1/2 pb-2 rounded-xl"/>
    
    </Link>
    </div>
<div className="p-4 w-1/2 lg:w-5/6">
<h2 className="text-2xl font-bold mb-2">Hear it from Us</h2>
<p className="text-gray-700">Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start</p>
</div>
</div>
</div>


<div className="h-full border-b-2 border-gray-200 border-opacity-60 mx-3 py-5 rounded-lg overflow-hidden">
<h1 className = "font-extrabold text-lg lg:text-2xl pb-4">Local Shop</h1>
<div className="flex">
<div className = "flex justify-between gap-x-2 ml-4 pr-10"> 
<div className="flex flex-col  w-1/2 lg:w-1/3">
<h2 className="text-2xl font-bold mb-2 ">Spongebob Square Pants Routine</h2>
<p className="flex-grow py-4 text-gray-700">Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start</p>
</div>
<div className="flex flex-col  w-1/2 lg:w-1/3 ">
<h2 className="text-2xl font-bold mb-2">Spongebob Square Pants Routine</h2>
<p className="flex-grow py-4 text-gray-700">Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start</p>
</div>
<Link href = "/shop" legacyBehavior>
<img src="/img1.jpg" alt="Card image" className="w-1/2 lg:w-1/4 pb-2 rounded-xl mr-4"/>
</Link>
</div>


</div>
</div>

</>
    );
}