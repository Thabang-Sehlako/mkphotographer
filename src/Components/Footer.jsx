import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope ,FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

  const currentYear = new Date().getFullYear();



  return (
    <footer className="footer   p-5" style={{background:'wheat'}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h5>Follow us on social media</h5>
           
            <Link to="https://wa.me/26653302848" className="m-1">
              <FaWhatsapp size={30} style={{color:'grey'}}/>
            </Link>
          
            <Link to="#" className="m-1">
              <FaInstagram size={30} style={{color:'grey'}}/>
            </Link>
            <Link to="https://web.facebook.com/search/top?q=mk%20photography" className="m-1">
              <FaFacebook size={30} style={{color:'grey'}}/>
            </Link>
          
          </div>
          <div className="col-12 text-center mt-4">
            <h5>Get in touch</h5>
            <Link to="#" className="m-1">
              <FaEnvelope size={30} style={{color:'grey'}}/>
            </Link>
          </div>
          <div className="col-12 text-center mt-4">
            <p>Designed by <Link to ="https://thabang-sehlako.github.io/portfolio/"><span>Thabang</span></Link></p>
          </div>
          <div className="col-12 text-center mt-4">
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
