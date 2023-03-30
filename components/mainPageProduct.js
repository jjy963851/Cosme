import { useState } from "react";




export default function MainPageProduct(){
  const[isReadMoreShown, setReadMoreShown] = useState(true)
    return(
<div className ="w-full lg:w-2/3 mx-auto  border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden">
<button className = "text-gray-500 hover:text-indigo-300 trainsition duration-300 ease-in pl-5 lg:hidden" 
            onClick={()=>setReadMoreShown(!isReadMoreShown)}>
                {isReadMoreShown ? "View More Product" : "Close"}
    </button>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    <div className="border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden">
      <img src="/img1.jpg" alt="your-image-description" className="max-h-full max-w-full rounded-lg" />
      <div className="flex flex-col">
        <h1 className ="flex-col font-semibold text-md mb-3">Genuine Orange Moisturizer</h1>
        <p className ="mb-2">genuine Orange Moisturizer</p>
        <div className="flex justify-between mr-4 pb-2">
            <p>price</p>
            <p>Keep</p>
        </div>
      </div>
    </div>
    
    <div className="border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden">
      <img src="/img1.jpg" alt="your-image-description" className="max-h-full max-w-full rounded-lg" />
      <div className="flex flex-col">
        <h1 className ="flex-col font-semibold text-md mb-3">Genuine Orange Moisturizer</h1>
        <p className ="mb-2">genuine Orange Moisturizer</p>
        <div className="flex justify-between mr-4 pb-2">
            <p>price</p>
            <p>Keep</p>
        </div>
      </div>
    </div>
   
    
    <div className="border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden">
      <img src="/img1.jpg" alt="your-image-description" className="max-h-full max-w-full rounded-lg" />
      <div className="flex flex-col">
        <h1 className ="flex-col font-semibold text-md mb-3">Genuine Orange Moisturizer</h1>
        <p className ="mb-2">genuine Orange Moisturizer</p>
        <div className="flex justify-between mr-4 pb-2">
            <p>price</p>
            <p>Keep</p>
        </div>
      </div>
    </div>
    <div className="border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden">
      <img src="/img1.jpg" alt="your-image-description" className="max-h-full max-w-full rounded-lg" />
      <div className="flex flex-col">
        <h1 className ="flex-col font-semibold text-md mb-3">Genuine Orange Moisturizer</h1>
        <p className ="mb-2">genuine Orange Moisturizer</p>
        <div className="flex justify-between mr-4 pb-2">
            <p>price</p>
            <p>Keep</p>
        </div>
      </div>
    </div>
    <div className={`${isReadMoreShown? "hidden " : ""} lg:block border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden`}>
      <img src="/img1.jpg" alt="your-image-description" className="max-h-full max-w-full rounded-lg" />
      <div className="flex flex-col">
        <h1 className ="flex-col font-semibold text-md mb-3">Genuine Orange Moisturizer</h1>
        <p className ="mb-2">genuine Orange Moisturizer</p>
        <div className="flex justify-between mr-4 pb-2">
            <p>price</p>
            <p>Keep</p>
        </div>
      </div>
    </div>

    
    <div className={`${isReadMoreShown? "hidden " : ""} lg:block border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden`}>
      <img src="/img1.jpg" alt="your-image-description" className="max-h-full max-w-full rounded-lg" />
      <div className="flex flex-col">
        <h1 className ="flex-col font-semibold text-md mb-3">Genuine Orange Moisturizer</h1>
        <p className ="mb-2">genuine Orange Moisturizer</p>
        <div className="flex justify-between mr-4 pb-2">
            <p>price</p>
            <p>Keep</p>
        </div>
      </div>
    </div>
    <div className={`${isReadMoreShown? "hidden " : ""} lg:block border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden`}>
      <img src="/img1.jpg" alt="your-image-description" className="max-h-full max-w-full rounded-lg" />
      <div className="flex flex-col">
        <h1 className ="flex-col font-semibold text-md mb-3">Genuine Orange Moisturizer</h1>
        <p className ="mb-2">genuine Orange Moisturizer</p>
        <div className="flex justify-between mr-4 pb-2">
            <p>price</p>
            <p>Keep</p>
        </div>
      </div>
    </div>
    <div className={`${isReadMoreShown? "hidden " : ""} lg:block border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden`}>
      <img src="/img1.jpg" alt="your-image-description" className="max-h-full max-w-full rounded-lg" />
      <div className="flex flex-col">
        <h1 className ="flex-col font-semibold text-md mb-3">Genuine Orange Moisturizer</h1>
        <p className ="mb-2">genuine Orange Moisturizer</p>
        <div className="flex justify-between mr-4 pb-2">
            <p>price</p>
            <p>Keep</p>
        </div>
      </div>
    </div>
    
  </div>





</div>
    );
    

}