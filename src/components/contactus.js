import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Contact from './contact';


const ContactUs = ()=> (
 
  <section className='bg-color11'>
  <div className='bgwhite'>
<div className="container">
<div className="row ">

<div className="col-lg-8 col-md-8 col-sm-10 mx-auto pt-3 pb-2"><h3>Peter Stacks Limited</h3>
<div><iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20western%20road%20romford+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.maps.ie/route-planner.htm">Driving Route Planner</a></div>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-10 mx-auto pt-3 pb-2" >
    <div>
    <h3>Greater London</h3>
    <p>1 Western Court, Western Road<br/>
    Romford<br/>
    RM1 3JR<br/>
    United Kingdom</p>
    <p>T: +44(0) 7908745864<br/>
    F: +44(0) 2075551234
     </p>
     <p>info@peterstacks.co.uk</p>
    </div>
    </div>

</div></div></div>
 
  { /*<section className= "contact pt-5 pb-4">
        



  
</section>*/}
<Contact/>
</section>
);

export default ContactUs;