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
    return <Redirect to='/posts' />;
  }
  
  return (
    <Fragment>
      <Container>
        <div className="login w-full">
      <h1>Sign In</h1><br/>
      <div class="flex justify-center flex-wrap">
        <form class="bg-white lg:w-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={e => onSubmit(e)}>
         
          <div class="mb-4">
            <input type="email" 
            placeholder="Email Address" 
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
            class = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
         
         <div class="mb-4">
            <input type="password" 
            placeholder="Password" 
            name="password" 
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
            class = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
         
          <input type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="Login"
          />
        </form>
        </div>
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
