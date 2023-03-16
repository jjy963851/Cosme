export default function PictureCard(props){
    return(
        <>
         <div className = " py-20">
         <div className = "h-full w-3/4 mx-auto border-b-2border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
         <img
            className="w-full mx-auto lg:w-3/6 pb-2 rounded-xl "
            src="/img1.jpg"
            alt="card image"
            
            />
            <p className = "mx-auto">
                THis should be real data
            </p>
          </div>
         </div>
        </>
    );
}