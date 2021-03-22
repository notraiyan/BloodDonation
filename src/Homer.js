import React from 'react';
import Mapshow from './Mapshow';
import './Home.css';
import Campaign from './Campaign';
import User from './User';
import { AiOutlineHome } from "react-icons/ai";
import {BsBoxArrowInRight} from 'react-icons/bs';
import {RiHeartAddFill} from 'react-icons/ri';
import {FaAmbulance} from 'react-icons/fa';
import {MdLocalPostOffice} from 'react-icons/md';
import {FaClipboardList} from 'react-icons/fa';
import {FaBookMedical} from 'react-icons/fa';
import {BiDonateHeart} from 'react-icons/bi';
import {IoIosCloudDone} from 'react-icons/io';

function Homer() {
  return (
    <>
    <div className="new">
      <h1 className="title"><AiOutlineHome/> Campaign </h1>
      <User className="top"/>
    </div>
    <div className="then">
      <Campaign/>
    </div>
    <div className="last">
      <div className="part1">
        <Mapshow/>
      </div>
      <div className="part2">
        <div className="one">
          <div className="h2">Menu <BsBoxArrowInRight className="icon"/></div>
          <span id="group"> 
            <button type="button" class="btn1 btn-info">  
              <FaClipboardList className="request"/>
            </button> 
            <span class="badge badge-light">5+</span>
          </span>
          <span id="group"> 
            <button type="button" class="btn btn-info">  
              <FaBookMedical className="request"/>
            </button> 
              <span class="badge badge-light">5+</span> 
          </span>
          <span id="group"> 
            <button type="button" class="btn btn-info">  
              <BiDonateHeart className="request"/>
            </button> 
              <span class="badge badge-light">2+</span> 
          </span>
          <span id="group"> 
            <button type="button" class="btn btn-info">  
              <IoIosCloudDone className="request"/>
            </button> 
              <span class="badge badge-light">5+</span> 
          </span>
          <div className="icon-name"><span className="fukku">Booker</span>
          <span className="fukku">Donate</span>
          <span className="fukku">Donors</span>
          <span className="fukku">MyList</span>
          </div>
        </div>
        <div className="two">
        <div className="one">
          <div className="h2">Requests <BsBoxArrowInRight className="icon"/></div>
          <span id="group"> 
            <button type="button" class="btn1 btn-info">  
              <FaAmbulance className="request"/>
            </button> 
              <span class="badge badge-light">5+</span> 
          </span>
          <span id="group"> 
            <button type="button" class="btn btn-info">  
              <RiHeartAddFill className="request"/>
            </button> 
              <span class="badge badge-light">5+</span> 
          </span>
          <span id="group"> 
            <button type="button" class="btn btn-info">  
              <MdLocalPostOffice className="request"/>
            </button> 
              <span class="badge badge-light">5+</span> 
          </span>
          <div className="icon-name"><span className="fuk">Urgent</span>
          <span className="fuk">My  </span>
          <span className="fuk">Post</span>
          </div>
        </div>

        </div>
      </div>
    </div>
    </>
  );
}

export default Homer;