import logo from './bdlogo.png';
import male from './weight1.png';
import female from './weight2.png';
import './Login.css';
import {Link} from 'react-router-dom';

function Weight() {
  return (
    <div className="Container">
      <div className="item1">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="info">
            Note: You cannot donate blood<br/>
             if you're under 50kg.
        </div>
      </div>
      <div className="item2">
        <div className="heading">
          What Is Your Weight?
        </div>
        <form className="option">
        <input type="radio" name="emotion" id="sad" class="input-hidden" value="male" />
        <label for="sad">
            <img src={male} alt="Male" />
        </label>
        <input type="radio" name="emotion" id="happy" class="input-hidden" value="female" />
        <label for="happy">
            <img src={female} alt="Female" />
        </label>
        </form>
        <div className="input">
              <Link className="Start" to="/blood">Next</Link>
        </div>
      </div>
    </div>
  );
}

export default Weight;
