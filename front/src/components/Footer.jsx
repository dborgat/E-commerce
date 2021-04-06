//REACT
import React from "react";
import { Link } from "react-router-dom";

//STYLE
import "./styles/Footer.css";

function footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3 style={{marginBottom:'25%'}}>
          Company <span>Drunkart</span>
        </h3>


        <p className="footer-company-name">Drunkart Company © 2021</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>221b Baker Street</span> Marylebone, London
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <Link to="mailto:drankartp5@gmail.com">drankartp5@gmail.com</Link>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Drunkart is an online-only provider of alcohol to the worldwide. Our
          team includes contributors from around the world. We offer an
          important selection of drinks and we are driven by our passion for the
          drinks industry.
        </p>

        <div className="footer-icons">
         

          <a
            href="https://github.com/yesibarros/E-commerceSHOP.git"
            target="_blank"
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default footer;
