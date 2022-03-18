import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import '../styles/navbar.css';
import {FiTwitter, FiMenu, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";

export default class Navbar extends React.Component {

    state = { scroller: 0, 
            changeicon: true};



    handleScroll = () => {
        this.setState({ scroller: document.documentElement.scrollTop });
      };

      handleicon=()=> {
        this.setState({changeicon:!this.state.changeicon})

      }


      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
  
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }  



    render() {
        return (

<nav className= {this.state.scroller > 20||!this.state.changeicon ? 'navbar py-3 navbar-dark navbar-expand-sm bg-dark fixed-top' : 'navbar py-3 navbar-dark navbar-expand-sm fixed-top'}>

<a href="#" className="navbar-brand text-uppercase ls font-weight-bold"  >PETER STACKS</a>
<button onClick={this.handleicon} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarlinks">
<span className={this.state.changeicon?"navbar-toggler-icon":"navbar-toggler-icon2"} >{this.state.changeicon?"":"X"}</span>
</button><div className="collapse navbar-collapse" id="navbarlinks"><ul className="navbar-nav mx-auto font-weight-bold">

<li className="nav-item active"> <Link to="/" className="nav-link" >Home</Link>
</li>
<li className="nav-item"> <Link to="/ourstory" className="nav-link">About Us</Link>
</li>
<li className="nav-item"> <Link to="/contactus" className="nav-link">Contact Us</Link>
</li>
</ul></div>
</nav>


)

}


}


