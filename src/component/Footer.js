import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <p className="mb-1">📞 +91 98765 43210</p>
            <p className="mb-0">✉️ support@lapzone.com</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <p className="mb-1">Instagram | Twitter | LinkedIn</p>
            <p className="mb-0">#LapZone</p>
          </div>
          <div className="col-md-4">
            <h5>© 2025 LapZone</h5>
            <p className="mb-0">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
