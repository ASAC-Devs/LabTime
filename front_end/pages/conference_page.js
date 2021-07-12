import TeckitForm from './components/Ticket'
import AvailableRoom from './components/Roomslist'

export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Lab Time
            </a>
          </h1>
        <TeckitForm/>
          <p className="mt-5 w-50 text-2xl">
            Get started by Login{' '}
            <div className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            <AvailableRoom/>
            </div>
  
          </p>

    
        </main>
  
    
      </div>
    )
  }