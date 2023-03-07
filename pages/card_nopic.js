import { ArrowRightIcon, EyeIcon, ChatIcon} from "@heroicons/react/outline"
export default function CardnoPick(){
    return(
        /**padding 4, small size screen, card size will be half of the screen */
        /** this container will make overall card will responsive  */
        <div className = "p-4 sm:w-1/2 lg:w-1/3">

            {/** this is image control! height full, border-2 테두리 opacity=투명도 */}
            <div className = "h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden">
                {/**this will be the product title */}
                
                <h3 className = " object-cover object-center text-4xl font-semibold my-5">
               Amanba Dynes, 41 
                </h3>
                <div className ="flex items-start flex-wrap">
                <a className ="">
                    
                 </a>
                <a>
                <EyeIcon className="w-4 h-4 mr-1" />
               
                </a>
                <a className="">
                <ChatIcon className="w-4 h-4 mr-1" />
                </a>
                </div>
                
           {/** here will be the main ocntent and explain */}
            <p className ="leading-relaxed my-3">
           Starter cleanser. Works well after washing your face in cold water.
           This is primarily a foam based cleansor that deeply penetrates the pores
            </p>     
            {/**transition duration = when hover it, the hover effect time? */}
            <div className =" p-6 hover:bg-indigo-600 hover:text-white transition duration-300 ease-in">
            
            <h2 className = "text-2xl font-semibold mb-1">
            Combination
            </h2>
            <span className = "text-gray-700">
                Skin type
            </span>

            <h1 className ="text-2xl font-semibold text-grey-700 mb-1">
            120.99
            </h1>
            <span className = "mb-3 text-gray-700">
                USD
            </span>

           
            <h3 className ="text-2xl font-semibold mb-1">
            Skin Concern
            </h3>
            <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  mb-2 border-gray-700">
                <div className ="flex items-center flex-wrap gap-2 ">
                    <span className ="border-2 border-black shadow-md text-gray-600 font-semibold rounded-sm overflow-hidden">Spots</span>
                    <span className ="border-2 border-black shadow-md text-gray-600 font-semibold rounded-sm overflow-hidden">Sun Spots</span>
                    <span className ="border-2 border-black shadow-md text-gray-600 font-semibold rounded-sm overflow-hidden" >Acne</span>
                    <span className ="border-2 border-black shadow-md text-gray-600 font-semibold rounded-sm overflow-hidden">Atopic Dermatits</span>
                </div>
                </span>
            
            </div> 
            </div>
        </div>

    );
}