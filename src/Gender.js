import logo from './bdlogo.png';
import male from './male.png';
import female from './female.png';
import './Login.css';
import {Link} from 'react-router-dom';

function Gender() {
  return (
    <div className="Container">
      <div className="item1">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="info">
            Defining your gender will help us<br/>
             to bring new feature for mother's<br/>
              health care.
        </div>
      </div>
      <div className="item2">
        <div className="heading">
          What Is Your Gender?
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
              <Link className="Start" to="/weight">Next</Link>
        </div>
      </div>
    </div>
  );
}

export default Gender;
