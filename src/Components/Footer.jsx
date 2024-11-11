import React from 'react';

function Footer() {
  return (
    // Footer
    <footer className="text-center text-lg-start bg-black text-white">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-white">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Connect with us on social media:</span>
        </div>
        {/* Left */}
    
        {/* Right */}
        <div>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
    
      {/* Section: Links */}
      <section>
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-video me-3"></i>About Us
              </h6>
              <p>
                We are a leading streaming platform, offering high-quality video content across various genres. Our mission is to bring the best entertainment to viewers worldwide.
              </p>
            </div>
            {/* Grid column */}
    
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Popular Content</h6>
              <p>
                <a href="#!" className="text-white">LANDING PAGE</a>
              </p>
              <p>
                <a href="#!" className="text-white">HOME</a>
              </p>
              <p>
                <a href="#!" className="text-white">WATCH HISTORY</a>
              </p>
             
              
            </div>
            {/* Grid column */}
    
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Customer Support</h6>
              <p>
                <a href="#!" className="text-white">Help Center</a>
              </p>
              <p>
                <a href="#!" className="text-white">Account Settings</a>
              </p>
              <p>
                <a href="#!" className="text-white">Subscription Plans</a>
              </p>
              <p>
                <a href="#!" className="text-white">FAQs</a>
              </p>
            </div>
            {/* Grid column */}
    
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> 123 Media St, Los Angeles, CA</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                support@videoplayer.com
              </p>
              <p><i className="fas fa-phone me-3"></i> +1 800 555 1234</p>
              <p><i className="fas fa-print me-3"></i> +1 800 555 5678</p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}
    
      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        © {new Date().getFullYear()} VideoPlayer, Inc. All rights reserved.
      </div>
      {/* Copyright */}
    </footer>
    // Footer
  );
}

export default Footer;
