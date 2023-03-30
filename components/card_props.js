import { ArrowRightIcon, EyeIcon, ChatIcon} from "@heroicons/react/outline"
import { stringify } from "querystring";
import { useState } from "react";
export default function CardProps(props){

    const[isReadMoreShown, setReadMoreShown] = useState(true)
    {/** here will be data call and put in props */}

    return(
         /**padding 4, small size screen, card size will be half of the screen */
        /** this container will make overall card will responsive  */
        <div className = "">

            {/** this is image control! height full, border-2 테두리 opacity=투명도 */}
            <div className = "mt-10 lg:mt-0 lg:border-b-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/**this will be the product title */}
                
                <h3 className = " text-2xl font-semibold mb-6">
                {props.productTitle}
                </h3>
                
            {/** object-cover means when the screen size changes, image size also change together */}
            <img
            className="w-1/2 mx-auto
                       "
            src="https://www.byrdie.com/thmb/gDvPcIIdqlCU_8f3Wz6VUM_uM_A=/800x800/filters:no_upscale():max_bytes(150000):strip_icc()/curologyacnebodywash-240373da3c26495a8957bba626b538a9.jpg"
            alt="card image"
            />
            {/**transition duration = when hover it, the hover effect time? */}
            <div className =" p-6 ">
            
            <h2 className = "text-2xl font-semibold mb-2">
             {props.ProductName}
            </h2>

            <h1 className ="text-xl font-semibold mb-5">
           {props.BrandName}
            </h1>

            <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-t-2 mb-2 border-gray-700">
                <div className ="flex items-center flex-wrap gap-5 pt-3">

                    <span className =" ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden">sports</span>
                    <span className = "ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden">sports</span>
                    <span className =" ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden" >sports</span>
                    <span className =" ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden">sports</span>


                </div>
                </span>

            <p className ={`${isReadMoreShown ? "" : "line-clamp-none"} line-clamp-4 md:line-clamp-none leading-relaxed mb-3`}>
            {props.ProductDetail}
            </p>
            {/**link and etc */}
                <div className ="flex items-center flex-wrap">
                <button className =" text-gray-500 inline-flex items-center md:mb-2 lg:mb-0 hover:text-pink-200 trainsition duration-300 ease-in"
                onClick={()=>setReadMoreShown(!isReadMoreShown)}>
                 {isReadMoreShown ? "A Bit more about the step" : "back to Card"}
                <ArrowRightIcon className ="w-4 h-4 ml-2"/>
                </button>
                
                </div>
            </div> 
            </div>
        </div>
    );
}

