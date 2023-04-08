import IntroProps from "@/components/intro_props";
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Pagination, Navigation} from "swiper";
import IntroPage from "./introPage";

export default function VerticalPage(){
    return(
        <>
         <Swiper
      className = " max-h-screen min-h-screen"     
     slidesPerView={"1"}
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
        <SwiperSlide>
        <IntroPage/>
        </SwiperSlide>
        <SwiperSlide>
        <IntroProps productName ="Cleanser"  productBrand ="Alveeno" productDescription="this is for the face bla bla"/>
        </SwiperSlide>
        <SwiperSlide>
        <IntroProps productName ="Lotion"  productBrand ="Alveeno" productDescription="this is for the face bla bla"/>
        </SwiperSlide>
        <SwiperSlide>
        <IntroProps productName ="Oil"  productBrand ="Alveeno" productDescription="this is for the face bla bla"/>
        </SwiperSlide>
        <SwiperSlide>
        <IntroProps productName ="Texture"  productBrand ="Alveeno" productDescription="this is for the face bla bla"/>
        </SwiperSlide>


    </Swiper>
        </>
    );
}