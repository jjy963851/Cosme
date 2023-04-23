import Head from 'next/head'
import Features from './Features'
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Pagination, Navigation} from "swiper";
import CardProps2 from '@/components/card_props2'
import Layout from '@/components/layout';
import 'swiper/css';
import { useState } from 'react';
import ROUTINE_API from '@/config';
import SearchBar from './searchBar';

export default function Routine({data}){
  
    return(
        <>
        
        <Layout>
           <Swiper
      className =  {`max-h-screen min-h-screen  lg:w-3/4 mx-auto `}    
     slidesPerView={"auto"}
     rewind ={true}
      direction={"vertical"}
      autoHeight
      
      threshold = {"30"}
      speed={500}
      keyboard={{
        enabled: true,
      }}
     
      modules={[Keyboard]}
    >
        {data.data.map((post, index) => (
           <SwiperSlide key={index}>
           <Features key = {index} post = {post} /> 
           
         </SwiperSlide>
        ))}

         


        </Swiper>      
        </Layout>
        </>
        
        

    );
}



export async function getStaticProps(){
    const res = await fetch('http://35.209.3.225:5000/routine');
    const data= await res.json();
  
    return{
      props: {data},
  
    };
  
  }