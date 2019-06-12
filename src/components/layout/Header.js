import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';


class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar"  expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/home" style={{marginLeft:'25px', fontFamily:'Cormorant', fontSize:'35px'}}>Legacy TEAMS<br/><p style={{fontSize:"15px", fontFamily:'Cormorant', opacity:".8", marginTop:'5px', marginBottom:'5px'}}>Mentoring, Coaching and Pastoral Counseling.</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{paddingLeft:'100px', fontSize:'20px', color:'white, imortant!'}}>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
        </Nav>
        <Form inline style={{paddingLeft:'90px'}}>
          <a href="https://www.facebook.com/legacyteams.inc/" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square" style={{fontSize:"35px"}}></i></a>

          < a href= "https://www.instagram.com"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram" style={{fontSize:"35px"}}></i></a>
    </Form>
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}
export default Header;