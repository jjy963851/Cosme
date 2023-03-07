import CardProps from "@/components/card_props";
import { ArrowRightIcon, EyeIcon, ChatIcon} from "@heroicons/react/outline"
export default function Card(){
    return(
        <div>
            <CardProps
            ProductType = "Moisturizer"
            ProductImage = "https://picsum.photos/id/188/720/400/"
           ProductName = "Cleanser"
            BrandName = "Aveeno // brand"
            ProductDetail = " abasdfljslfjlslflsjfl"
            Concerns = "Spots"
            Concerns1 = "Sun Spots"
            Concerns2 = "Acne"
            Concerns3 = "Atopic"
            />

          
        </div>
    );
}

export  function Card1(){
    return(
        <div>
            <CardProps
             ProductType = "Cleanser"
             ProductImage = "https://picsum.photos/id/188/720/400/"
            ProductName = "Cleanser"
             BrandName = "Aveeno // brand"
             ProductDetail = " abasdfljslfjlslflsjfl"
             Concerns = "Spots"
             Concerns1 = "Sun Spots"
             Concerns2 = "Acne"
             Concerns3 = "Atopic"
             />
           

          
        </div>
    );
}