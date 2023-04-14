
import Link from "next/link";

export default function IntroProps(props){
    return(
        <>
        <div className="w-full  lg:w-2/3 mx-auto">
        <div className = " mx-auto border-2 bg-amber-100 border-gray-200 border-opacity-60  py-10 rounded-xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-5/6 pl-3">
            <h1 className = " font-bold text-3xl pb-2"> {props.productName}</h1>
            <p className = "font-semibold text-xl pb-5">{props.productBrand}</p>
            <p classname = "font-semibold text-md pb-3">{props.productDescription}</p>
            
            
        </div>
        </div>
        
        <div className="py-2"></div>
        <Link href="/mainpage" legacyBehavior>
        <div className = " mx-auto border-2 bg-slate-200 border-gray-200 border-opacity-60  py-3 rounded-xl shadow-md overflow-hidden transition duration-300 transform lg:hover:scale-105 hover:scale-95 ">
        <div className = "flex flex-col w-4/5 pl-3">
            <h1 className = " font-bold text-3xl pb-2"> Steps</h1>
            <p classname = "font-semibold text-md pb-3">Go check Routine</p>
            
        </div>
        </div>
        </Link>
        </div>


        
       
        
        </>
        
    );
}