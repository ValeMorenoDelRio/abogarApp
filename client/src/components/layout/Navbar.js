import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import image1 from '../../img/final1.png';
import image2 from '../../img/final2.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='links-container'>
      <li>
        <Link to='/dashboard'>
          <span className='hide-sm'>Inicio</span>
        </Link>
      </li>
      <li>
        <Link to='/cpanel'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Mi Cuenta</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Salir</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='links-container'>
      <li>
        <Link to='/register'>Registración</Link>
      </li>
      <li>
        <Link to='/login'>Inicia Sesión</Link>
      </li>
    </ul>
  );

  return (
    <nav className='bg-dark grid-columns-2'>
      <a className='logo-container'> 
      <img src={image1}  alt='logo' width="120" height="80" />
      <img src={image2}  alt='logo2' width="70" height="30" />
      </a>
      {!loading || (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);


