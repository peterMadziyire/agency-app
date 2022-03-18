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

class SkillType extends React.Component{

state={skill:[]}

componentDidMount(){
const {slug}= this.props.match.params

if(slug){

    console.log(slug)
    client.getEntries({
        'content_type': 'skills', 'fields.slug':slug
       })
       .then((entries)=> {
         this.setState({skill: entries.items[0]})
         console.log(entries.items[0])// 200
         console.log(this.state.skill.fields.skillsTitle)
       })
    }
}

// getParsedMarkdown(skilldesription){
// return { __html:marked(skilldesription, { sanitize:true })
// }

// }

render(){

    if (this.state.skill.length===0||this.state.skill.fields.skillsImage.fields.file.url===false) {return <div align="center" className="py-5 text-center"><img src={BlackLoader}/></div>}

return (
    <div>
    <section className="bg-color">
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    <h2 className='title-shadow text-center'>{this.state.skill.fields.skillsTitle}</h2>
    <hr/>
    <div className="col-10 mx-auto my-4 align-self-center">
    <div className="about-img__container">
    <img className ='my-image my-shadow' src={this.state.skill.fields.skillsImage.fields.file.url} /> 
    
    <a href="#" className="visit-button1 text-uppercase p-2">Hear More</a>
    </div></div>
    <hr className="color-white"/>
        <div className="col-10 mx-auto">
        <Markdown source={this.state.skill.fields.skillsDescription} />
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

export default SkillType