export default function PictureCard(props){
    return(
        <>
         <div className = "p-4 sm:w-1/2 md:w-full lg:w-auto ">
         <div className = "h-full border-2 border-gray-400 border-opacity-60 rounded-lg overflow-hidden py-10 sm:py-10 ">
         <img
            className="lg:h-72 md:h-48 w-full
                       object-contain object-center"
            src={props.imageSrc}
            alt="card image"
            />

          </div>
         </div>
        </>
    );
}