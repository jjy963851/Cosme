import Head from 'next/head'
import Features from './Features'
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Pagination, Navigation} from "swiper";
import CardProps2 from '@/components/card_props2'
import Layout from '@/components/layout';
import 'swiper/css';
import TextCard from './textcard';
import CardProps from '@/components/card_props';

export default function Routine({projects}){
    return(
        <>
        <Layout>
           <Swiper
      className = "max-h-screen min-h-screen w-screen md:max-w-lg lg:max-w-4xl mx-auto"     
     slidesPerView={"auto"}
     rewind ={true}
      direction={"vertical"}
      autoHeight
      followFinger={false}
      speed={1000}
      keyboard={{
        enabled: true,
      }}
     
      modules={[Keyboard]}
    >
        {projects.data.map((post, index) => (
           <SwiperSlide key={index}>
           <Features key = {index} post = {post} /> 
           
         </SwiperSlide>
        ))}

        
        </Swiper>      
        </Layout>
        </>
        
        

    );
}

export async function getServerSideProps(){
    const res = await fetch(`http://35.209.3.225:5000/routine`);
    const  projects= await res.json();
  
    return{
      props: {projects},
  
    };
  
  }