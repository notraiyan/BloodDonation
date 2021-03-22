import React from 'react';
import './Profile.css';
import User from './User';
import {BiArrowBack} from 'react-icons/bi';
import boy from './boy.jpg';
import male from './male.png'
import {FaQuoteRight} from 'react-icons/fa';
import {FaQuoteLeft} from 'react-icons/fa';

function Profile() {
  return (
    <>
    <div className="new">
      <h1 className="title"><BiArrowBack className="back"/> Profile </h1>
      <User className="top"/>
    </div>
    <div className="bam">
        <img src={boy} className="pp"></img>
        <div className="bloody">A+</div>
        <div className="tags">
          <div className="nametag">Raiyan Ahmed</div>
          <div className="tag">Beginner Donor</div>
        </div>
        <div className="inform">
          <div className="h2">Info</div>
          <div className="h4">Phone No.: 01679741600</div>
          <div className="h4">Social: fb.me/R41Y4N</div>
          <div className="h4">Address: 156 Doctor Goli</div>
          <div className="h4">Age: 25</div>
          
          <div className="bar">
            <div className="done"></div>
            <div className="choto">15 days until you can donate again</div>
          </div>
        </div>
    </div>
    <div>
      <div className="upre">
        <div><span className="non active">Donation</span><span className="non">Requests</span></div><br/>
        <div class="flex-container">
          <div className="kobe">8-03-2021</div>
          <div className="from">Samorita Hospital</div>
          <div className="day">15 day ago</div>
        </div>
        <div class="flex-container">
          <div className="kobe">18-01-2021</div>
          <div className="from">Labaid Hospital</div>
          <div className="day">60 day ago</div>
        </div>
        <div class="flex-container">
          <div className="kobe">22-11-2020</div>
          <div className="from">Green General Hospital</div>
          <div className="day">120 day ago</div>
        </div>
      </div>
      <div className="niche">
        <div className="non">Reviews</div>
        <div><img src={male} className="other"></img><span className="span">Karim Chowdhury</span></div>
        <div className="comment"><FaQuoteLeft/> In publishing and graphic design, Lorem ipsum is a placeholder text
         commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. <FaQuoteRight/></div>
      </div>
    </div>
    </>
  );
}

export default Profile;