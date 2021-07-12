import Head from 'next/head'
import SignUpForm from './components/Sign_up'
import LoginForm from './components/Sign_in'
import Header from './components/header'

// import img1 from './public/assets/logo.png'

// bg-hero-pattern bg-no-repeat bg-cover bg-center h-screen w-screen
export default function Home() {
  return (

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
    </div>
  )
}
