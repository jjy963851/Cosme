import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Layout from "@/components/layout";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProfilePage(){
    const [isClicked, setIsClicked] = useState(true);
    const [isClicked1, setIsClicked1] = useState(true);
    return(
        // this one will be components later.
        <>
        
        <Layout>
        <div className="w-full min-h-screen  lg:w-2/3 mx-auto py-5 " >
            <div className="flex flex-col mx-auto">
                <img className="rounded-full w-30 h-30 mx-auto "
                alt="Profile Image"
                src="/userProfile.jpg"
                />
                <h1 className="flex-col mx-auto font-semibold text-lg pt-4">jjy963851</h1>
                <div className="flex mx-auto gap-x-3 pt-3">
                    <a href='https://www.facebook.com/' 
                    className=""><FacebookIcon/></a>
                    <a href='https://www.youtube.com/'
                    className=""><YouTubeIcon/></a>
                    <a href='https://www.instagram.com/'
                    className=""><InstagramIcon/></a>
                     </div>
            <div className='flex-col pl-16 pt-16 border-b-2 py-5 border-gray-100 shadow-sm overflow-hidden'>
                <h1 className='font-semibold text-lg pb-3'>About me</h1>
                <p className=' leading-relaxed '>Hello, my name is Jaeyong Chang. Im recently concering about my skin problem which is dry skin and itchy. Sometimes I have blemish and dry skin so I used to use moisture and lotion. But I heard this website is very useful so that I started to look around and found very usefull product in here. Which is aveeno skin baby moisture cream. When I saw it firstime it was shinging as gold. When I pour it to my face, suddenly my skin goes back to 11 years old. Now I have very confidence in my life and I took all A grades in my classes. Thank you</p>
            </div>

            <div className='flex-col pl-16 pt-16 border-b-2 py-5 border-gray-100 shadow-sm overflow-hidden'>
                <h1 className="font-semibold text-lg pb-3">Skin Concerns</h1>
                <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1  border-gray-700">
                <div className ="flex items-center flex-wrap gap-5 ">
                    <span className =" ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden">Sun</span>
                    <span className ="ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden">Sun Spots</span>
                    <span className ="ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden" >Acne</span>
                    <span className ="ring ring-offset-4 ring-slate-300 text-gray-600 font-semibold rounded-md overflow-hidden">Atopic Dermatits</span>
                </div>
                </span>
            </div>
            <div className='flex-col pl-16 pt-16 border-b-2 py-5 border-gray-100 shadow-sm overflow-hidden'> 
                <h1 className='font-semibold text-lg pb-3'> Shelf</h1>
                <div className='flex gap-x-6'>
                    <button onClick={() =>setIsClicked(!isClicked)} 
                    className={`${isClicked ? "" : "bg-indigo-500"} border-2 px-2 py-1 font-semibold text-lg rounded-md`}> Skin Care </button>
                    
                    <button onClick={() =>setIsClicked1(!isClicked1)} 
                    className={`${isClicked1 ? "" : "bg-indigo-500"}  border-2 px-2 py-1 font-semibold text-lg rounded-md`}> Skin Care </button>
                    
                  
                </div>
            </div>
            <div className='flex-col pl-16 pt-16 border-b-2 py-5 border-gray-100 shadow-sm overflow-hidden'> 
            <h1 className='font-semibold text-lg pb-3'> Routine</h1>

            </div>

            <div className='flex-col pl-16 pt-16 border-b-2 py-5 border-gray-100 shadow-sm overflow-hidden'> 
            <h1 className='font-semibold text-lg pb-3'> Products</h1>

            </div>


            </div>
        
        </div>
        </Layout>
        </>
    );
}