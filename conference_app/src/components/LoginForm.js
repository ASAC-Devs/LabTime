import React, { useState } from "react";
import SignUpForm from './Sign-up'

export default function LoginForm(props) {
    
     const [show, setShow] = useState(false);
     
    
     
    return (
        <div>
        {!show?
        <div className="items-center mt-24 ml-40 bg-opacity-25 shadow-xl h-72 w-80 bg-gradient-to-b from-white/70 to-green-light/70 rounded-3xl" >
        
          
        <div className="ml-32">
          <img src='./assets/logo.png' width="65px" height="65px" /> 
          <h1 className="ml-1 text-xl antialiased font-bold text-blue-dark ">Login</h1>
        </div>
        
        
        <form className=" ml-7 w-60">

            <input className="block w-full h-8 pl-3 mt-3 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light"   name="email"  type="text" placeholder="User name"  />
            <input className="block w-full h-8 pl-3 mt-4 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light "   name="Password" type="password" placeholder="Password"/>       
            <button className="block w-full h-8 mt-4 ml-4 antialiased font-normal text-white rounded-md rounded-l shadow-lg hover:bg-green-light bg-blue-dark text-md" >Login</button>
            <button onClick={()=>setShow(true)} className="block w-full h-8 mb-2 ml-4 antialiased font-semibold text-blue-dark text-md ">Sign-Up</button>


        </form>
        </div>
        :<SignUpForm/>}
        {/* {!show?
        <button onClick={()=>setShow(true)} className="block w-full h-8 mb-2 ml-4 antialiased font-semibold text-blue-dark text-md ">Sign-Up</button>
        :null} */}
        </div>
    )
}