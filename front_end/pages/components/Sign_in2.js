import React, {useState} from 'react'
import Axios from 'axios'
import { set } from 'react-hook-form'
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";
import { browserHistory } from 'react-router'
// import axiosInstance from '../axios';
export default function LoginForm(){
    let history = useHistory();
    const url = "http://localhost:8900/posts"
    const [data, setData]= useState({
        email: "",
        password:""
    })
    function handleSubmit(e){
        const newData = { ...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
    function submit(e){
        e.preventDefault();
        Axios.post(url, {
            email: data.email,
            password: data.password
        })
        .then(res =>{
            console.log(res.data)
            history.push('/asdfg')        })
    }

	// const history = useHistory();
	// const initialFormData = Object.freeze({
	// 	email: '',
	// 	password: '',
	// });

	// const [formData, updateFormData] = useState(initialFormData);

	// const handleChange = (e) => {
	// 	updateFormData({
	// 		...formData,
	// 		[e.target.name]: e.target.value.trim(),
	// 	});
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	// console.log(formData);

	// 	Axios
	// 		.post(`token/`, {
	// 			email: formData.email,
	// 			password: formData.password,
	// 		})
	// 		.then((res) => {
	// 			localStorage.setItem('access_token', res.data.access);
	// 			localStorage.setItem('refresh_token', res.data.refresh);
	// 			Axios.defaults.headers['Authorization'] =
	// 				'JWT ' + localStorage.getItem('access_token');
	// 			history.push('/');
	// 			//console.log(res);
	// 			//console.log(res.data);
	// 		});
	// };




    return(
        <div>
            <form onSubmit={(e)=> submit(e)}>

             <label className="block my-3 border border-red-200" >E-mail </label>
             <input onChange={(e) => handleSubmit(e)} id="email" value={data.email}  type="text" placeholder="User name" />
             <br />

             <label className="block my-3 border border-red-200" >Password </label>
             <input onChange={(e)=>handleSubmit(e)} id="password" value={data.password}   type="password" placeholder="Password" />
             <button className="block my-3 w-full bg-blue-200" >Login</button>
{/* //             <h1>Or <Link href='./components/Sign_up'><button className="pl-1 pr-1 text-base bg-gray-100 ">Sign-Up ?</button></Link></h1> */}

        </form>       
 </div>
    )
}