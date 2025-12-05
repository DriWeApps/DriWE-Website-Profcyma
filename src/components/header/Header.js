import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Common_button from "../common/common-btn/Common_button";

function Header() {

  const location = useLocation();
  const [expanded, setExpanded] = useState(false); // state to control navbar toggle

  const handleNavClick = () => {
    setExpanded(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className='header_section'>
        <Navbar expand="lg" className="" expanded={expanded} onToggle={setExpanded}>
          <div className="container">
            <Navbar.Brand>
              <Link to={'/'}>
                <img onClick={handleNavClick} className="logo" src={process.env.PUBLIC_URL + '/assets/images/logo/drive_logo.png'} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center">
                <Nav.Link onClick={handleNavClick} as={Link} to={"/"} className={location.pathname === "/" ? "active" : ""} >
                  Home
                </Nav.Link>

                <Nav.Link onClick={handleNavClick} as={Link} to={"/about-us"} className={location.pathname === "/about-us" ? "active" : ""} >
                  About us
                </Nav.Link>

                <Nav.Link onClick={handleNavClick} as={Link} to={"/services"} className={location.pathname === "/services" ? "active" : ""} >
                  Our Services
                </Nav.Link>

                <Nav.Link onClick={handleNavClick} as={Link} to={"/contact-us"} className={location.pathname === "/contact-us" ? "active" : ""} >
                  Contact us
                </Nav.Link>

                <Nav.Link>
  <Common_button name="Sign Up" link="/sign-up" />
</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </section>

    </>
  );
}

export default Header;
