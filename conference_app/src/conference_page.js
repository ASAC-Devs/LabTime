import TeckitForm from './components/Tickets'
import RoomsList from './components/RoomsList'
import Header from './components/Header'

export default function Conference() {
    return (
      <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
            <Header />
        <main className="grid grid-cols-5 ml-4 auto-rows-auto">

          <RoomsList/>
          
        <div className="">

        </div>
        
        <TeckitForm/>
        
        </main>
  
    
      </div>
    )
  }