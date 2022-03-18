import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {FaPlus} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import emailjs from 'emailjs-com';
import {FaArrowDown, FaArrowAltCircleDown} from "react-icons/fa";



export default class Contact extends React.Component{
    state = { name: '', lastname:'', email: '', telephone:'' , message: ''};


    handleChange=(event)=> {
        
        const target=event.target;
        const value= target.value;
        const name= target.name;
    this.setState({[name]:value})    

    console.log(this.state.lastname)
    }

    handleSubmit=(e)=> {
        e.preventDefault();

        let templateParams = {
            from_name: this.state.name + " " + this.state.lastname,
            from_email: this.state.email,
            telephone: this.state.telephone,
            to_name: 'Peter Stacks Ltd',
            to_email: 'petertm@live.co.uk',
            subject: "Peter Stacks Enquiry",
            message_html: this.state.message,
            test_this: 'regards'
    
        }

        emailjs.send('gmail','testing', templateParams, 'user_K1S9lQEQDtFiCsUpuXW79').then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))

    }

    render() {
    
    return (<section className= "contact pt-5 pb-4">
        
        <div className="container">
        <br/><br/>
        <h2 className="card-title text-center text-white m-bottom-">Ready to get started?</h2>
        <p className="text-center text-white mb-5">Please Message Us</p>
        <div className="contact_overlay position-absolute"><img src="/images/heade-bottom-shape.png" alt="img" className="img-fluid"/></div>
        <div class="row d-flex justify-content-center"><div class="col-md-8">


        <form onSubmit={this.handleSubmit} className="needs-validation text-center" id="contactForm">
        <div className="form-row ">
        <div className="col-md-6">
        <label for="validationCustom01"></label>
        <input type="text" onChange={this.handleChange} name="name" className="form-control paddy rounded-sm border-0" id="validationCustom01" placeholder="Your name" required="" value={this.state.name}/>
        <div className="valid-feedback">Looks good!</div></div>
        <div className="col-md-6">
        <label for="validationCustom02"></label>
        <input type="text" onChange={this.handleChange} name="lastname" className="form-control paddy rounded-sm border-0" id="validationCustom02" placeholder="Last name" required="" value={this.state.lastname}/>
        <div className="valid-feedback">Looks good!</div></div>
        <div className="col-md-6">
        <label for="validationCustom03"></label>
        <input type="email" onChange={this.handleChange} name="email" className="form-control paddy rounded-sm border-0" id="validationCustom03" placeholder="Email" required="" value={this.state.email}/>
        <div className="valid-feedback">Looks good!</div></div>
        <div className="col-md-6">
        <label for="validationCustom04"></label>
        <input type="tel" onChange={this.handleChange} name="telephone" className="form-control paddy rounded-sm border-0" id="validationCustom04" placeholder="Telephone No" required="" value={this.state.telephone}/>
        <div className="valid-feedback">Looks good!</div></div>


         <div class="col-md-12">
                              <div class="form-group">
                                  <label for="form_message"></label>
                                  <textarea id="form_message" onChange={this.handleChange} name="message" className="form-control" placeholder="Your Message" rows="4" value={this.state.message} data-error="Please, leave us a message."></textarea>
                                  <div className="help-block with-errors"></div>
                              </div>
                          </div>
        </div>
        <button class="btn-success btn-lg wow zoomIn rounded-sm slow mt-5 border-0" type="submit">let's talk</button>
        </form>
        

        </div>
        </div>
        </div>

     
        
        </section>


)
}
}