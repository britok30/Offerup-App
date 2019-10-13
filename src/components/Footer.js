import React from "react";

const Footer = props => {
  return (
    <div>
      <footer className="footer footer-black  footer-white ">
        <div className="container-fluid">
          <div className="row">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="https://britojs.com" target="_blank">
                    Britojs
                  </a>
                </li>
                <li>
                  <a href="mailto: britok30@gmail.com">Contact</a>
                </li>
                <li>
                  <a href="#">Created by Kelvin Brito</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
