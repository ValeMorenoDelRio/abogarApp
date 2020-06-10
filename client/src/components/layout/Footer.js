import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import image1 from '../../img/final1.png';
import image2 from '../../img/final2.png';
import image3 from '../../img/dnda.jpg';
import image4 from '../../img/inpi.jpg';



const Footer = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className='display-block text-center'>
      <img src={image3} />
      <img src={image4} />
      <div className="grid margin-center-default grid-three-columns-0fr justify-center">
        <Link target="_blank" href={"https://www.facebook.com/Abogar-en-linea-104806954492240/"} className="grey-menu-link"><span>FACEBOOK</span></Link>
        <Link target="_blank" href={"https://www.instagram.com/abogar_en_linea/"} className="grey-menu-link"><span>INSTAGRAM</span></Link>
        <Link target="_blank" href={"http://linkedin.com/in/abogar-en-linea-estudio-virtual-b263531ab"} className="grey-menu-link"><span>LINKEDIN</span></Link>
      </div>
      <div className="margin-top-20">
       <Link target="_blank" href={"https://www.google.com/maps/place/Av.+Pedro+Luro+2633,+B7600GTF+Mar+del+Plata,+Buenos+Aires/@-37.9985706,-57.5484072,17z/data=!3m1!4b1!4m5!3m4!1s0x9584dc04b89ca4d3:0x70eda1f81f53caf0!8m2!3d-37.9985748!4d-57.5462185"} className="grey-menu-link"><span><span className="orange-color uppercase"> ABOGAR </span>en Línea, AV Luro 2633 Piso 8 Oficina B, 7600 MAR DEL PLATA</span></Link>
      </div>
    </div>
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
  <footer className='absolute-footer'>
    {!loading && (
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    )}
  </footer>
);
};

Footer.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Footer);

