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
    <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
        <Header/>
        
     <div className="items-center h-auto pb-8 mt-16 ml-40 bg-opacity-25 shadow-xl w-80 bg-gradient-to-b from-white/60 to-green-light/70 rounded-3xl" >
        <div className="ml-28">
          <img src='../assets/logo.png' width="65px" height="65px" className="ml-4" /> 
          <h1 className="ml-3 text-xl antialiased font-bold text-blue-dark">Sign-up</h1>

        </div>
        <form onSubmit = {handleSubmit(onSubmit)}  className="ml-7 w-60" >
            {/* <h2 className="m-2">Sign-Up Form</h2> */}
            {/* <pre>{JSON.stringify(userInfo, undefined, 2)} </pre> */}
            
            <input name="fname" className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="User name"  type="text"  {...register('fname', { required: true })}  />
       

            <input name="email" className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="E-mail" type="text" {...register('email', { required: true })}/>
            {<p className="ml-5 antialiased font-semibold text-blue-dark text-md "> {errors.email} </p>}
          

            <input name="password" className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="Password" type="password" {...register('password', { required: false })}/>
            {<p className="ml-5 antialiased font-semibold text-blue-dark text-md "> {errors.password} </p>}
         

            <input name="Confirm" className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="Confirm Password" type="Password" {...register('Confirm', { required: true })}/>
            {<p className="ml-5 antialiased font-semibold text-blue-dark text-md "> {errors.Confirm} </p>}

            <button type="submit"  className="block w-full h-8 mt-5 ml-4 antialiased font-normal text-white rounded-md shadow-lg hover:bg-green-light bg-blue-dark text-md" >Create</button>
        </form>
        </div>
        </div>
    </>
    )
    }
export default  SignUpForm;