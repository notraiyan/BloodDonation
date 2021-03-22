import logo from './bdlogo.png';
import {Link} from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';
import Homer from './Homer';
import Profile from './Profile';
import Notifications from './Notifications';
import Donors from './Donors';
import Customize from './Customize';

function Home() {
    let match = useRouteMatch();

  return (
    <Router>
    <div> 
        <Navbar/>
        <div className="content">
          <Route path="/home"><Homer/></Route>
          <Route path="/profile"><Profile/></Route>
          <Route path="/notifications"><Notifications/></Route>
          <Route path="/donors"><Donors/></Route>
          <Route path="/customize"><Customize/></Route>
        </div>

    </div>
    </Router>
  );
}

export default Home;
