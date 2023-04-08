
export default function IntroProps(props){
    return(
        <>
        <div className="w-full h-full lg:w-2/3 mx-auto py-5">
        <div className = " mx-auto border-2 bg-red-300 border-gray-200 border-opacity-60  py-10 rounded-xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-5/6 pl-3">
            <h1 className = " font-bold text-3xl pb-2"> {props.productName}</h1>
            <p className = "font-semibold text-xl pb-5">{props.productBrand}</p>
            <p classname = "font-semibold text-md pb-3">{props.productDescription}</p>
            
            
        </div>
        </div>
        <div className="py-2"></div>
        <div className = " mx-auto border-2 bg-slate-200 border-gray-200 border-opacity-60  py-3 rounded-xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-4/5 pl-3">
            <h1 className = " font-bold text-3xl pb-2"> Profile</h1>
            <p classname = "font-semibold text-md pb-3">Skin type, age, target concerns</p>
            
        </div>
        </div>
        </div>


        
       
        
        </>
        
    );
}