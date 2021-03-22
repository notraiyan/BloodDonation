import logo from './bdlogo.png';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Container">
      <div className="item1">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="item2">
        <div className="heading">
          Sign In
        </div>
        <form className="form">
          <div className="label">Email or Username</div>
            <div className="input">
              <input type="text" id="user" name="user" placeholder="john@gmail.com"/>
            </div>
            <div className="label">Password</div>
            <div className="input">
              <input type="password" id="password" name="password" placeholder="******"/>
            </div>
            <div className="input">
              <Link className="Start" to="/home">Login</Link>
            </div>
            <div className="input">
              <a href="">Forgot Password?</a>
            </div>
            <div className="input">
              Don't have an account? <Link className="no" to="/signup">Sign Up</Link>
            </div>

        </form>
      </div>
    </div>
  );
}

export default Login;
