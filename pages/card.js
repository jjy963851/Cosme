import CardProps from "@/components/card_props";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Pagination, Navigation} from "swiper";
import 'swiper/css';
import { ArrowRightIcon, EyeIcon, ChatIcon} from "@heroicons/react/outline"
export default function Card(props){
    const post = props.post

    return(
        <div>    
           {post.steps.map((post)=>(
              <CardProps key={post.id} productTitle ={post.step_type} ProductImage = {post} ProductName ={post.product_name} BrandName = {post.brand_name} ProductDetail = {post.description}/>
          ))}
          
        </div>
    );
}


