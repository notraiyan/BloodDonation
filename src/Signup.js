import logo from './bdlogo.png';
import './Login.css';
import {Link} from 'react-router-dom';

function Signup() {
  return (
    <div className="Container">
      <div className="item1">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="info">
            Provide your real name for your identity.<br/>
             Your name will be used for search.
        </div>
      </div>
      <div className="item2">
        <div className="heading">
          Let Us Know About You
        </div>
        <form className="form">
            <div className="label">Username</div>
            <div className="input">
              <input type="text" id="user" name="user" placeholder="john"/>
            </div>
            <div className="label">Email</div>
            <div className="input">
              <input type="text" id="email" name="email" placeholder="john@gmail.com"/>
            </div>
            <div className="label">Password</div>
            <div className="input">
              <input type="password" id="password" name="password" placeholder="******"/>
            </div>
            <div className="input">
              <Link className="Start" to="/contact">Next</Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
