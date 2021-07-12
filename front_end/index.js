import Head from 'next/head'
import SignUpForm from './pages/components/Sign_up'
import LoginForm from './pages/components/Sign_in'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Lab Time{' '}
        </h1>

        <p className="mt-5 w- text-2xl">
          Get started by Login{' '}
          <div className="p-3 font-mono text-lg bg-gray-100 rounded-md">  <SignUpForm/>
          </div>

        </p>


      </main>

    </div>
  )
}
