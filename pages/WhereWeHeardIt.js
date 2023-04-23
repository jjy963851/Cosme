

export default function WhereWeHeardIt(){
    return(
        <>
         <div className='h-screen flex justify-center items-center'>
        <div className="w-full mx-auto pt-2 ">
        <div className = " mx-auto border-2  bg-red-300 border-gray-200 border-opacity-60  py-16 lg:py-40 rounded-2xl shadow-md overflow-hidden">
        <div className = "flex flex-col w-5/6 pl-3">
            <h1 className = " italic font-bold text-3xl  lg:text-5xl pb-8 pl-3 lg:pb-10">Where We Heard It</h1>
            
            <p className="text-lg lg:text-xl pl-5 pb-3 lg:mb-5">This week, we went to Brooklyn to ask the locals, bypassers, and more. </p>
            <div className="flex flex-col pl-5">
                <p className="">Crown Heights</p>
                <p className="">Bedstuy</p>
                <p className="">Forte Greene</p>

            </div>
            
        </div>
        </div>
        </div>
        </div>
        </>
    );
}