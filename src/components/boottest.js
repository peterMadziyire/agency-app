import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import client from '../pages/client';
import {FiTwitter, FiMenu, FiLinkedin, FiInstagram, FiFacebook} from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';




class Boottest extends React.Component {
state={skillspage:[]};

componentDidMount(){

    client.getEntries({
        'content_type': 'skills'
       })
       .then((entries)=> {
         this.setState({skillspage: entries.items})
         console.log(entries.items)
       })

}

render(){
    if (this.state.skillspage.length===0) {return <div>Loading</div>}
return (
    <section id="team" className="bg-light py-5">
    <div className="container">
    <div className="row">
    {this.state.skillspage.map((item)=> <div className="col-md-6 col-lg-4 my-4">
    <div className="card shadow text-center"><div className="icon mt-4"> <img src={item.fields.skillsIcon.fields.file.url} alt="member" className=" img-fluid services-icon icon-circle"/>  </div><div className="skills-size card-body">
        <h5 className="card-title text-capitalize">{item.fields.skillsTitle}</h5>
        <p className="card-text">{item.fields.skillsExert}</p>
        <Link to= {`/skills/${item.fields.slug}`} className="btn btn-outline-warning text-uppercase">press here</Link>
    </div>
    </div>
    </div>)}
    
    </div>
</div>
    </section>
)


}




}

export default Boottest;
