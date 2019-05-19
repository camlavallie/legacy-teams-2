import React, { Component } from 'react'



class Footer extends Component {
  render() {
    return (
       
       
      
      
      
      <div className="footer">




          <div className="jumbotron-3-footer">
        <div className="bottom-nav">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/services">Services</a>
        </div>

     
    
        <a href="https://www.facebook.com/elena.lavallie?ref=bookmarks" rel="noopener noreferrer"
        target="_blank"><i className="fa fa-facebook-square"></i></a>

        < a href= "https://www.instagram.com/eklavallie/"
        rel= "noopener noreferrer"
        target="_blank"><i className="fa fa-instagram"></i></a>
          <p className="lead">
     Copyright &copy; {new Date().getFullYear()} Legacy TEAMS
          </p>
      </div>
      </div>
    )
  }
}

export default Footer;
