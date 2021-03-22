import logo from './bdlogo.png';
import './Login.css';
import {Link} from 'react-router-dom';
var link="/";

function Blood() {
  return (
    <div className="Container">
      <div className="item1">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="info">
            Your blood group needs to be accurate.<br/>
             If you don't know about it<br/>
              please contact nearest clinic.
        </div>
      </div>
      <div className="item2">
        <div className="heading">
          What Is Your Blood Group?
        </div>
        <form className="body">
        <div class="grid">
            <button className="box" value="A+">A+</button>
            <button className="box" value="B+">B+</button>
            <button className="box" value="O+">O+</button>
            <br/>
            <br/>
            <button className="box" value="A-">A-</button>
            <button className="box" value="B-">B-</button>
            <button className="box" value="O-">O-</button>
            <br/>
            <br/>
            <button className="box" value="AB+">AB+</button>
            <button className="box" value="AB-">AB-</button>
        </div>
        </form>
        <div className="input">
              <Link className="Start" to="/age">Next</Link>
        </div>
      </div>
    </div>
  );
}

export default Blood;
