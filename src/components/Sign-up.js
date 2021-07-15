import React, { useState } from "react";

function SignUpForm() {

    return (<>
    <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
     
     <div className="items-center h-auto pb-8 mt-16 ml-40 bg-opacity-25 shadow-xl w-80 bg-gradient-to-b from-white/60 to-green-light/70 rounded-3xl" >
        <div className="ml-28">
          <img src='../assets/logo.png' width="65px" height="65px" className="ml-4" /> 
          <h1 className="ml-3 text-xl antialiased font-bold text-blue-dark">Sign-up</h1>
        </div>
        
        <form className="ml-7 w-60" >
            
            <input name="fname" className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="User name"  type="text"   />
            <input name="email" className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="E-mail" type="text" />
            <input name="password" className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="Password" type="password" />
            <input name="Confirm" className="block w-full h-8 pl-2 mt-6 ml-4 rounded-md rounded-l shadow-inner focus:ring-blue-dark focus:border-green-light sm:text-sm border-green-light" placeholder="Confirm Password" type="Password" />

            <button type="submit"  className="block w-full h-8 mt-5 ml-4 antialiased font-normal text-white rounded-md shadow-lg hover:bg-green-light bg-blue-dark text-md" >Create</button>
        </form>
        </div>
        </div>
    </>
    )
    }
export default  SignUpForm;