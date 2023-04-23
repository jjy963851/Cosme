import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Pagination, Navigation} from "swiper";
import IntroPage from './introPage';
import IntroPage2 from './introPage2';

export default function Insturction(){
    return(
<>
<Swiper initialSlide={1} loop
      className = "min-h-screen max-h-screen mx-auto"     
      rewind ={true}
      slidesPerView={"1"}
     
      autoHeight
      keyboard={{
        enabled: true,
      }}
      speed ={500}

      modules={[Keyboard]}
      
    >  
      
  <SwiperSlide>
    <IntroPage2/>
  </SwiperSlide>
  <SwiperSlide>
    <IntroPage/>
  </SwiperSlide>
  <SwiperSlide>
    <IntroPage2/>
  </SwiperSlide>




      </Swiper>
</>

    );
}