import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Header = ({ auth: { isAuthenticated, loading}, logout }) => { 
    const authLinks = (
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ fontSize:'20px', color:'white, imortant!'}}>
          <Link to="/home">Home</Link>
          {/* <Nav.Link to="/about">About</Nav.Link>
          <Nav.Link to="/contact">Contact</Nav.Link> */}
          <Link to="/posts">Create Resource</Link>
           <Link to="/resource">Resources</Link>
          <Link onClick={logout} to="/home">Logout</Link>
        </Nav>
      </Navbar.Collapse>
    );
    const guestLinks = (
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ fontSize:'20px', color:'white, imortant!'}}>
          <Link to="/home">Home</Link>
          {/* <Nav.Link to="/about">About</Nav.Link>
          <Nav.Link to="/contact">Contact</Nav.Link> */}
          <Link to="/resource">Resources</Link>
        </Nav>
      </Navbar.Collapse>
      
    );


    return (
      <div>
        <Navbar className="navbar"  expand="lg" >
          <Navbar.Brand href="/home" style={{marginLeft:'1px', paddingRight:'170px', fontSize:'35px'}}>LegacyTEAMS<br/><p style={{fontSize:"13px", fontFamily:'Cormorant', opacity:".8", marginTop:'1px', marginBottom:'5px'}}></p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ paddingLeft:'15px', fontSize:'25px', color:'white'}}>
          { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>) }
        </Nav>
        <Form inline>
          <a href="https://www.facebook.com/legacyteams.inc/" rel="noopener noreferrer"
          target="_blank"><i className="fa fa-facebook-square" style={{fontSize:"35px", color:'grey'}}></i></a>

          < a href= "https://www.instagram.com"
          rel= "noopener noreferrer"
          target="_blank"><i className="fa fa-instagram" style={{fontSize:"35px", color:'grey'}}></i></a>
    </Form>
       
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