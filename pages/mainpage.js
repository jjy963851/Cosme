import Header from "@/components/header";
import Link from "next/link";

export default function MainPage(){
    return(
        <>
            
            <div className = "p-4 mx-auto lg:w-5/6">
                <h1 className = "font-extrabold text-2xl mx-3">Routine Drops</h1>
        <div className="h-full border-b-2 border-gray-200 border-opacity-60 mx-3 py-5 rounded-lg overflow-hidden">
            <div className = "flex justify-between mx-5 mr-5 gap-x-5">
              <Link href = "/routine" legacyBehavior>
            <a href = "">
          <img className=" h-full w-96 object-fill  rounded-xl"
            src="/img1.jpg"
            alt="card image"
            
          />
         </a>
         </Link>
         <div className =" grid grid-col-3 gap-3 content-between lg:-space-y-24">
        <span className =" text-xl font-semibold font-mono "
        > Spongebob Square pants Routine </span>
        <p className = "leading-relaxed ">
         Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start
        </p>
        <div className = "flex items-center space-x-10 lg:gap-32"> 
        <p className = "font-semibold">price </p>
        <p className = "font-semibold">steps</p>
        <p className = "font-semibold">Type</p>
        </div>
        </div> 

          </div>
        </div>
        </div>
        {/*Second Card */}
        <div className = "p-4 mx-auto lg:w-5/6">
        <h1 className = "font-extrabold text-2xl mx-3">KEEP IT, DITCH IT</h1>
        <div className="h-full border-b-2 border-gray-200 border-opacity-60 mx-3 py-5 rounded-lg overflow-hidden">
            <div className = "flex justify-between mx-5 mr-5 gap-x-5">
              <Link href = "/keepit" legacyBehavior>
            <a href = "">
          <img className=" h-full w-96 object-fill  rounded-xl"
            src="/img1.jpg"
            alt="card image"
          />
         </a>
         </Link>
         <Link href = "/keepit" legacyBehavior>
         <a href = "">
          <img className=" h-full w-96 object-fill  rounded-xl"
            src="/img1.jpg"
            alt="card image"
          />
         </a>
         </Link>
         <div className =" grid grid-col-3 gap-3 content-between lg:-space-y-16">
        <span className =" text-xl font-semibold font-mono "
        > Hear It From us </span>
        <p className = "leading-relaxed ">
         Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start
        </p>
        <div className = "flex items-center space-x-10 lg:gap-32"> 
        
        </div>
        </div> 
        
          </div>
        </div>
        </div>
        {/*third card*/}
        <div className = "p-4 mx-auto lg:w-5/6">
        <h1 className = "font-extrabold text-2xl mx-3">Local Shop</h1>
        <div className=" h-full border-b-2 border-gray-200 border-opacity-60 mx-3 py-5 rounded-lg overflow-hidden">
            <div className = "flex justify-between mx-5 mr-5 gap-x-3 lg:gap-x-10">
         <div className =" grid grid-col-2 gap-2 content-between ">
        <span className =" text-xl font-semibold font-mono lg:-space-y-10 "
        > Spongebob Square pants Routine </span>
        <p className = "leading-relaxed ">
         Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start
        </p>
        </div> 
        <div className =" grid grid-col-2 gap-1 content-between gap-y-0.5">
        <span className =" text-xl font-semibold font-mono lg:-mb-5 "
        > Spongebob Square pants Routine </span>
        <p className = "leading-relaxed ">
         Starter cleaner, works well after washting your face in cold water. This is primarily a form based cleansor that deeply penetarate the start
        </p>
        </div> 
        <Link href = "/shop" legacyBehavior>
        <a href = "">
          <img className=" h-full w-96 object-fill  rounded-xl"
            src="/img1.jpg"
            alt="card image"
            
          />
         </a>
         </Link>
          </div>
        </div>
        </div>
        </>
    );
}