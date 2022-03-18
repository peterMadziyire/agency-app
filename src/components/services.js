import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import {FiTwitter, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import {FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import { MDBAnimation } from "mdbreact";
import client from '../pages/client';

class Services extends React.Component{
state= {servicepage: []}

componentDidMount(){

    client.getEntries({
       'content_type': 'services'
      })
      .then((entries)=> {
        this.setState({servicepage: entries.items})
        console.log(entries.items)// 200
      })
}

render(){

    if (this.state.servicepage.length===0) {return <div>Loading</div>}
return(

    <section>
    
    <div className="serv py-5"><h2 className="text-center text-white">SERVICES</h2></div>
    <div className="container">
    
    <div className="row">
    {this.state.servicepage.map((item)=> 
        <div className="col-lg-4 col-md-6 col-sm-6 my-3">
        
        <div className="card shadow-lg text-center border-0 fadeInUp slow"><img src= {item.fields.servicesPic.fields.file.url} className="w-100"/>
        <div className="size card-body"><Link to= {`/services/${item.fields.slug}`}><h5 className="card-title">{item.fields.servicesTitle}</h5></Link>
        <p className="card-text">{item.fields.servicesExert}</p>
        </div>
        </div>
    </div>)}
    
        {}

    </div>
    
    
    
    </div>
    
    </section>


)


}

}

  

export default Services;
