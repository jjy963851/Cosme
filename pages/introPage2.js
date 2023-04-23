import Link from "next/link";

export default function IntroPage2(){
    return(
        <>
        <div className='h-screen flex justify-center items-center'>
        <div className="w-full mx-auto pt-2 ">
        <div className = " mx-auto border-2 bg-amber-50 border-gray-200 border-opacity-60  py-16 lg:py-40 rounded-xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-5/6 pl-3">
            <h1 className = " italic font-bold text-3xl  lg:text-5xl pb-8 lg:pb-10"> Section</h1>
            
            <p className=" font-semibold text-xl lg:text-xl pb-3 lg:mb-5">Each post has a Product Card that goes with it </p>
            <p className=" font-semibold text-xl lg:text-xl"> </p>
            
        </div>
        </div>
        </div>
        </div>
        </>
        
    );
}