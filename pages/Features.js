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
{/*p-4 sm:w-1/2  lg:w-4/5*/}
      <Head>
        <title>Card feature</title>
        
      </Head>
      <div className ="h-full w-screen px-4 md:max-w-lg lg:max-w-4xl mx-auto">
        
      <Swiper
      className = "max-h-screen min-h-screen"
      rewind ={true}
      slidesPerView={"auto"}
      autoHeight
      keyboard={{
        enabled: true,
      }}
      speed ={500}

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



