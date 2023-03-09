import Head from "next/head";
import CardProps from "@/components/card_props";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard } from "swiper";
import CardProps2 from "@/components/card_props2";



export default function Features(props){
    const post = props.post
    
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
          <CardProps2  key = {post?.id} userName = {post?.name} content ={post?.description} productType = {post?.labels} price = "199.9"/>
          
          </SwiperSlide>
          
          {post?.steps.map((post)=>(
              <SwiperSlide key = {post?.id}>
              <CardProps key={post?.id} productTitle ={post?.step_type} ProductImage = {post} ProductName ={post?.product_name} BrandName = {post?.brand_name} ProductDetail = {post?.description}/>
              </SwiperSlide>
          ))} 
             
      
    </Swiper>
      </div>
</div>
    );
}



