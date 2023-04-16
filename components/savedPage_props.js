import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
export default function SavedPageProps(){
    const [isClicked, setIsClicked] = useState(true);
    const [isDeleted, setIsDeleted] = useState(true);
    return(
        <>
        <div className={`${isDeleted ? "" : "hidden"}`}>
        <div className="border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden transition duration-300 transform lg:hover:scale-105 hover:scale-95">
            <button
            onClick={()=>setIsDeleted(!isDeleted)} 
            className='ml-40 lg:ml-96 text-xs text-indigo-400 font-semibold transition duration-300 transform lg:hover:scale-105 hover:scale-105'>remove</button>
      <img src="/img1.jpg" alt="your-image-description" className=" w-full rounded-lg" />
      <div className="flex flex-col">
        <h1 className ="flex-col font-semibold text-md mb-3">Genuine Orange Moisturizer</h1>
        <p className ="mb-2">genuine Orange Moisturizer</p>
        <div className="flex justify-between mr-4 pb-2">
            <p>price</p>
            <p>Keep</p>
        </div>
       
        
        <button 
        onClick={()=>setIsClicked(!isClicked)}
        className="flex justify-end mr-4 text-red-500">{isClicked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}</button>
      
      </div>
    </div>
    </div>
        
        </>
    );
}