import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import CountdownTimer from './projects';

import Subscribe from './subscribe';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';


const ProjectContainer =()=> {

return (
    <div className= " container-fluid subscribe contact text-center text-white">

    <div className="row middle ">
   <div className="col-12">
   <CountdownTimer/>
   </div> 
   <div className="col-12"><Subscribe/></div>


</div>

</div>




)





}

export default ProjectContainer;