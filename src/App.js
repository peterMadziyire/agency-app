import React from 'react';
import {BrowserRouter, Route, Switch, Link } from "react-router-dom";

import AboutUs from './components/aboutus';

import ContactUs from './components/contactus';
import NotFound from './components/notfound';
import Header from './components/header';

import SkillType from './components/skillspage';
import ServiceType from './components/servicepage';
import Footer from './components/footer';
import OurStory from './components/ourstory';
import ScrollToTop from './components/upScroll';
import ScrollTop from './components/scrolltop'

const AppRouter = ()=> (
    
<BrowserRouter>
<ScrollToTop />
<ScrollTop/>
<div>

<Header/>

<Switch>
<Route path="/" component= {AboutUs} exact={true}/>

<Route path="/skills/:slug" component= {SkillType}/>
<Route path="/services/:slug" component= {ServiceType}/>
<Route path="/ourstory" component= {OurStory}/>
<Route path="/contactus" component= {ContactUs}/>
<Route component= {NotFound}/>
</Switch>
<Footer/>
</div>
</BrowserRouter>


);

export default AppRouter;