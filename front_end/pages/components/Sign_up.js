import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Button } from "@material-ui/core";
// import TextField from '@material-ui/core/TextField';

// import validation from './Sign_up_validation';
import validation from "./Sign_up_valid";
// import Axios from 'axios'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//         t1: {
//             margin: theme.spacing(1),
//             width: '10ch',
//         },

//     },
// }));

const [formData, updateFormData] = useState(initialFormData);

const handleChange = (e) => {
    updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim(),
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance
        .post(`token/`, {
            email: formData.email,
            password: formData.password,
        });
};
function SignUpForm() {

    const classes = useStyles();

    const { register, handleSubmit } = useForm();
    const [userInfo, setUserInfo] = useState();
    const [errors, setErrors] = useState({});
    const onSubmit = (data) => {
        setUserInfo(data)
        console.log(data)
        setErrors(validation(data));

    }
    console.log(errors);
    return (<>
        <div className={classes.div}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField id="filled-basic" label="Filled" variant="filled" className={classes.t1} {...register('fname', { required: true })} />

                <h2 className="m-2">Sign-Up Form</h2>
                <pre>{JSON.stringify(userInfo, undefined, 2)} </pre>
                <label className="block my-1 border border-blue-200" >First Name </label>
                <input name="fname" className="block my-3 border border-blue-200" type="text" onChange={handleChange}  {...register('fname', { required: true })} />
                <br />

                <label className="block my-1 border border-blue-200" >Last Name :</label>
                <input name="lname" className="block my-3 border border-blue-200" type="text" onChange={handleChange} {...register('lname', { required: true })} />
                {<p> {errors.lname} </p>}
                <br />
                <label className="block my-1 border border-blue-200">E-mail :</label>
                <input name="email" className="block my-3 border border-blue-200" type="text" onChange={handleChange} {...register('email', { required: true })} />
                {<p> {errors.email} </p>}
                <br />

                <label className="block my-1 border border-blue-200">Password :</label>
                <input name="password" className="block my-3 border border-blue-200" type="password" onChange={handleChange} {...register('password', { required: false })} />
                {<p> {errors.password} </p>}
                <br />

                <label className="block my-1 border border-blue-200">Confirm Password :</label>
                <input name="Confirm" className="block my-3 border border-blue-200" type="Password" onChange={handleChange} {...register('Confirm', { required: true })} />
                {<p> {errors.Confirm} </p>}
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
                <button type="submit" className="block my-1 border border-red-200" onClick={handleSubmit} >Create</button>
            </form>
        </div>

    </>
    )
}
export default SignUpForm;