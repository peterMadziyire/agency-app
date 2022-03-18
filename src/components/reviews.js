import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {FiTwitter, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';



const Reviews = ()=> (
    <section class="testimonial text-center">
    <div class="container">

        <div class="heading white-heading">
            Testimonial
        </div>
        <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
         
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="testimonial4_slide">
                        <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" />
                        <p>Developers were excellent in their skills, great on deadline and great on communication. I would highly recommend for any task in hand. I will definitely use them again.
                        AAAAAAAA++++++++ </p>
                        <h4>CWN Clothing</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="testimonial4_slide">
                        <img src="https://i.ibb.co/2YQCxGW/team4a.jpg" class="img-circle img-responsive" /><p>Peter offered clear advice and help on how best to achieve my goal. He worked quickly and produced an excellent final product. I will certainly use him again in the future and can highly recommend. </p>
                        <h4>El Apparrel</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="testimonial4_slide">
                        <img src="https://i.ibb.co/QjFFmK2/team3.jpg" class="img-circle img-responsive" />
                        <p>Team were so helpful - very easy to liaise with and kept me informed every step of the process - would highly recommend! </p>
                        <h4>My Expensify App</h4>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#testimonial4" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
</section>
   

);

export default Reviews;
