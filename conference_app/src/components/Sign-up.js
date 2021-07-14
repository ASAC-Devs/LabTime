import React, { useState } from "react";
import axiosInstance from '../axios';
// import useHistory from 'use-history'


function  SignUp() {

	// const history = useHistory();

    const initialFormData = Object.freeze({
		first_name:'',
        user_name:'',
        email: '',
		password: '',
        confirmed:'',
        role:'',
        course:''
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`create`, {
				email: formData.email,
				user_name: formData.user_name,
				password: formData.password,
                first_name: formData.first_name,
                role: formData.role,
                course: formData.course

                
                
			})
			.then((res) => {
				// history.push('/login');
				console.log("sdsd=>",res);
				console.log(res.data);
			});
	};


    return (<>
    <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
     
     <div className="items-center h-auto pb-8 mt-16 ml-40 bg-opacity-25 shadow-xl w-80 bg-gradient-to-b from-white/60 to-green-light/70 rounded-3xl" >
        <div className="ml-28">
          {/* <img src='../assets/logo.png' width="65px" height="65px" className="ml-4" />  */}
          <h1 className="ml-3 text-xl antialiased font-bold text-blue-dark">Sign-up</h1>
        </div>

        
        <form className="ml-7 w-60" >
            
            <input name="first_name" onChange={handleChange} className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="User name"  type="text"   />
            <input name="user_name" onChange={handleChange} className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="User name"  type="text"   />

            <input name="email" onChange={handleChange} className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="E-mail" type="text" />
            <input name="password" onChange={handleChange} className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="Password" type="password" />
            <input name="confirmed" onChange={handleChange} className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="Confirm Password" type="Password" />

            <select name="role" onChange={handleChange} >
            <option value='None' >Youe Role</option>
                <option value='Std' >Student</option>
                <option value='TA' >Teacher Assestant</option>
            </select>

            <label className="block my-1 border border-blue-200">Course</label>
            <select name="course"  onChange={handleChange} >
                <option value='None' placeholder='Chaose'>Chaose Role ...</option>
                <option value='201' >Code-201</option>
                <option value='301' >Code-301</option>
                <option value='401_java' >Code-401-Java</option>
                <option value='401_JS' >Code-401-JavaScript</option>
                <option value='401_PY' >Code-401-Python</option>
            </select>

            <button type="submit" onClick={handleSubmit} className="block w-full h-8 mt-5 ml-4 antialiased font-normal text-white rounded-md shadow-lg hover:bg-green-light bg-blue-dark text-md" >Create</button>
        </form>
        </div>
        </div>
    </>
    )
    }
export default   SignUp;