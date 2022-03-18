import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {FiTwitter, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import Subscribe from './subscribe';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';


function CountdownTimer() {
    const calculateTimeLeft = () => {
      const difference = +new Date("2020-10-01") - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach(interval => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });
  
    return (
       
     
      
      
<div className=" middle col-12 mx-auto ">

<div className="boy">
    <h1>NEW PROJECT COMING SOON</h1>
    <hr/>
    <h2> {timerComponents.length ? timerComponents : <span></span>}</h2>
  </div>

      <p>Stay tuned and subscribe to track our progress. </p>
      
   
     

      {}
      
    


      </div>

 
    );
  }

  export default CountdownTimer;




  


