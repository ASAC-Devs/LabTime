import Head from 'next/head'
// import Register from './components/Sign_upcanssss'
import LoginForm from './components/Sign_in'
<<<<<<< HEAD
import img1 from './assets/logo.png'
import axios from 'axios'
import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/Sign_up_noura'
// import Layout from './hocs/Layout';

// import Home from './containers/Home';
import SignUpForm from './components/Sign_up';
// import Login from './containers/Login';
// import Dashboard from './containers/Dashboard';

// import PrivateRoute from './hocs/PrivateRoute';

// import { Provider } from 'react-redux';
// import store from './//store';


=======
import Header from './components/header'
import Footer from './components/Footer'
// import img1 from './public/assets/logo.png'
>>>>>>> 7016134667f2135e179473fa5dea113bacf9b3c5

// bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen w-screen
export default function Home() {



  const [reports, setreports] = useState([])
  const [loggedIn,setloggedIn] = useState(false)
  // const data = require('../public/data')
  let baseURL = 'https://labtime-api.herokuapp.com/accounts/register'


  const signup = (e,)=>{
    e.preventDefault()
    console.log(e.target.fname.value,e.target.confirm.value,e.target.role.value,e.target.course.value)
    axios.post(baseURL, {
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirm: e.target.confirm.value,
      role: e.target.role.value,
      course: e.target.course.value,

    }).then((res)=>{
      setloggedIn(res.status==200?true:false)
      console.log(loggedIn)
    }).catch(console.error)
  }
  
  const login = (e,)=>{
    e.preventDefault()
    console.log(e.target.userName.value,e.target.password.value)
    axios.post(baseURL, {
      userName:e.target.userName.value,
      password:e.target.password.value
    }).then((res)=>{
      setloggedIn(res.status==200?true:false)
      console.log(loggedIn)
    }).catch(console.error)
  }
  if (!loggedIn) {
  return (
<<<<<<< HEAD
    <Register/>
  //   <div className="flex flex-col items-center justify-center min-h-screen py-2">
  //     <Head>
  //       <title>Create Next App</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>

      
  //     <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">


  //       <div className="mt-5 w-50 text-2xl">

  //       <SignUpForm signup={signup}/>
  //         </div>
  
  //     </main>

  
  //   </div>
  // )}
  // else{ return(    <LoginForm login={login}/>
=======

    <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen w-screen">

      <Header>

      </Header>
      <Head>

      </Head>

      <main className="" >
        {/* <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <h2 className="text-blue-600">
            Lab Time
          </h2>
        </h1> */}
          <div className=" " width="30%"> 

           <LoginForm/>

          </div>

      </main>

      {/* <Footer/> */}
    </div>

>>>>>>> 7016134667f2135e179473fa5dea113bacf9b3c5
  )
  }

}
