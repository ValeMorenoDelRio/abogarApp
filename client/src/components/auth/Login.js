import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='text-primary medium-font'>Ingresa</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Ingresa en tu cuenta 
      </p>
      <form className='form ' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
              id='email-input'
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
          />
        </div>
        <div className='form-group'>
          <input
              id='password-input'
            type='password'
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Ingresa' />
      </form>
      <p className='my-1'>
        No tienes cuenta? <Link className='orange-color' to='/register'>Registrate ahora!</Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
