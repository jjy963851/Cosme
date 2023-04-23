import IntroProps from "@/components/intro_props";
import 'swiper/css';
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Pagination, Navigation} from "swiper";
import IntroPage from "./introPage";
import QuestionPage from "./questionPage";
import QuestionProps from "@/components/question_props";
import CardProps from "@/components/card_props";
import IntroProfileCard from "./introProfileCard";
export default function FirstintroPage(props){
    const post = props.post;


    return(
        <>
         <Swiper
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
       

       {post?.steps.map((post, index)=>(
        <>
        <SwiperSlide key = {index}> 
       
        <CardProps key={post?.id} productTitle ={post?.step_type} ProductName ={post?.product_name} BrandName = {post?.brand_name} ProductDetail = {post?.description}
              productImage = {post?.image_url}
              />
        </SwiperSlide>
        </>
        ))} 

{/** 
              
              <IntroProps productName ={post?.productName}  productBrand ={post?.brand_name} productDescription={post?.description}/>*/}
    </Swiper>
        </>
    );
}