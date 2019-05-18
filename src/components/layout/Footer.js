import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        
          <div className="jumbotron-3">
          <p className="lead">
     Copyright &copy; {new Date().getFullYear()} Legacy TEAMS
          </p>
         
          <a href="https://www.facebook.com/elena.lavallie?ref=bookmarks" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square"></i></a>

          < a href= "https://www.instagram.com/eklavallie/"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram"></i></a>

      </div>
      </div>
    )
  }
}

export default Footer;
