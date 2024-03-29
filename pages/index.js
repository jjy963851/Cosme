
import Head from 'next/head'
import Layout from '@/components/layout';
import 'swiper/css';
import GPT from './chatgpt';
import Login from './login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './mainpage';
import IntroPage from './introPage';
import QuestionPage from './questionPage';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard } from "swiper";
import 'swiper/css';
import QuestionProps from '@/components/question_props';
import IntroProps from '@/components/intro_props';
import FirstintroPage from './firstintroPage';
import Insturction from './Instruction';
import WhereWeHeardIt from './WhereWeHeardIt';
import IntroProfileCard from './introProfileCard';
import IntroProfileProduct from './IntroProfileProduct';
export default function Home({qst}) {
 
 
  return (
    <>
      <Head>
        <title>Cosme</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<Layout>*/}
        
       
      <div className='py-2 lg:pt-2  '>
      <Swiper
      className='min-h-screen max-h-screen lg:w-3/4 mx-auto '
      rewind ={true}
      slidesPerView={"1"}
      autoHeight
      direction={"vertical"}
      threshold = {"30"}
      speed={500}
      keyboard={{
        enabled: true,
      }}
     
      modules={[Keyboard]}
    >
        <SwiperSlide>
          <div className='px-5'>
          <Insturction/>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='px-5'>
          <WhereWeHeardIt/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
       
          <IntroProfileCard/>
          
        </SwiperSlide>

        

        {qst.data.map((post, index) => (
          <>
        <SwiperSlide key={index}>
          <div className="h-screen flex flex-col justify-center items-center">
       
        <QuestionProps shopName ={post?.name} city ="NY, brooklyn" description = {post?.description} recommendation= {post?.id} skinType ={post?.concerns} age ="26" concern1={post?.labels} concern2= {post?.labels}/>
        </div>
       </SwiperSlide>
       <SwiperSlide key={index +1}>
       <div className="h-screen flex justify-center items-center ">
        <FirstintroPage key = {index} post = {post} />
        </div>
        </SwiperSlide>
       </>
         ))}
         
         
          
      
       </Swiper>
      {/*
      
      {qst.data.map((post, index) => (
          
           ))} 
       
      </Layout> 

*/}
      </div>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('http://35.209.3.225:5000/routine');
   const qst= await res.json();
 
   return{
     props: {qst},
 
   };

  }
