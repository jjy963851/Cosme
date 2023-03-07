export default function TextCard(props){
    return(
        <>
         <div className = "p-4 sm:w-1/2 md:w-auto lg:w-auto">
         <div className = "h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden py-20 px-3">

         <p className ="leading-relaxed mb-3 py-10">
            {props.content}
            </p>

            </div>
         </div>
        </>
    );
}