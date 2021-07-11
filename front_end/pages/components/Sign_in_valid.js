import React, {useState} from 'react'
import SignUpForm from './Sign_up';
// import SignUpForm from './Last_signUp'
// import validation from "./Sign_in_valid";


const validation = (values) =>{
    let errors={};
    if(!values.email){

        errors.email= "E-mail is requeired"
    }
    if(!values.Password){
        errors.Password= "password ssss requeired"

    }else if(values.Password.length <5){
        errors.Password= "password is too short"
    }
    if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "E-mail is not valied !"
    }

    return errors ;
}
export default validation; 