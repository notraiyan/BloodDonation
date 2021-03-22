import logo from './bdlogo.png';
import './Login.css';
import {Link} from 'react-router-dom';

function Picture() {
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
          You Are Almost Done!
        </div>
        <form className="form">
            <div className="pic">
                <label for="img">Select image:</label>
                <input type="file" id="img" className="img" accept="image/*"/>
            </div>
            <div className="input">
              <Link className="Start" to="/">Next</Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Picture;
