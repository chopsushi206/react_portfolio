import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

function Contact() {
  return (
    <div className="container-md d-flex justify-content-between mt-3">
      <Link to="#resume">
        <i className="fas fa-file-pdf fa-3x"></i>
      </Link>
      <a href="mailto:lihua.anderson@gmailcom" target="new">
        <i className="fas fa-envelope fa-3x"></i>
      </a>
      <a
        href="http://www.linkedin.com/in/li-hua-anderson-b259b7144"
        target="new"
      >
        <i className="fab fa-linkedin fa-3x"></i>
      </a>
      <a href="http://www.facebook.com/louise.anderson.9212301">
        <i className="fab fa-facebook-square fa-3x"></i>
      </a>
      <a href="http://www.instagram.com/chopsushi/">
        <i className="fab fa-instagram-square fa-3x"></i>
      </a>
      <a href="https://github.com/chopsushi206">
        <i className="fab fa-github-alt fa-3x"></i>
      </a>
    </div>
  );
}

export default Contact;
