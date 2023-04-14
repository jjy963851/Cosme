import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleDownTwoToneIcon from '@mui/icons-material/ArrowCircleDownTwoTone';
export default function IntroPage(){
    return(
        <>
        <div className="w-full h-full lg:w-2/3 mx-auto ">
        <div className = " mx-auto border-2 bg-amber-50 border-gray-200 border-opacity-60  py-10 rounded-xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-5/6 pl-3">
            <h1 className = " font-bold text-3xl pb-2"> Where we heard it</h1>
            <p className = "font-semibold text-xl pb-5">The Neighborhood</p>
            <p classname = "font-semibold text-md pb-3">Swipe up<ArrowCircleUpTwoToneIcon/> and Down<ArrowCircleDownTwoToneIcon/> to get to the next post</p>
            <p classname = "font-semibold text-md ">Swipe Left<ArrowCircleLeftTwoToneIcon/> and Right<ArrowCircleRightTwoToneIcon/> to see the product details</p>
            
        </div>
        </div>

        <div className="py-2"></div>
        <div className = " mx-auto border-2 bg-slate-200 border-gray-200 border-opacity-60  py-3 rounded-xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-4/5 pl-3">
            <h1 className = " font-bold text-3xl pb-2"> Question</h1>
            <p classname = "font-semibold text-md pb-3">Skin type, age, target concerns</p>
            
        </div>
        </div>
        </div>


        
        
       
        </>
        
    );
}