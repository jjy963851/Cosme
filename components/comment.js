import { useState } from "react";


export default function CommentList(props){
    const[isReadMoreShown, setReadMoreShown] = useState(true)
    return(
            <div className = "flex flex-wrap">
            
            <p className ={`${isReadMoreShown ? "" : "hidden"} pr-2`}>
            {props.userComment}
            </p>
            <button
            onClick={() => setReadMoreShown(!isReadMoreShown)} 
            className ={`${isReadMoreShown ? "" : "hidden"}  px-1 border border-black font-semibold text-red-600 `}>
                x
            </button>
            </div>
    );
}