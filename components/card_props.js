import { ArrowRightIcon, EyeIcon, ChatIcon} from "@heroicons/react/outline"
import { stringify } from "querystring";




export default function CardProps(props){
    {/** here will be data call and put in props */}




    return(
         /**padding 4, small size screen, card size will be half of the screen */
        /** this container will make overall card will responsive  */
        <div className = "p-4 sm:w-1/2 md:w-auto lg:w-auto overflow-hidden">

            {/** this is image control! height full, border-2 테두리 opacity=투명도 */}
            <div className = "h-full border-b-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/**this will be the product title */}
                
                <h3 className = " text-2xl font-semibold mb-6">
                {props.productTitle}
                </h3>
                
            {/** object-cover means when the screen size changes, image size also change together */}
            <img
            className="lg:h-72 md:h-48 w-full 
                       object-cover object-center"
            src=""
            alt="card image"
            />
            {/**transition duration = when hover it, the hover effect time? */}
            <div className =" p-6 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in">
            
            <h2 className = "text-2xl font-semibold mb-2">
             {props.ProductName}
            </h2>

            <h1 className ="text-xl font-semibold mb-5">
           {props.BrandName}
            </h1>

            <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-t-2 mb-2 border-gray-700">
                <div className ="flex items-center flex-wrap gap-2 ">
                    <span className ="border-2 border-black shadow-md text-gray-600 font-semibold rounded-sm overflow-hidden">sports</span>
                    <span className ="border-2 border-black shadow-md text-gray-600 font-semibold rounded-sm overflow-hidden">sports</span>
                    <span className ="border-2 border-black shadow-md text-gray-600 font-semibold rounded-sm overflow-hidden" >sports</span>
                    <span className ="border-2 border-black shadow-md text-gray-600 font-semibold rounded-sm overflow-hidden">sports</span>


                </div>
                </span>

            <p className ="leading-relaxed mb-3">
            {props.ProductDetail}
            </p>
            {/**link and etc */}
                <div className ="flex items-center flex-wrap">
                <a className ="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0 hover:text-white">
                Read More
                <ArrowRightIcon className ="w-4 h-4 ml-2"/>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <EyeIcon className="w-4 h-4 mr-1" />
                1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <ChatIcon className="w-4 h-4 mr-1" />6
                </span>
                </div>
            </div> 
            </div>
        </div>
    );
}

