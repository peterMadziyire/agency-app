import React from 'react';
import {Link} from 'react-router-dom';
import client from '../pages/client';
import '../styles/skills.css';
import '../styles/home.css';
import {marked} from 'marked'; 
import * as Markdown from 'react-markdown';
import Reviews from './reviews';
import Contact from './contact';

class OurStory extends React.Component {





render(){
return(<section className='bg-color11'>

<div className='bgwhite'>
<div className="container">
<div className="row ">
    <div className="col-lg-8 col-md-8 col-sm-10 mx-auto pt-3"><h3>Back Story</h3>
    <p className="font-weight-bold">Based in London United Kingdom, Peter Stacks Limited is one of the fastest growing software and web development agency. 
    Made up of a small team of talented, creative, and experienced full stack developers and marketing professionals, 
    we approach each client and project with the same drive and enthusiasm, bringing into play our shared expertise and knowledge. </p>
    <p>Since incorporation in 2019, we have expanded to offer a full range of technical, web, software and digital marketing services for business. Our objective is to create long lasting relationships with businesses of all sizes, from individuals and start-ups to blue chip companies and institutions, delivering expert and cost effective digital & design solutions. </p></div>
    <div className="col-lg-4 col-md-4 col-sm-10 mx-auto pt-3">
    <div className><h3 className='text-white'>''</h3><p>Peter Stacks Offices/
    Romford, London, UK</p></div>
    </div>

    <div className="col-lg-8 col-md-8 col-sm-10 mx-auto pt-3"><img className='my-image my-shadow' src="images/about-team.jpg" />
    
    </div>
    <div className="col-lg-4 col-md-4 col-sm-10 mx-auto pt-3">
    <div><h3>"We’re open, friendly & most importantly, we listen… why not tell us your requirements?"</h3></div>
    </div>

    <div className="col-lg-8 col-md-8 col-sm-10 mx-auto pt-4"><h3>Founder</h3>
    <p>Peter is a self taught Full-stack Developer who originally qualified as a Finance and Business Management professional at the University of Hertfordshire in 2010. After several years working within finance sector, Peter started to gravitate towards tech and understanding code as he had always felt he was an engineer and creative at heart. </p>
   <p> Being the natural problem solver, he would always find joy in discovering ways to use code to create efficiency at work.
   Decoding different finance software was the gateway to teaching himself several Programming Languages. 
   He has since followed his passion and progressed to the world of web and software development where he has now founded Peter Stacks Limited. </p>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-10 mx-auto pt-3">
    <div></div>
    </div>


    <div className="col-lg-8 col-md-8 col-sm-10 mx-auto pt-3"><h3>What We Do</h3>
    <p>Our core services are Web Development, e-Commerce, Web & Mobile Design, UI UX, e-Marketing, App Development, Search Engine Optimisation (SEO) and Hosting, together with a range of other complimentary digital services.</p>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-10 mx-auto pt-3">
    <div></div>
    </div>

    <div className="col-lg-8 col-md-8 col-sm-10 mx-auto pt-3"><h3>Coming Soon</h3>
    <p>We will soon be offering a full suite of Digital Marketing services, including Social Media Management, Google AdWords, Google Analytics, Content Marketing and Linkbuilding. 

    We are also working towards providing Cyber Security Services. Please subscribe to receive notification when this becomes active. </p>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-10 mx-auto pt-3">
    <div></div>
    </div>

    </div>
    </div>
</div>


{}

<Reviews/>
    <Contact/>
    </section>
    )




}


}

export default OurStory