
import Link from "next/link";
export default function QuestionPage(){
    return(
        <>
        
        <div className="w-full h-full lg:w-2/3 mx-auto py-5">
        <Link href = "/mainpage" legacyBehavior>
        <div className = " mx-auto border-2 bg-orange-400 border-gray-200 border-opacity-60 py-10 rounded-xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-5/6 pl-3 pt-2">
            <h1 className = "  font-bold text-3xl pb-2"> On Nostrand Ave</h1>
            <p className = " font-semibold text-xl pb-5">Brooklyn, NY, USA</p>
            <p classname = " font-semibold text-md pb-5">I always struggled with psorlasis from a young age which ineveitably shaped a core part of my personality as being a shy person. I am now taking control of my own skincare and looking for new products to try that wont break the bank(max, budget is 160 per month).</p>
            <p classname = " font-semibold text-md ">Give me some recs!!</p>
            
        </div>
        </div>
        </Link>
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
            <h1 className = "text-md font-semibold"> Combination</h1>
            <h1 className = "text-md font-semibold -ml-3"> 35</h1>
            <div className="flex flex-col">
            <div className=" flex-col text-sm font-semibold pl-20"> 
            <div className=" border-2 border-gray-500 rounded-md"> Blemish</div>
            <div className="pt-1"></div>
            <div className="border-2 text-center border-gray-500 rounded-md"> Acne</div>
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