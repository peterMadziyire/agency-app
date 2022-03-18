import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {FiTwitter, FiMenu, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
import $ from "jquery";

class ScrollTop extends React.Component {


state = {data: [""]};


topFunction=()=> {

    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

render() {
return (<div>
    <button onClick={this.topFunction} id="myBtn" title="Go to top">Top</button>
    
    </div>



)



}

}

export default ScrollTop;
