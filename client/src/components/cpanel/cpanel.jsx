import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile, createProfile } from '../../actions/profile';

const Cpanel = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  createProfile
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [formData, setFormData] = useState({
    phone: '',    
    job: '',
    address: '',
    zip: '',
    country:''
  });
  console.log(profile);
  const { job, phone, country, address, zip } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  const onSubmit = async e => {
    e.preventDefault();
    createProfile(formData, true);
  };

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='grid grid-default'>
        <div className=''>
          <h2>Configura tu cuenta</h2>
          <p>Cuentanos un poco mas sobre ti</p>
        </div>
        <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Trabajo'
            name='job'
            value={profile.job}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Telefono'
            name='phone'
            value={profile.phone}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Pais'
            name='country'
            value={profile.country}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Direccion'
            name='address'
            value={profile.address}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Codigo Postal'
            name='zip'
            value={profile.zip}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Guardar' />
      </form>
      </div>     
    </Fragment>
  );
};

Cpanel.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, createProfile }
)(Cpanel);
