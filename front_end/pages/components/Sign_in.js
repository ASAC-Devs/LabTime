import {useForm} from 'react-hook-form'
import {Redirect} from 'react-router-dom';
import React, { useState } from "react";
import validation from './Sign_in_valid';
import Link from 'next/link'

import stylis from './style/signin.module.css'
// import SignUpForm from './Last_signUp';
import SignUpForm from './Sign_up';
export default function LoginForm(props) {
    const {register, handleSubmit}= useForm();
    const [userInfo, setUserInfo] = useState();

    const [errors, setErrors]= useState({});
    const onSubmit = (data) =>{
        setUserInfo(data)
        console.log(data)
        setErrors(validation(data));
     }

    return (

        <div className="h-80 w-80 bg-opacity-25 bg-gradient-to-b from-white to-green-light rounded-3xl shadow-xl ml-40 mt-24 items-center" >
        <div className="ml-32">
          <img src='./assets/logo.png' width="65px" height="65px"  class=""/> 
          <h1 className="ml-1 text-blue-dark font-bold text-xl antialiased ">Login</h1>
          
        </div>
        <form onSubmit = {handleSubmit(onSubmit)} className="ml-7 w-60">  
            <input className="h-8 ml-4 mt-3 rounded-l focus:ring-blue-dark focus:border-green-light block w-full sm:text-sm border-green-light rounded-md shadow-inner  "   name="email"  type="text" placeholder="User name" {...register('email', { required: true  })} />
            {<p className="ml-5 text-blue-dark font-semibold text-md antialiased "> {errors.email} </p>}
            <br />
            <input className="h-8 ml-4 rounded-l focus:ring-blue-dark focus:border-green-light block w-full shadow-inner sm:text-sm border-green-light rounded-md "   name="Password" type="password" placeholder="Password" {...register('Password', { required: true  })}/>
            {<p className="ml-5 text-blue-dark font-semibold text-md antialiased " >{errors.Password}</p>}
            <button className="text-green-light font-normal text-md antialiased bg-blue-dark h-8 ml-4 mt-5 rounded-l block w-full shadow-lg rounded-md" >Login</button>
            <Link href='./components/Sign_up'><button className="text-blue-dark font-semibold text-md antialiased h-8 ml-4 mb-4  block w-full  ">Sign-Up</button></Link>

        </form>
        </div>
    )
}