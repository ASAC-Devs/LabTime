import TeckitForm from './components/Ticket'
import AvailableRoom from './components/Roomslist'
import Header from './components/header'

export default function Home() {
    return (
      <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
              <Header>

              </Header>
        <main className="grid grid-cols-5 ml-4 auto-rows-auto">

        <AvailableRoom/>
        <div  className="w- h-">

        </div>
        
        <TeckitForm/>
        
        </main>
  
    
      </div>
    )
  }