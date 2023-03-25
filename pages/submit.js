import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import React,{ useState} from "react";
import {useForm} from "react-hook-form";
import { useRouter } from "next/router";
import Concern from "@/components/concern";
export default function Submit(){
    const [isSubmitted, setSubmitted] =useState(false);
    const {register, handleSubmit} =useForm();
    const router = useRouter();
    const [concerns, setConcerns] = useState([]);
    const [labels, setLabel] = useState([]);
    const date = new Date();
    const id = Math.floor(Math.random() * 10000001);
    const data = router.query;

    function addLabel() {
      const label = document.getElementById("labels").value;
      if(label != ""){
        setLabel((arr) => [...arr, `${label}`]);
        document.getElementById("labels").value = "";
      }
    }

    function addConcern(){
      const concern = document.getElementById("concerns").value;
      if (concern ==""){

      }else{
        setConcerns((arr) => [...arr, `${concern}`]);
        document.getElementById("concerns").value = "";
      }
    }

    async function handleFormSubmit(data){
      setSubmitted(true);
      console.log(data);
      const finalformdata = {
      name: data.name,
      user_id: id,
      time_of_day: parseInt(data.day), //day
      description: data.description,
      concerns: labels,
      labels: concerns,
      created: date.toISOString(),
      };

      const JSONdata = JSON.stringify(finalformdata);
      console.log(finalformdata);
      const endpoint = `http://35.209.3.225:5000/routine`;
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSONdata,
      };

      //send the form data
      try {
        const response = await fetch(endpoint, options);
        const result = await response.json();
  
        if (result.message == "success") {
          setSubmitted(false);
          router.push("/step");
        } else {
          setSubmitted(false);
          alert(result.message);
        }
      } catch (err) {
        setSubmitted(false);
        alert(err);
      }
    }
    
    if(isSubmitted){
      return(
      <div className="flex items-center justify-center">
        <CircularProgress />
      </div>
      );
    }else{
    return(
        
        <div className ="min-w-min">
            <div className = "pl-5 mt-3">
            <Link href="/">
            <ArrowBackIcon/>
            </Link>
            </div>
        <div className ="flex flex-col p-3 mx-auto md:max-w-5xl">
            <form className="flex flex-col"
            onSubmit ={handleSubmit(handleFormSubmit)}
            method ="POST"
            >
            <div className="flex flex-col p-5">
                <label name ="name" className="font-semibold text-lg md:text-xl">
                What&apos your routine name?
                </label>
                {/** need to be fixed */}
                <input required name="name" 
                    id="name" type="text"
                    {...register("name", { required: true, maxLength: 80 })}
                className="pl-0 border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none"
                placeholder={data.name != "" ? data.name : "Enter routine name"}
                              
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
                <AddIcon onClick ={addConcern} />
              </div>

              <div className="flex flex-wrap">
                {concerns.map((concern, index) => (
                  <Concern name={concern} key ={index} />
                ))} 
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

                <AddIcon onClick ={addLabel} />
                </div>

                <div className="flex flex-wrap">
                {labels.map((label, index) => (
                  <Concern name={label} key={index} />
                ))} 
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
}