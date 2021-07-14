import './App.css';
import LoginForm from './components/LoginForm'; 
import Header from './components/Header'
function App() {
  return (
    <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-hero-pattern">
        <Header/>
        
        <LoginForm/>

    </div>
  );
}

export default App;
