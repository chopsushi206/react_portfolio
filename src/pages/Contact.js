import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Link to="#resume">
        <i className="fas fa-file-pdf fa-3x"></i>
      </Link>
      <Link to="mailto:lihua.anderson@gmailcom" target="new">
        <i className="fas fa-envelope fa-3x"></i>
      </Link>
      <Link
        to="http://www.linkedin.com/in/li-hua-anderson-b259b7144"
        target="new"
      >
        <i className="fab fa-linkedin fa-3x"></i>
      </Link>
      <Link to="http://www.facebook.com/louise.anderson.9212301">
        <i className="fab fa-facebook-square fa-3x"></i>
      </Link>
      <Link to="http://www.instagram.com/chopsushi/">
        <i className="fab fa-instagram-square fa-3x"></i>
      </Link>
      <Link to="https://github.com/chopsushi206">
        <i className="fab fa-github-alt fa-3x"></i>
      </Link>
    </div>
  );
}

export default Contact;
