import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Concern from "../components/concern";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export default function Signin(){
    
    const router =useRouter();
    const data =router.query;
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm();
    const [isSubmitted, setSubmitted] = useState(false);
    const date = new Date();

    async function handleFormSubmit(data) {
        setSubmitted(true);
        //TODO: Show a loading dialog
        console.log(data);
        // Get data from the form.
        const finalformdata = {
          email: data.email,
          password: data.password,
          created: date.toISOString(),
        };

        const JSONdata = JSON.stringify(finalformdata);
    console.log(finalformdata);
    // API endpoint where we send form data.
    const endpoint = `http://35.209.3.225:5000/register`;
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSONdata,
    };

    try {
        const response = await fetch(endpoint, options);
        const result = await response.json();
  
        if (result.message == "success") {
          setSubmitted(false);
          alert("Registered successfully");
          router.push("/login");
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
        <div className="min-w-min">
        <div className="pl-5 mt-5">
          <Link href="/">
            <ArrowBackIcon />
          </Link>
        </div>
        <div className="flex flex-col p-3 mx-auto md:max-w-3xl lg:my-10">
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(handleFormSubmit)}
            method="POST"
          >
            <div className="flex flex-col">
              <label name="Email" className="font-semibold text-sm md:text-xl">
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
                className="block pl-0 border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none"
              />
              <p>{errors.email?.message}</p>
            </div>

            <div className="flex flex-col mt-3">
              <label name="name" className="font-semibold text-sm md:text-xl">
                Password
              </label>
              <input
                required
                name="password"
                id="password"
                type="password"
                placeholder="Password must contain special characters"
                {...register("password", { required: true, maxLength: 80 })}
                className="pl-0 border-x-0 border-y-0 text-sm border-b-2 border-t-0 focus:ring-0 outline-none"
              />
            </div>

            <div className="flex flex-col mt-3">
              <label name="name" className="font-semibold text-sm md:text-xl">
                Re-enter your Password
              </label>
              <input
                required
                name="password"
                id="password"
                type="password"
                {...register("password", { required: true, maxLength: 80 })}
                className="pl-0 border-x-0 border-y-0 border-b-2 border-t-0 focus:ring-0 outline-none"
              />
            </div>

            <div className="flex mt-5 justify-center items-center">
              <input
                className="px-14 py-2 text-white bg-purple-600 rounded-lg shadow-lg"
                type="submit"
                placeholder="Save"
              />
            </div>
          </form>
        </div>
      </div>

    );
}}