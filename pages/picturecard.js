import { useState } from "react";



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
        <>
         <div className = " ">
         <div className = "mx-auto border-b-2border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
         <img
            className="w-1/2 mx-auto lg:w-1/2 pb-2 rounded-xl "
            src="/img1.jpg"
            alt="card image"
            
            />
            
            <input 
            type="text"
            className=" ml-28 lg:ml-52 border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none "
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
           px-3 py-1 text-white bg-slate-400 rounded-lg shadow-lg transform hover:scale-105 
            `}
            onClick ={post}
            disabled={isValid ? false : true}
            
            >
                Submit
            </button>
            <div className = "ml-28 lg:ml-52">
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
        </>
    );
}

export function CommentList(props){
    return(
            <>
            <p className=""> {props.userName}</p>
            <div className ="">
            {props.userComment}
            </div>
            </>
    );
}