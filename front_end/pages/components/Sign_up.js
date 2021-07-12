import React, { useState } from "react";
import {useForm} from 'react-hook-form';
// import validation from './Sign_up_validation';
import validation from "./Sign_up_valid";
import Header from './header'
import Link from 'next/link'
// import Axios from 'axios'
function SignUpForm() {
    const {register, handleSubmit}= useForm();
    const [userInfo, setUserInfo] = useState();
    const [errors, setErrors]= useState({});
    const onSubmit = (data) =>{
        setUserInfo(data)
        console.log(data)
        setErrors(validation(data));

    }
    console.log(errors);
    return (<>
    <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen w-screen">
        <Header/>
        
     <div className="h-auto w-80 pb-8 bg-opacity-25 bg-gradient-to-b from-white/60 to-green-light/70 rounded-3xl shadow-xl ml-40 mt-16 items-center" >
        <div className="ml-28">
          <img src='../assets/logo.png' width="65px" height="65px" className="ml-4" /> 
          <h1 className=" text-blue-dark font-bold text-xl antialiased  ml-3">Sign-up</h1>

        </div>
        <form onSubmit = {handleSubmit(onSubmit)}  className="ml-7 w-60" >
            {/* <h2 className="m-2">Sign-Up Form</h2> */}
            {/* <pre>{JSON.stringify(userInfo, undefined, 2)} </pre> */}
            
            <input name="fname" className="h-8 ml-4 mt-6 rounded-l focus:ring-blue-dark focus:border-green-light block w-full sm:text-sm border-green-light rounded-md shadow-inner " placeholder="User name"  type="text"  {...register('fname', { required: true })}  />
       

            <input name="email" className="h-8 ml-4 mt-6 rounded-l focus:ring-blue-dark focus:border-green-light block w-full sm:text-sm border-green-light rounded-md shadow-inner " placeholder="E-mail" type="text" {...register('email', { required: true })}/>
            {<p className="ml-5 text-blue-dark font-semibold text-md antialiased "> {errors.email} </p>}
          

            <input name="password" className="h-8 ml-4 mt-6 rounded-l focus:ring-blue-dark focus:border-green-light block w-full sm:text-sm border-green-light rounded-md shadow-inner " placeholder="Password" type="password" {...register('password', { required: false })}/>
            {<p className="ml-5 text-blue-dark font-semibold text-md antialiased "> {errors.password} </p>}
         

            <input name="Confirm" className="h-8 ml-4 mt-6 rounded-l focus:ring-blue-dark focus:border-green-light block w-full sm:text-sm border-green-light rounded-md shadow-inner " placeholder="Confirm Password" type="Password" {...register('Confirm', { required: true })}/>
            {<p className="ml-5 text-blue-dark font-semibold text-md antialiased "> {errors.Confirm} </p>}

            <button type="submit"  className="text-white hover:bg-green-light bg-blue-dark font-normal text-md antialiased h-8 ml-4 mt-5 block w-full shadow-lg rounded-md" >Create</button>
        </form>
        </div>
        </div>
    </>
    )
    }
export default  SignUpForm;