import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
import Link from 'next/link';
export default function IntroPage(){
    return(
        <>
        <div className='h-screen flex justify-center items-center'>
        <div className="w-full mx-auto pt-2 ">
        <div className = " mx-auto border-2 bg-amber-50 border-gray-200 border-opacity-60  py-16 lg:py-40 rounded-xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-5/6 pl-3">
            <h1 className = " italic font-bold text-3xl lg:text-5xl pb-8 lg:pb-10">How To Use </h1>
            
            <p className=" font-semibold text-xl lg:text-xl pb-3 lg:mb-5">Swipe up<ArrowCircleUpTwoToneIcon/> and Down<ArrowCircleDownTwoToneIcon/> to get to the next post</p>
            <p className=" font-semibold text-xl lg:text-xl">Swipe Left<ArrowCircleLeftTwoToneIcon/> and Right<ArrowCircleRightTwoToneIcon/> to see the product details</p>
            
        </div>
        </div>
        <div className='pt-3'></div>
        <Link href="/mainpage" legacyBehavior>
        <div className = " mx-auto border-2 bg-neutral-100 border-gray-200 border-opacity-60  py-2 rounded-xl shadow-md overflow-hidden transition duration-300 transform lg:hover:scale-105 hover:scale-95">    
        <p className=' flex justify-center font-semibold text-md text-slate-600'>Move to Month Magazine</p>
        
        </div>  
        </Link> 
         
        </div>
        </div>
        </>
        
    );
}