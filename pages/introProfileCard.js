import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';



export default function IntroProfileCard(){

    const [isClicked, setIsClicked] = useState(true);
    return(
        <>
        <div className="w-full min-h-screen  lg:w-2/3 mx-auto py-5 ">
            <div className='flex justify-center gap-10 pb-5'>
                <h1 className='font-semibold'>For you</h1>
                <h1 className=''>Browse</h1>
            </div>
        <div className="flex justify-between px-3">
            <h1 className="font-semibold">JaeYong 27</h1>
            <h1 className ="">Follow</h1>

        </div>
        <h1 className='px-3'>Pittsburgh, PA, USA</h1>
        <div className="flex-col w-full h-72 lg: max-h-screen border-b-2 pt-2 border-gray-100 shadow-sm overflow-hidden">
        <img className=" w-full h-full  rounded-lg"
        src="/userProfile.jpg"
        alt="profile"/>
       

        </div>
        <div className="flex justify-end">
        <button 
        onClick={()=>setIsClicked(!isClicked)}
             className="pr-3 text-red-500">
                {isClicked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
        </button>
        </div>
        <div className="flex-col border-b-2 mx-auto border-gray-400 shadow-sm overflow-hidden pb-5">
            <p className=" leading-relaxed pt-3 px-5">
                The Ingredients are Listed in order of concetration, so the first few igredients listed make up the majority of the products. It is also important to research each ingredient to understand its purpose and potential effects on the skin.
            </p>
        </div>

        <div className='flex gap-x-6 px-5 pt-5'> 

        <div className='flex-col'>
        <h1 className=''>Skin Type</h1>
        <h1 className='py-5'> Combination</h1>
        </div>

        <div className='flex-col'>
        <h1 className=''>Concerns</h1>
        <h1 className='pt-5'>Blemish</h1>
        <h1 className=''>Dark Spot</h1>
        <h1 className=''>Sun Spot</h1>
        </div>
        <div className='flex-col'>
        <h1 className=''>Price Range</h1>
        <h1 className='pt-5'>$190</h1>
        </div>
        </div>

        </div>
        </>
    );
}