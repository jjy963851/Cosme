import Head from "next/head";
import CardProps from "@/components/card_props";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard } from "swiper";
import CardProps2 from "@/components/card_props2";
import 'swiper/css';
import PictureCard from "./picturecard";
import TextCard from "./textcard";


export default function Features(props){
    const post = props.post
    
    return(
<div>
   
      <Head>
        <title>Card feature</title>
        
      </Head>
      <div className ="h-full p-4 sm:w-1/2  lg:w-4/5 mx-auto">
        
      <Swiper
      rewind ={true}
      slidesPerView={1}
      
      autoHeight
      keyboard={{
        enabled: true,
      }}

      modules={[Keyboard]}
      
    >

          
          
            <SwiperSlide>
            <CardProps2  key = {post?.user_id} userName = {post?.name} content ={post?.description} productType = {post?.labels} price = "199.9"/>
            </SwiperSlide>
        
            {post?.steps.map((post)=>(
              <SwiperSlide key = {post?.id}>
              <CardProps key={post?.id} productTitle ={post?.step_type} ProductImage = {post} ProductName ={post?.product_name} BrandName = {post?.brand_name} ProductDetail = {post?.description}/>
              </SwiperSlide>
          ))} 
            <SwiperSlide>
              <PictureCard/>
            </SwiperSlide>
              <SwiperSlide>
                <TextCard/>
              </SwiperSlide>
    </Swiper>
      </div>
      </div>

    );
}



