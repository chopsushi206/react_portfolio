import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded bg-dark mb-3" dark>
        <NavbarBrand href="/" className="mr-auto ms-3">
          PORTFOLIO
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-3" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ms-5" navbar>
            <NavItem>
              <Link
                to="/about"
                className={
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to="/projects"
                className={
                  window.location.pathname === "/projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projects
              </Link>
            </NavItem>
            <NavItem>
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
            </NavItem>
            <NavItem>
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
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
