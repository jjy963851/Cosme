import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import React,{ useState} from "react";
import {useForm} from "react-hook-form";
export default function Submit(){
    const [isSubmitted, setSubmitted] =useState(false);
    const {register, handleSubmit} =useForm();


    return(
        
        <div className ="min-w-min">
            <div className = "pl-5 mt-3">
            <Link href="/">
            <ArrowBackIcon/>
            </Link>
            </div>
        <div className ="flex flex-col p-3 mx-auto md:max-w-5xl">
            <form className="flex flex-col"
            onSubmit
            >
            <div className="flex flex-col p-5">
                <label name ="name" className="font-semibold text-lg md:text-xl">
                What&aposs your routine name?
                </label>
                {/** need to be fixed */}
                <input required name="name" 
                    id="name" type="text"
                    {...register("name", { required: true, maxLength: 80 })}
                className="pl-0 border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none"
                //placeholder={data.name != "" ? data.name : "Enter routine name"}
                              
                />
            </div>

            <div className =" flex flex-col p-5">
            <label className="font-semibold text-lg md:text-xl">
                Morning or Evening?
              </label>
              <div className="flex flex-row items-center grow-0 mt-4 space-x-3">
              <label name="day">AM</label>
                    <input
                    type="radio"
                    value="0"
                    name="day"
                    className="border-2 border-slate-800 p-2 appearance-none checked:bg-gray-500"
                    placeholder="AM"
                    {...register("day", { required: true })}
                    />

                <label name="day">PM</label>
                <input
                  type="radio"
                  value="1"
                  className="border-2 border-slate-800 p-2 appearance-none checked:bg-gray-500"
                  {...register("day", { required: true })}
                />
              </div>
            </div>
                 
            <div className=" flex flex-col p-5">
              <label className="font-semibold text-lg md:text-xl">
                Describe your routine
              </label>
              <textarea
                name="description"
                id="description"
                {...register("description", { required: true,maxLength:1000 })}
                className="pl-0 border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none"
                placeholder={ "Enter routine description" }
                type="text"
              />


            </div>
            <div className="flex flex-col p-5">
              <label className="font-semibold text-lg md:text-xl">
                Skin concerns
              </label>
              <div className="flex">
                <input
                  name="concerns"
                  id="concerns"
                  {...register("concerns")}
                  className="flex-1 pl-0 border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none"
                  placeholder="Enter up to 10 labels to tag your routine"
                  type="text"
                />
                <AddIcon onClick />
              </div>

              <div className="flex flex-wrap">
                {/**{concerns.map((concern) => (
                  <Concern name={concern} />
                ))} */}
              </div>
            </div>
            
            <div className="flex flex-col p-5">
              <label className="font-semibold text-lg md:text-xl">
                Other concerns
              </label>

              <div className="flex">
                <input
                  name="labels"
                  id="labels"
                  {...register("labels")}
                  className="pl-0 flex-1 border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none"
                  placeholder="Enter up to 10 labels to tag your routine"
                  type="text"
                />

                <AddIcon onClick />
                </div>

                <div className="flex flex-wrap">
                {/**{labels.map((label) => (
                  <Concern name={label} />
                ))} */}
              </div>
                </div>

                <div className="flex justify-center items-center">
              <input
                className="px-14 py-2 text-white bg-slate-400 rounded-lg shadow-lg transform hover:scale-105"
                type="submit"
                placeholder="Save"
              />
            </div>


        </form>
        </div>
        </div>
        
    );
}