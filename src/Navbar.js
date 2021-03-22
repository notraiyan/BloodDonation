import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import logo from './bdlogo.png';
import donate from './donate.jpg';
import './Navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiDonateBlood } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";

function Navbar() {
    let match = useRouteMatch();
  return (
    <div class="sidebar">
        <img src={logo} className="image" /><br/>
        <Link className="nav" to="/home"><AiOutlineHome/> Home</Link>
        <Link className="nav" to="/profile"><CgProfile/> Profile</Link>
        <Link className="nav" to="/notifications"><IoNotificationsOutline/> Notifications</Link>
        <Link className="nav" to="/donors"><BiDonateBlood/> Donors</Link>
        <Link className="nav" to="/customize"><IoSettingsOutline/> Customize</Link>
        <img src={donate} className="donate" />
    </div>
  );
}

export default Navbar;
