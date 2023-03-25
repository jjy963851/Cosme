import { useState } from "react";
import CommentList from "@/components/comment";


export default function PictureCard(props){
    const [userName] = useState("");
    const [comment, setComment] = useState("");
    const [ feedComments, setFeedComments] = useState([]);
    const [isValid, setIsValid] = useState(false);

    const post = e =>{
        const copyFeedComments = [...feedComments];
        copyFeedComments.push(comment);
        setFeedComments(copyFeedComments);
        setComment('');
    }
    return(
        <div className ="min-w-min">
         <div className = "h-full border-b-2border-gray-200 border-opacity-60 rounded-lg overflow-hidden mt-10 ">
         <div className = "flex items-center flex-col">
         <img
            className="w-1/2 mx-auto lg:w-1/2 pb-2 rounded-xl"
            src="/img1.jpg"
            alt="card image"
            
            />
            <div className="">
            <input 
            type="text"
            className="lg:px-12 border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none "
            placeholder="Leave your thought.."
            onChange={e =>{
                setComment(e.target.value);
            }}
            onKeyUp={e =>{
                e.target.value.length >0 ? setIsValid(true) : setIsValid(false);
            }}
            value={comment}
            />
            <button
            type="button"
            className ={`${comment.length >0 ? "submitCommentActive" : "submitCommentInactive"} 
           px-3 py-1 lg:px-5 text-white bg-slate-400 rounded-lg shadow-lg transform hover:scale-105 
            `}
            onClick ={post}
            disabled={isValid ? false : true}
            
            >
                Submit
            </button>
            
            {feedComments.map((commentArr, i)=>{
                return(
                    <CommentList
                        userName = {userName}
                        userComment = {commentArr}
                        key= {i}
                    
                    />
                )
                })}    
                 </div> 
          </div>
         </div>
        </div>
    );
}

