import Head from 'next/head'
import SignUpForm from './components/Sign_up'
import LoginForm from './components/Sign_in'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

 

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Lab Time
          </a>
        </h1>

        <p className="mt-5 w-50 text-2xl">
          Get started by Login{' '}
          <div className="p-3 font-mono text-lg bg-gray-100 rounded-md">  <LoginForm/>
          </div>

        </p>

  
      </main>

  
    </div>
  )
}
