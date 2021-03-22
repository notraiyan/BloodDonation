import logo from './bdlogo.png';
import './Login.css';
import {Link} from 'react-router-dom';

function Address() {
  return (
    <div className="Container">
      <div className="item1">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="info">
            Please provide correct address<br/>
             This information will be safe.
        </div>
      </div>
      <div className="item2">
        <div className="heading">
          Where Do You Live?
        </div>
        <form className="form">
            <div className="label">Street Address</div>
            <div className="input">
              <input type="text" id="street" name="street" placeholder="123/4 Saint Road"/>
            </div>
            <div className="label">City</div>
            <div className="input">
              <input type="text" id="city" name="city" placeholder="Dhaka"/>
            </div>
            <div className="label">Postal Code</div>
            <div className="input">
              <input type="text" id="post" name="post" placeholder="XXXX"/>
            </div>
            <div className="input">
              <Link className="Start" to="/gender">Next</Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Address;
