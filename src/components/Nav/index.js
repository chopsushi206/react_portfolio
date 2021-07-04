import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav>
      <Link
        to="/about"
        className={
          window.location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        About
      </Link>

      <Link
        to="/skills"
        className={
          window.location.pathname === "/projects"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Projects
      </Link>

      <Link
        to="/skills"
        className={
          window.location.pathname === "/skills"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Skills
      </Link>

      <Link
        to="/contact"
        className={
          window.location.pathname === "/contact"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Contact
      </Link>
    </nav>
  );
}

export default Nav;
