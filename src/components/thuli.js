import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';






export default class Thuli extends React.Component{



render() {

return (<section className="mee p-5 mb-5">
<div className="container">
  <div className="row align-items-center mb-5">
    <div className="col-md-6 mx-auto text-center mb-5">
      <h1 className="mycolor">About Us</h1>
      <p className="lead text-white">Made up of a small team of talented, creative, and experienced full stack developers and marketing professionals, we approach each client and project with the same drive and enthusiasm, bringing into play our shared expertise and knowledge.</p>
      <Link to= "/ourstory" className="btn btn-lg btn-primary m-2">Read More</Link>
    </div>
  </div>
</div>
</section>

)}

}