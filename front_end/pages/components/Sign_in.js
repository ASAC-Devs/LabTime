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
    )
}