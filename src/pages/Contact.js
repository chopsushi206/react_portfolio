import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container flex-column align-items-between justify-content-center">
      <>
        <div className="row d-flex justify-content-center mb-5">
          <h2>Contact</h2>
          <p>
            Please use the links below in order to navigate to my social media,
            or email me. My Resume is linked for download as well.
          </p>
        </div>
        <div className="row d-flex justify-content-center mb-5">
          <div className="col-6 col-sm-3 d-flex justify-content-center">
            <a href="https://github.com/chopsushi206">
              <i className="fab fa-github-alt fa-3x"></i>
            </a>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly mb-5">
          <div className="col-6 col-sm-3 d-flex justify-content-center">
            <Link to="#resume">
              <i className="fas fa-file-pdf fa-3x"></i>
            </Link>
          </div>
          <div className="col-6 col-sm-3 d-flex justify-content-center">
            <a href="mailto:lihua.anderson@gmailcom" target="new">
              <i className="fas fa-envelope fa-3x"></i>
            </a>
          </div>
        </div>
      </>
      <>
        <div className="row d-flex justify-content-evenly mb-5">
          <div className="col-6 col-sm-3 d-flex justify-content-center">
            <a
              href="http://www.linkedin.com/in/li-hua-anderson-b259b7144"
              target="new"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
          </div>
          <div className="col-6 col-sm-3 d-flex justify-content-center">
            <a href="http://www.instagram.com/chopsushi/">
              <i className="fab fa-instagram-square fa-3x"></i>
            </a>
          </div>
          <div className="col-6 col-sm-3 d-flex justify-content-center">
            <a href="http://www.facebook.com/louise.anderson.9212301">
              <i className="fab fa-facebook-square fa-3x"></i>
            </a>
          </div>
        </div>
      </>
    </div>
  );
}

export default Contact;
