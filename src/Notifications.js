import React from 'react';
import User from './User';
import './Notifications.css';
import {BiArrowBack} from 'react-icons/bi';

function Notifications() {
  return (
    <div>
        <div className="new">
          <h1 className="title"><BiArrowBack className="back"/> Notifications </h1>
          <User className="top"/>
        </div>
        <div className="p1">
          <div className="note"><b>Musa Clinic</b> posted a blood request near you <div className="time">1 min ago</div></div>
          <div className="note"><b>Musa Clinic</b> posted a blood request near you <div className="time">1 day ago</div></div>
          <div className="note"><b>Musa Clinic</b> requested you for O+ blood<div className="time">1 month ago</div></div>
          <div className="note"><b>Musa Clinic</b> requested you for O+ blood <div className="time">3 month ago</div></div>
          <div className="note"><b>You</b> earned a new badge <div className="time">6 month ago</div></div>
          <div className="note"><b>Musa Clinic</b> earned a new badge <div className="time">1 year ago</div></div>
        </div>
        <div className="p3"></div>
        <div className="p2">
          <div className="head"> History</div><br/>
          <div className="note"><b>You</b> posted a blood request <div className="time">1 min ago</div></div>
          <div className="note"><b>You</b> posted a blood request <div className="time">20 day ago</div></div>
          <div className="note"><b>You</b> accepted a blood request <div className="time">3 month ago</div></div>
        </div>
    </div>
  );
}

export default Notifications;