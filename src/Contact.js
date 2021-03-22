import logo from './bdlogo.png';
import './Login.css';
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <div className="Container">
      <div className="item1">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="info">
            Please provide correct phone no.<br/>
             This information will be safe.
        </div>
      </div>
      <div className="item2">
        <div className="heading">
          Contact Information
        </div>
        <form className="form">
            <div className="label">Phone No</div>
            <div className="input">
              <input type="text" id="phone" name="phone" placeholder="018..."/>
            </div>
            <div className="label">Alternative Phone No</div>
            <div className="input">
              <input type="text" id="alt" name="alt" placeholder="017..."/>
            </div>
            <div className="label">Social (Optional)</div>
            <div className="input">
              <input type="text" id="social" name="social" placeholder="https://..."/>
            </div>
            <div className="input">
              <Link className="Start" to="/address">Next</Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
