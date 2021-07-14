import TeckitForm from './components/Tickets'
import AvailableRoom from './components/Roomlist'
import Header from './components/Header'

export default function Conference() {
    return (
      <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
            <Header>

            </Header>
        <main className="grid grid-cols-5 ml-4 auto-rows-auto">

          <AvailableRoom/>
          
        <div className="">

        </div>
        
        <TeckitForm/>
        
        </main>
  
    
      </div>
    )
  }