import Head from "next/head";
import CardProps from "@/components/card_props";
import Card, { Card1 } from "./card";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard } from "swiper";
import PictureCard from "./picturecard";
import CardProps2 from "@/components/card_props2";
import TextCard from "./textcard";
import { data } from "autoprefixer";


export default function Features(props){
const post= props.post
  
    return(
<div>
   
      <Head>
        <title>Card feature</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className ="container px-5 py-10 mx-auto">
      <Swiper
      rewind ={true}
      slidesPerView={1}
      keyboard={{
        enabled: true,
      }}
      modules={[Keyboard, Pagination, Navigation]}
    >
       
          <SwiperSlide>
          <CardProps2 key = {post} userName = {post} content ={post} />
          </SwiperSlide>
          <SwiperSlide><Card/></SwiperSlide>
          <SwiperSlide><Card1/></SwiperSlide>
      
    </Swiper>
      </div>
</div>
    );
}



