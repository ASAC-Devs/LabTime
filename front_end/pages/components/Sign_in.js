<<<<<<< HEAD
import React, {useState} from 'react'
import Axios from 'axios'
import { set } from 'react-hook-form'
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";
import { browserHistory } from 'react-router'
export default function LoginForm(props){
    // let history = useHistory();
    // const url = "http://localhost:8900/posts"
    // const [data, setData]= useState({
    //     email: "",
    //     password:""
    // })
    // function handleSubmit(e){
    //     const newData = { ...data}
    //     newData[e.target.id] = e.target.value
    //     setData(newData)
    //     console.log(newData)
    // }
    // function submit(e){
    //     e.preventDefault();
    //     Axios.post(url, {
    //         email: data.email,
    //         password: data.password
    //     })
    //     .then(res =>{
    //         console.log(res.data)
    //         history.push('/asdfg')        })
    // }
=======
import {useForm} from 'react-hook-form'
import {Redirect} from 'react-router-dom';
import React, { useState } from "react";
import validation from './Sign_in_valid';
import Link from 'next/link'

// import SignUpForm from './Last_signUp';
import SignUpForm from './Sign_up';
export default function LoginForm(props) {
    const {register, handleSubmit}= useForm();
    const [userInfo, setUserInfo] = useState();
>>>>>>> 7016134667f2135e179473fa5dea113bacf9b3c5

    

<<<<<<< HEAD
    return(
        <div>
            <form onSubmit={props.login} method="POST" >

            <label className="block my-3 border border-red-200" >E-mail </label>
            <input name="userName"  type="text" placeholder="E-mail" />
            <br />

            <label className="block my-3 border border-red-200" >Password </label>
            <input name="password"  type="password" placeholder="Password" />
            <button className="block my-3 w-full bg-blue-200" >Login</button>
{/* //             <h1>Or <Link href='./components/Sign_up'><button className="pl-1 pr-1 text-base bg-gray-100 ">Sign-Up ?</button></Link></h1> */}

        </form>       
 </div>
=======
    return (

        <div className="items-center mt-24 ml-40 bg-opacity-25 shadow-xl h-72 w-80 bg-gradient-to-b from-white/70 to-green-light/70 rounded-3xl" >
        <div className="ml-32">
          <img src='./assets/logo.png' width="65px" height="65px" /> 
          <h1 className="ml-1 text-xl antialiased font-bold text-blue-dark ">Login</h1>
        </div>
        <form onSubmit = {handleSubmit(onSubmit)} className=" ml-7 w-60">  
            <input className="block w-full h-8 pl-3 mt-3 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light"   name="email"  type="text" placeholder="User name" {...register('email', { required: true  })} />
            {<p className="ml-5 antialiased font-semibold text-blue-dark text-md "> {errors.email} </p>}

            <input className="block w-full h-8 pl-3 mt-4 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light "   name="Password" type="password" placeholder="Password" {...register('Password', { required: true  })}/>
            {<p className="ml-5 antialiased font-semibold text-blue-dark text-md " >{errors.Password}</p>}

            <button className="block w-full h-8 mt-4 ml-4 antialiased font-normal text-white rounded-md rounded-l shadow-lg hover:bg-green-light bg-blue-dark text-md" >Login</button>
            <Link href='./components/Sign_up'><button className="block w-full h-8 mb-2 ml-4 antialiased font-semibold text-blue-dark text-md ">Sign-Up</button></Link>

        </form>
        </div>
>>>>>>> 7016134667f2135e179473fa5dea113bacf9b3c5
    )
}