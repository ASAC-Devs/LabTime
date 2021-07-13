import React, { useState } from "react";
import {useForm} from 'react-hook-form';
// import validation from './Sign_up_validation';
import validation from "./Sign_up_valid";
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
     <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-blue-100">
        <form onSubmit = {handleSubmit(onSubmit)}>
            <h2 className="m-2">Sign-Up Form</h2>
            <pre>{JSON.stringify(userInfo, undefined, 2)} </pre>
            <label  className="block my-1 border border-blue-200" >First Name </label>
            <input name="fname" className="block my-3 border border-blue-200"  type="text"  {...register('fname', { required: true })}  />
            <br />

            <label className="block my-1 border border-blue-200" >Last Name :</label>
            <input name="lname" className="block my-3 border border-blue-200" type="text" {...register('lname', { required: true })} />
            {<p> {errors.lname} </p>}
            <br />
            <label className="block my-1 border border-blue-200">E-mail :</label>
            <input name="email" className="block my-3 border border-blue-200" type="text" {...register('email', { required: true })}/>
            {<p> {errors.email} </p>}
            <br/>

            <label className="block my-1 border border-blue-200">Password :</label>
            <input name="password" className="block my-3 border border-blue-200" type="password" {...register('password', { required: false })}/>
            {<p> {errors.password} </p>}
            <br/>

            <label className="block my-1 border border-blue-200">Confirm Password :</label>
            <input name="Confirm" className="block my-3 border border-blue-200" type="Password" {...register('Confirm', { required: true })}/>
            {<p> {errors.Confirm} </p>}

            <button type="submit"  className="block my-1 border border-red-200" >Create</button>
        </form>
        </div>

    </>
    )
    }
export default  SignUpForm;