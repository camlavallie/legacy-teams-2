import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email:'',
    password:''
  });
  
  const {  email, password } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };
  // redirect if logged in 

  if(isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      <Container>
        <div className="login">
      <h1>Sign In</h1><br/>
        <form className="form-group" onSubmit={e => onSubmit(e)}>
         
          <div className="form-group">
            <input type="email" 
            placeholder="Email Address" 
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
            />
          </div>
          <div className="form-group">
            <input type="password" 
            placeholder="Password" 
            name="password" 
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
            />
          </div><br/>
         
          <input type="submit" className="btn btn-primary" value="Login"/>
        </form>
        </div>
        </Container>
    </Fragment>
  )
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
