import Head from "next/head";
import CardProps from "@/components/card_props";
import Card, { Card1 } from "./card";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, { Navigation, Pagination, Keyboard } from "swiper";
import PictureCard from "./picturecard";
import CardProps2 from "@/components/card_props2";
import TextCard from "./textcard";


export default function Features(){
SwiperCore.use([Navigation, Pagination, Keyboard])
  const  data = [
    {userName : "JaeYong",
      content : "hello Im from Raoche",
      productType: "aveeno",
      price: "199.2"
  },
    {/*{
      userName : "Jade",
      content : "hello Im from Upit",
      productType: "heineken",
      price: "199.2"


    },
    {
      userName : "Jake",
      content : "hello Im from Duncae",
      productType: "Chrimson",
      price: "199.2"
    },
*/}
  ]
    
  
    return(
<div>
   
      <Head>
        <title>Card feature</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className ="container px-5 py-10 mx-auto">
      <Swiper
      direction={"vertical"}
     
      slidesPerView={1}
      height = {"1580"}

      keyboard={{
        enabled: true,
      }}
      modules={[Keyboard, Pagination, Navigation]}
    >

        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
    </Swiper>
      </div>
</div>
    );
}

{/** 
export async function getServerSideProps(){
  const res = await fetch(`http://34.133.106.148:5000/routine${DATABASE_ID}/query`)

}
*/}
