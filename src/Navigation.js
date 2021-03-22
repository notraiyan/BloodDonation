import App from './App';
import Login from './Login';
import Signup from './Signup';
import Contact from './Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Address from './Address';
import Gender from './Gender';
import Weight from './Weight';
import Blood from './Blood';
import Age from './Age';
import Picture from './Picture';
import Home from './Home';

function Navigation() {
  return (
        <Router>
            <switch>
                <Route path="/" exact component={App} />
            </switch>
            <switch>
                <Route path="/login" exact component={Login} />
            </switch>
            <switch>
                <Route path="/signup" exact component={Signup} />
            </switch>
            <switch>
                <Route path="/contact" exact component={Contact} />
            </switch>
            <switch>
                <Route path="/address" exact component={Address} />
            </switch>
            <switch>
                <Route path="/gender" exact component={Gender} />
            </switch>
            <switch>
                <Route path="/weight" exact component={Weight} />
            </switch>
            <switch>
                <Route path="/blood" exact component={Blood} />
            </switch>
            <switch>
                <Route path="/age" exact component={Age} />
            </switch>
            <switch>
                <Route path="/picture" exact component={Picture} />
            </switch>
            <switch>
                <Route path="/home" exact component={Home} />
            </switch>
            <switch>
                <Route path="/profile" exact component={Home} />
            </switch>
            <switch>
                <Route path="/notifications" exact component={Home} />
            </switch>
            <switch>
                <Route path="/donors" exact component={Home} />
            </switch>
            <switch>
                <Route path="/customize" exact component={Home} />
            </switch>
        </Router>
  );
}

export default Navigation;