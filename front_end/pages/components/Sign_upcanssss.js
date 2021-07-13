import React, { useState } from "react";
import {useForm} from 'react-hook-form';
// import validation from './Sign_up_validation';
import validation from "./Sign_up_valid";
// import { useHistory } from "react-router-dom";
import Axios from 'axios'
import { register } from '../actions/auth';
import {connect} from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

// import Axios from 'axios'
// function SignUpForm({register}) {
const Register = ({ register, isAuthenticated }) => {
    const [formData, setFormData]= useState({

        email: "",
        password:"",
        fname:"",
        lname:"",
        confirm:"",
        Role:'',
        Course:''
    });
    const [acountCreated, setAcountCreated] = useState(false);

    const {email,password, fname, lname,confirm, Role, Course} = formData;
    const onChange = e => setFormData ({...formData, [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        if (password === confirm){
            register(email,password, fname, lname,confirm, Role, Course);
            setAcountCreated(true )
        }
    }
    if (isAuthenticated)
        return <Redirect to='/dashboard' />;
    else if (acountCreated)
        return <Redirect to='/login' />;    return (<>
     <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center bg-blue-100">
        <form onSubmit={e => onSubmit(e)} >
            <h2 className="m-2">Sign-Up Form</h2>
            {/* <pre>{JSON.stringify(userInfo, undefined, 2)} </pre> */}
            <label  className="block my-1 border border-blue-200" >First Name </label>
            <input      
            placeholder='First Naem*'
            name='fname'
            onChange={e => onChange(e)}
            value={fname}
            required  />
            <br />

            <label className="block my-1 border border-blue-200" >Last Name :</label>
            <input 
            placeholder='last Naem*'
            name='lname'
            onChange={e => onChange(e)}
            value={lname}
            required  />
            {/* {<p> {errors.lname} </p>} */}
            <br />
            <label className="block my-1 border border-blue-200">E-mail :</label>
            <input
            placeholder='E-mail*'
            name='email'
            onChange={e => onChange(e)}
            value={email}
            required />
            {/* {<p> {errors.email} </p>} */}
            <br/>

            <label className="block my-1 border border-blue-200">Password :</label>
            <input
            placeholder='password*'
            name='password'
            onChange={e => onChange(e)}
            value={password}
            type='password'
            required />
            {/* {<p> {errors.password} </p>} */}
            <br/>

            <label className="block my-1 border border-blue-200">Confirm Password :</label>
            <input 
            placeholder='password*'
            name='confirm'
            onChange={e => onChange(e)}
            value={confirm}
            type='password'
            required />
            {/* {<p> {errors.Confirm} </p>} */}

            <label className="block my-1 border border-blue-200">Role</label>
            <select onChange={(e) => handleSubmit(e)} id="role" >
            <option value='None' >Youe Role</option>

                <option value='Std' >Student</option>
                <option value='TA' >Teacher Assestant</option>
            </select>

            <label className="block my-1 border border-blue-200">Course</label>
            <select onChange={(e) => handleSubmit(e)} id="course" >
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
    const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated
    });
// export default connect(null, {register}) (SignUpForm);
export default connect(mapStateToProps, { register })(Register);
