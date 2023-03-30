import Link from "next/link";
import Image from "next/legacy/image";

export default function MainPageCard(props){
return(
<div className ="w-2/3 mx-auto  border-b-2 border-gray-200 border-opacity-60  py-5 rounded-lg overflow-hidden">
<div className ="flex gap-x-3">
<div className="w-1/2">
    <img src="/img1.jpg" alt="card" className="w-full h-full object-cover rounded-lg"/>
    
</div>
    <div className="w-1/2 p-6">
       <h2 className="text-xl font-bold mb-4">@madbunny</h2>
       <p className ="text-gray-700 mb-4">card desicripton blah goes here something yes yes </p>
       <h1 className="text-xl font-bold mb-4"> SpongeBob Square Pants Routine</h1>
       <p className ="text-gray-700 mb-4">card desicripton blah goes here something yes yes</p>
       <div className="flex end space-x-10 my-6">
        <p>Price</p>
        <p>Steps</p>
        <p>Type</p>
       </div>
       <div className ="flex flex-wrap gap-3">
        <p className ="text-blue-500">#tag</p>
        <p className ="text-blue-500">#tag</p>
        <p className ="text-blue-500">#tag</p>
       </div>
    </div>



</div>
</div>
);
}