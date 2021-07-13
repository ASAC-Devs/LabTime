// import {useForm} from 'react-hook-form'
// // import {Redirect} from 'react-router-dom';
// import React, { useState } from "react";
// import validation from './Sign_in_valid';
// import Link from 'next/link'
// // import SignUpForm from './Last_signUp';
// import SignUpForm from './Sign_up';
// export default function LoginForm() {
//     const {register, handleSubmit}= useForm();
//     const [userInfo, setUserInfo] = useState();

//     const [errors, setErrors]= useState({});
//     const onSubmit = (data) =>{
//         setUserInfo(data)
//         console.log(data)
//         setErrors(validation(data));
//      }

//     return (
//         <div className="flex flex-col items-center  min-h-screen py-2 text-center bg-blue-100">
//         <form onSubmit = {handleSubmit(onSubmit)} >

//             <label className="block my-3 border border-red-200" >E-mail </label>
//             <input className="block my-3 border border-red-200" name="email"  type="text" placeholder="User name" {...register('email', { required: true  })} />
//             {<p> {errors.email} </p>}
//             <br />

//             <label className="block my-3 border border-red-200" >Password </label>
//             <input className="block my-3 border border-red-200" name="Password" type="password" placeholder="Password" {...register('Password', { required: true  })}/>
//             {<p> {errors.Password} </p>}

//             <button className="block my-3 w-full bg-blue-200" >Login</button>
//             <h1>Or <Link href='./components/Sign_up'><button className="pl-1 pr-1 text-base bg-gray-100 ">Sign-Up ?</button></Link></h1>

//         </form>
//         </div>
//     )
// }