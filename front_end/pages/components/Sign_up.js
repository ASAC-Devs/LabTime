import React, { useState } from "react";
import {useForm} from 'react-hook-form';
// import validation from './Sign_up_validation';
import validation from "./Sign_up_valid";
<<<<<<< HEAD
// import { useHistory } from "react-router-dom";
import Axios from 'axios'
=======
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
>>>>>>> 7016134667f2135e179473fa5dea113bacf9b3c5

// import Axios from 'axios'
export default   function SignUpForm(props) {
    // const  history = useHistory();
    // const url = "http://localhost:8900/posts"
    // const [data, setData]= useState({
    //     email: "",
    //     password:"",
    //     fname:"",
    //     lname:"",
    //     confirm:""
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
    //         FirstName:data.fname,
    //         Lastname:data.lname,
    //         Email: data.email,
    //         password: data.password,
    //         Confiremed: data.confirm,
    //         Role: data.role,
    //         Course: data.course
    //     })
    //     .then(res =>{
    //         console.log(res.data)
    //         history.push('/')      
    //       })
    // }
    return (<>
<<<<<<< HEAD
     <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-blue-100">
        <form  onSubmit={props.signup} method="POST">
            <h2 className="m-2">Sign-Up Form</h2>
            <label  className="block my-1 border border-blue-200" >First Name </label>
            <input name="fname"  type="text"  />
            <br />

            <label className="block my-1 border border-blue-200" >Last Name :</label>
            <input name="lname" type="text" />
            <br />
            <label className="block my-1 border border-blue-200">E-mail :</label>
            <input name="email"  type="text"/>
            <br/>

            <label className="block my-1 border border-blue-200">Password :</label>
            <input name="password"  type="password"/>
            <br/>

            <label className="block my-1 border border-blue-200">Confirm Password :</label>
            <input name="confirm"  type="password"/>

            <label className="block my-1 border border-blue-200">Role</label>
            <select name="role" >
            <option value='None' >Youe Role</option>

                <option value='Std' >Student</option>
                <option value='TA' >Teacher Assestant</option>
            </select>

            <label className="block my-1 border border-blue-200">Course</label>
            <select name="course" >
                <option value='None' placeholder='Chaose'>Chaose Role ...</option>
                <option value='201' >Code-201</option>
                <option value='301' >Code-301</option>
                <option value='401_java' >Code-401-Java</option>
                <option value='401_JS' >Code-401-JavaScript</option>
                <option value='401_PY' >Code-401-Python</option>
            </select>


=======
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
>>>>>>> 7016134667f2135e179473fa5dea113bacf9b3c5

            <button type="submit"  className="block w-full h-8 mt-5 ml-4 antialiased font-normal text-white rounded-md shadow-lg hover:bg-green-light bg-blue-dark text-md" >Create</button>
        </form>
        </div>
        </div>
    </>
    )
    }
// export default  SignUpForm;