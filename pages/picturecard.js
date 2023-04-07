import { useState } from "react";
import CommentList from "@/components/comment";
import { useRouter } from "next/router";

export default function PictureCard({result}){
    const [userName] = useState("");
    const [comment, setComment] = useState("");
    const [ feedComments, setFeedComments] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const router = useRouter();
    const data = router.query;
    
    async function handlePicture(data){
        const profileData ={
            image : data.routine_image_url,

        }
        
      
      const endpoint = `http://35.209.3.225:5000/image/routine`;
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);
      const result = await response.json();

      return{
        props: {result},
      }
    }

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
            
            alt="card image"
            
            />
            <div className="">
            <input 
            type="text"
            className="lg:px-12 border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none "
            placeholder=""
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

