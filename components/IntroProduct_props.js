import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function IntroProduct_props(props){
    const [isClicked, setIsClicked] = useState(true);
    const [isRead, setIsRead] = useState(true);
    const [isRead1, setIsRead1] = useState(true);
    const [isRead2, setIsRead2] = useState(true);
    return(
        <>
        
        <h1 className="mx-auto font-semibold py-3">The Rice Wash Skin-Softenign Cleanser</h1>
        <p className="">Aveeno</p>
        <img
        className="w-full lg:w-3/4 h-5/6 mx-auto object-cover rounded-lg "
        alt=""
        src="https://www.byrdie.com/thmb/gDvPcIIdqlCU_8f3Wz6VUM_uM_A=/800x800/filters:no_upscale():max_bytes(150000):strip_icc()/curologyacnebodywash-240373da3c26495a8957bba626b538a9.jpg"

        />
        <div className="flex justify-between">
            <p>$95.00 USD</p>
            <button 
        onClick={()=>setIsClicked(!isClicked)}
             className="pr-3 text-red-500">
                {isClicked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
        </button>       
            </div>
        <div className="flex flex-col">
            <div className="flex justify-between pt-8">
                <h1 className="font-semibold text-lg">Good For</h1>
                <button 
        onClick={()=>setIsRead(!isRead)}
             className="pr-3 ">
                {isRead ? <AddIcon/> : <RemoveIcon/>}
        </button>      
            </div>
            <span className={`${isRead? "":"hidden"} inline-flex items-center  leading-none text-sm  pt-8  border-gray-700`}>
                <div className ="flex items-center flex-wrap gap-5 pl-5 ">
                    <span className =" ring ring-offset-4 ring-slate-600 text-gray-600 font-semibold rounded-sm overflow-hidden">Sun</span>
                    <span className ="ring ring-offset-4 ring-slate-600 text-gray-600 font-semibold rounded-sm overflow-hidden">Sun Spots</span>
                    <span className ="ring ring-offset-4 ring-slate-600 text-gray-600 font-semibold rounded-sm overflow-hidden" >Acne</span>
                    <span className ="ring ring-offset-4 ring-slate-600 text-gray-600 font-semibold rounded-sm overflow-hidden">Atopic Dermatits</span>
                </div>
                </span>
            <div className="flex justify-between pt-10 pb-8">
                <h1 className="font-semibold text-lg">Whats good</h1>
                <button 
        onClick={()=>setIsRead1(!isRead1)}
             className="pr-3 ">
                {isRead1 ? <AddIcon/> : <RemoveIcon/>}
        </button>   
            </div>
            <div className="flex-col">
                <p className={`${isRead1? "" : "hidden"} leading-relaxed px-3 pb-5`}>
                    This is the best fucking peice of liquid gold that ive gotten my hands on. You can smother this elixir of youth onto your face for an instant shot of rejuvination and make those years melt away emporarily for a good 2 hours before you have to plaster this shit onhere
                </p>

                <div className="flex justify-between pb-8">
                    <h1 className="font-semibold text-lg">Ingrednts</h1>
                    <button 
        onClick={()=>setIsRead2(!isRead2)}
             className="pr-3 ">
                {isRead2 ? <AddIcon/> : <RemoveIcon/>}
        </button>   

                </div>
                <ul className={`${isRead2? "" : "hidden"} pb-10`}>
                    <li>Water/Eau (0)</li>
                    <li>Dicapryly Carbonate (1-3)</li>
                    <li>Glycerin (0)</li>
                    <li>Ceteary Alchol (0)</li>
                    <li>Cetearyl Olivate(1)</li>
                    <li>Sorbitan Olivate(1)</li>
                    <li>Sclerocarya Birrea Seed Oil(1)</li>
                    <li>Bacillus/Soybeam/ Folic Acid Ferment(0-1)</li>
                    <li>Nymphaea Alba Root Extract (1)</li>
                    <li>sh-Oligopeptide-1</li>
                    <li>sh-Oligopeptide-2</li>
                    <li>sh-Polypeptide-1(1)</li>
                    <li>sh-Polypeptide-9 (1)</li>
                    <li>sh-Polypeptide-11 (1)</li>
                    <li>Copper Palmitoyl Heptatpeptide-14 (0-4)</li>
                    <li>Heptapeptide-15 Palmitate (0-1)</li>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>

            </div>
        </div>








     
        
        </>
    );
}