import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Header = ({ auth: { isAuthenticated, loading}, logout }) => { 
    const authLinks = (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{paddingLeft:'100px', fontSize:'20px', color:'white, imortant!'}}>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/posts">Resources</Nav.Link>
          <Nav.Link onClick={logout} href="/home">Logout</Nav.Link>
        </Nav>
        <Form inline style={{paddingLeft:'90px'}}>
          <a href="https://www.facebook.com/legacyteams.inc/" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square" style={{fontSize:"35px", color:'grey'}}></i></a>

          < a href= "https://www.instagram.com"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram" style={{fontSize:"35px", color:'grey'}}></i></a>
    </Form>
      </Navbar.Collapse>
    );
    const guestLinks = (
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{paddingLeft:'100px', fontSize:'20px', color:'white, imortant!'}}>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/posts">Resources</Nav.Link>
        </Nav>
        <Form inline style={{paddingLeft:'90px'}}>
          <a href="https://www.facebook.com/legacyteams.inc/" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square" style={{fontSize:"35px", color:'grey'}}></i></a>

          < a href= "https://www.instagram.com"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram" style={{fontSize:"35px", color:'grey'}}></i></a>
    </Form>
      </Navbar.Collapse>
      
    );


    return (
      <div>
        <Navbar className="navbar"  expand="lg" >
          <Navbar.Brand href="/home" style={{marginLeft:'25px', fontSize:'35px'}}>LegacyTEAMS<br/><p style={{fontSize:"15px", fontFamily:'Cormorant', opacity:".8", marginTop:'5px', marginBottom:'5px'}}>Mentoring, Coaching and Pastoral Counseling.</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{paddingLeft:'100px', fontSize:'20px', color:'white, imortant!'}}>
          { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>) }
        </Nav>
       
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  };

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, {logout})(Header);