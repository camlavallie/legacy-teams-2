import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });
  
  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });
  const onSubmit = async e => {
    e.preventDefault();
    if(password !== password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
     register({ name, email, password });
    }
  };

  if(isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      <h1>Register</h1>
        <form className="form-group" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text" 
            placeholder="Name" 
            name="name" 
            value={name}
            onChange={e => onChange(e)}
            required/>
          </div>
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
          </div>
          <div className="form-group">
            <input type="password" 
            placeholder="Confirm Password" 
            name="password2" 
            minLength="6"
            value={password2}
            onChange={e => onChange(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register"/>
         
        </form>

    </Fragment>
  )
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { setAlert, register })(Register);
