
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import Concern from "../components/concern";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Head from "next/head";

export default function Login(){
    const router = useRouter();
    const data = router.query; //edit routine data
    const[isReadMoreShown, setReadMoreShown] = useState(true);

    {/*async function handleGoogleSignIn(){
        signIn('google',{callbackUrl:"http://localhost:3000"})
       }*/}

       const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm(); //handling our form submission
      const [isSubmitted, setSubmitted] = useState(false); //check if form was submitted
    
      async function handleFormSubmit(data) {
        setSubmitted(true);
        //TODO: Show a loading dialog
        console.log(data);
        // Get data from the form.
        const finalformdata = {
          email: data.email,
          password: data.password,
        };
         // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(finalformdata);
    console.log(finalformdata);
    // API endpoint where we send form data.
    const endpoint = `http://35.209.3.225:5000/login`;
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json;  charset=UTF-8",
      },
      body: JSONdata,
    };
    try {
        const response = await fetch(endpoint, options);
        const result = await response.json();
  
        if (result.message == "success") {
          console.log(result);
          setSubmitted(false);
          alert("Loggedin successfully");
          router.push("/chatgpt");
          // handle session
        } else {
          setSubmitted(false);
          alert(result.message);
        }
      } catch (err) {
        setSubmitted(false);
        alert(err);
      }
    }
    if (isSubmitted) {
        return (
          <div className="flex items-center justify-center">
            <CircularProgress />
          </div>
        );
      } else {  
    return(

        <>
          
        <div className ="flex flex-col p-3 mx-auto lg:max-w-5xl">
            <div className = "mx-auto flex flex-col text-2xl lg:text-6xl text-purple-600 font-bold mt-32 mb-20">
                Just a Nanba
            </div>
              
            <button onClick={() => setReadMoreShown(!isReadMoreShown)} 
             className={` ${isReadMoreShown ? "mb-20 lg:mb-40 " : "hidden"}block text-sm lg:text-xl w-auto border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none `}>
                {isReadMoreShown ? "sign in" : "go back"}
              </button>
              <div className={` ${isReadMoreShown ? "hidden" : ""} flex flex-col p-3 `}>
              <form
            className="flex flex-col"
            onSubmit={handleSubmit(handleFormSubmit)}
            method="POST"
          >
            <div className="flex flex-col p-5">
              <label name="Email" className="font-semibold text-lg md:text-xl">
                Email
              </label>
              <input
                required
                name="email"
                id="email"
                type="text"
                {...register(
                  "email",
                  { required: true, maxLength: 80 },
                  {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  }
                )}
                className=" border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none"
              />
              <p>{errors.email?.message}</p>
            </div>

            <div className="flex flex-col p-5">
              <label name="name" className="font-semibold text-lg md:text-xl">
                Password
              </label>
              <input
                required
                name="password"
                id="password"
                type="password"
                {...register("password", { required: true, maxLength: 80 })}
                className="border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none"
              />
            </div>

            <div className="flex justify-center items-center">
              <input
                className="px-14 py-2 text-white bg-purple-600 rounded-lg shadow-lg"
                type="submit"
                placeholder="Save"
              />
            </div>
          </form>
          {/**<button className="mt-5" onClick={handleGoogleSignIn}>Sigin with Google</button> */}
          




              </div>
              <div className ="flex flex-col items-center  mt-4">
              <a href="signIn" 
              className="mx-auto text-sm md:text-xl text-gray-500  pb-3 ">
                Create an account
                </a>
                <a className="mx-auto text-sm md:text-xl text-gray-500">
                Forgot Password
                </a>
                </div>
        </div>



        </>
    );
}
}