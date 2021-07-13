import React, { useState } from "react";
import {useForm} from 'react-hook-form';
// import validation from './Sign_up_validation';
import validation from "./Sign_up_valid";
// import { useHistory } from "react-router-dom";
import Axios from 'axios'

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
     <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-blue-100">
        <form  onSubmit={props.signup} method="POST">
            <h2 className="m-2">Sign-Up Form</h2>
            {/* <pre>{JSON.stringify(userInfo, undefined, 2)} </pre> */}
            <label  className="block my-1 border border-blue-200" >First Name </label>
            <input name="fname"  type="text"  />
            <br />

            <label className="block my-1 border border-blue-200" >Last Name :</label>
            <input name="lname" type="text" />
            {/* {<p> {errors.lname} </p>} */}
            <br />
            <label className="block my-1 border border-blue-200">E-mail :</label>
            <input name="email"  type="text"/>
            {/* {<p> {errors.email} </p>} */}
            <br/>

            <label className="block my-1 border border-blue-200">Password :</label>
            <input name="password"  type="password"/>
            {/* {<p> {errors.password} </p>} */}
            <br/>

            <label className="block my-1 border border-blue-200">Confirm Password :</label>
            <input name="confirm"  type="password"/>
            {/* {<p> {errors.Confirm} </p>} */}

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



            <button type="submit"  className="block my-1 border border-red-200" >Create</button>
        </form>
        </div>

    </>
    )
    }
// export default  SignUpForm;