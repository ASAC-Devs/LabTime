import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import CSRFToken from './ForTokens/CSRFToken';

const Register = ({ register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        username:'',
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirm: '',
        role: '',
        course: ''
    });
    const [accountCreated, setAccountCreated] = useState(false);

    const {username, password, confirm, fname, lname, email, role, course } = formData;
    console.log(formData);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            register(username, password, re_password);
            setAccountCreated(true);
        }
    };

    if (isAuthenticated)
        return <Redirect to='/dashboard' />;
    else if (accountCreated)
        return <Redirect to='/login' />;

    return (
        <div className='container mt-5'>


            <form onSubmit={e => onSubmit(e)}>
                <CSRFToken />
            <h2 className="m-2">Sign-Up Form</h2>
            <label className="block my-1 border border-blue-200" >Last Name :</label>
            <input name="username" onChange={e => onChange(e)} value={username} type="text" />
            <br />
            <label  className="block my-1 border border-blue-200" >First Name </label>
            <input name="fname"                         onChange={e => onChange(e)}
                        value={fname} type="text"  />
            <br />

            <label className="block my-1 border border-blue-200" >Last Name :</label>
            <input name="lname" onChange={e => onChange(e)} value={lname} type="text" />
            <br />
            <label className="block my-1 border border-blue-200">E-mail :</label>
            <input name="email" onChange={e => onChange(e)} value={email} type="text"/>
            <br/>

            <label className="block my-1 border border-blue-200">Password :</label>
            <input name="password" onChange={e => onChange(e)} value={password} type="password"/>
            <br/>

            <label className="block my-1 border border-blue-200">Confirm Password :</label>
            <input name="confirm" onChange={e => onChange(e)} value={confirm} type="password"/>

            <label className="block my-1 border border-blue-200">Role</label>
            <select name="role" onChange={e => onChange(e)} >
            <option value='None' >Youe Role</option>

                <option value={std}  >Student</option>
                <option value={TA}  >Teacher Assestant</option>
            </select>

            <label className="block my-1 border border-blue-200">Course</label>
            <select name="course" onChange={e => onChange(e)} >
                <option value='None' placeholder='Chaose'>Chaose Role ...</option>
                <option value={201}  >Code-201</option>
                <option value={301} >Code-301</option>
                <option value={java} >Code-401-Java</option>
                <option value={JS}  >Code-401-JavaScript</option>
                <option value={PY} >Code-401-Python</option>
            </select>



            <button type="submit"  className="block my-1 border border-red-200" >Create</button>
        </form>
            <p className='mt-3'>
                Already have an Account? <Link to='/login'>Sign In</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);