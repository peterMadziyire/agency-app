import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/portfolioslider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';


export default class SimpleSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className='text-center p-5' id="myportfolio">
        <div className="col d-flex flex-wrap text-uppercase justify-content-center p-2">
        <h1 className="font-weight-bold align-self-center mx-1">our</h1>
        <h1 className="section-title--special mx-1">portfolio</h1>
      </div>
          <Slider {...settings}>
            <div className="snip"><img
              src={'/images/elaparral.png'}
              className="snip-pic"
              alt="gallery img"
            /><a href="#" className="visit-button text-capitalize p-2">Visit Website</a></div>

            <div className="snip"><img
              src={'/images/cwn-clothing.png'}
              className="snip-pic"
              alt="gallery img"
            /> <a href="https://cwn-clothing.herokuapp.com" className="visit-button text-capitalize p-2">Visit Website</a></div>
            
            <div className="snip"><img
              src={'/images/elapparrel1.png'}
              className="snip-pic"
              alt="gallery img"
            /> <a href="#" className="visit-button text-capitalize p-2">Visit Website</a></div>
            
          </Slider>
        </div>
      );
    }
  }

