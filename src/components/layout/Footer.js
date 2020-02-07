import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
       
       
      
      
      
      <div className="footer">




          <div className="jumbotron-3-footer">
        <div className="bottom-nav">
        <Link to="/home">Home</Link>
        <Link to="/resource">Resources</Link>
        <Link to="/login">Login</Link>
        </div>

     
    
        <Link to="https://www.facebook.com/legacyteams.inc/" rel="noopener noreferrer"
        target="_blank"><i className="fa fa-facebook-square" style={{fontSize:"50px"}}></i></Link>

        <Link to= "https://www.instagram.com"
        rel= "noopener noreferrer"
        target="_blank"><i className="fa fa-instagram" style={{fontSize:"50px", paddingBottom:'10px', paddingTop:'10px'}}></i></Link>
            <p class="text-center text-gray-500 text-xs">
    &copy;{new Date().getFullYear()} LegacyTEAMS. All rights reserved.
  </p>
      </div>
      </div>
    )
  }
}

export default Footer;
