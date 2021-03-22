import logo from './bdlogo.png';
import './Login.css';
import {Link} from 'react-router-dom';

function Age() {
  return (
    <div className="Container">
      <div className="item1">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="info">
            Correct birthdate gives you <br/>
            best experience with the community.<br/>
             Don't hide it.
        </div>
      </div>
      <div className="item2">
        <div className="heading">
          How Old Are You?
        </div>
        <form className="form">
            <div className="age">
                <label for="dateofbirth" className="lbl">Pick Date</label>
                <input type="date" className="date" id="dateofbirth"/>
            </div>
            <div className="input">
              <Link className="Start" to="/Picture">Next</Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Age;
