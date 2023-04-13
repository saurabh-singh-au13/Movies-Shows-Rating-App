import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>I am a developers, dedicated to creating high-quality software.</p>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li>Email: mar05cosmail@gmail.com</li>
              <li>Phone: 7291089688</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="https://www.facebook.com/S.Rajvansh001" target="_f"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://github.com/saurabh-singh-au13"  target="_g"><i className="fab fa-github"></i></a></li>
              <li><a href="https://www.instagram.com/s.rajvansh.96/" target="_i"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://portfolio-e9044.web.app/" target="_p"><i class="fa fa-share" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 My Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
