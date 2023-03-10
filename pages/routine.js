import Head from 'next/head'
import Features from './Features'
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Pagination, Navigation} from "swiper";
import CardProps2 from '@/components/card_props2'
import Layout from '@/components/layout';
import 'swiper/css';

export default function Routine({projects}){
    return(
        <>
        <Layout>
        <Swiper
      direction={"vertical"}
      
      slidesPerView={1}
      height = {"1580"}

      keyboard={{
        enabled: true,
      }}
      modules={[Keyboard, Pagination, Navigation]}
    >
        {projects.data.map((post, index) => (
           <SwiperSlide key={index}>
           <Features key = {index} post = {post}/> 
           
         </SwiperSlide>
        ))}
         
       
      
        </Swiper> 



        </Layout>
        </>

    );
}

export async function getServerSideProps(){
    const res = await fetch(`http://34.133.106.148:5000/routine`);
    const  projects= await res.json();
  
    return{
      props: {projects},
  
    };
  
  }