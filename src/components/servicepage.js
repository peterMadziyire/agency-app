import React from 'react';
import {Link} from 'react-router-dom';
import client from '../pages/client';
import '../styles/skills.css';
import '../styles/home.css';
import {marked} from 'marked'; 
import * as Markdown from 'react-markdown';
import SimpleSlider from './skillsslider';
import Contact from './contact';
import BlackLoader from '../images/black-loader.gif'

class ServiceType extends React.Component{

state={services:[]}

componentDidMount(){
const {slug}= this.props.match.params

if(slug){

    console.log(slug)
    client.getEntries({
        'content_type': 'services', 'fields.slug':slug
       })
       .then((entries)=> {
         this.setState({services: entries.items[0]})
         console.log(entries.items[0])// 200
         console.log(this.state.services.fields.servicesTitle)
       })
    }
}



render(){

    if (this.state.skill.length===0||this.state.skill.fields.skillsImage.fields.file.url===false) {return <div><img src={BlackLoader}/></div>}

return (
    <div>
    <section className="bg-color">
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    <h2 className='title-shadow text-center'>{this.state.services.fields.servicesTitle}</h2>
    <hr/>
    <div className="col-10 mx-auto my-4 align-self-center">
    <div className="about-img__container">
    <img className ='my-image my-shadow' src={this.state.services.fields.servicesPic.fields.file.url} />
    <a href="#" className="visit-button1 text-uppercase p-2">Hear More</a>
    </div></div>
    <hr className="color-white"/>
        <div className="col-10 mx-auto">
        <Markdown source={this.state.services.fields.servicesDescription} />
  </div>
   
    </div>
    </div>
    </div>
    
    </section>
    <div className="container-fluid">
    <div className="row"><div className="col"><img src={'../images/heade.png'} className="corousel-bottom img-fluid"/></div></div>
</div>

<div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
<SimpleSlider/>

</div>
<Contact/>
</div>
)

}

}

export default ServiceType