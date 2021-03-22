import logo from './bdlogo.png';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="start" to="/login">
          Start Journey
        </Link>
      </header>
    </div>
  );
}

export default App;


