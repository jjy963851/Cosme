
import Layout from "@/components/layout";
import SavedPageProps from "@/components/savedPage_props";
import { useState } from "react";
export default function SavedPage(){
    const [isClicked, setIsClicked] =useState(true);
    return(
        <>
        <Layout>
        <div className="w-full min-h-screen  lg:w-2/3 mx-auto py-5 " >
        
            <h1 className=" pl-3 mx-auto font-bold text-3xl">
                Saved
            </h1>
            <div className="grid grid-cols-2  gap-4 p-4"> 
            
            <SavedPageProps/>
            
            <SavedPageProps/>
            <SavedPageProps/>
            <SavedPageProps/>
            <SavedPageProps/>
            <SavedPageProps/>
            <button className="pl-48 pt-3 lg:pt-6 lg:pl-96 text-slate-500">
                LoadMore
            </button>
            </div>
            
        </div>
        </Layout>
        </>
    );
}