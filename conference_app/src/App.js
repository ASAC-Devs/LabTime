import './App.css';
import LoginForm from './components/LoginForm'; 
import Header from './components/Header'
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="h-full bg-center bg-no-repeat bg-cover bg-hero-pattern">
        <Header/>
        
        
        <LoginForm/>
        
        <Link to="/conference">conference</Link>

    </div>
  );
}

export default App;
