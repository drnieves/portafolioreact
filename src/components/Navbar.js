import React from "react";
import logo from "../clinicanieves1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a
          className="navbar-brand"
          href="clinicanieves.co"
          class="d-inline-block align-text-top"
        >
          <img className="logo" src={logo} alt="logo.." />
          drnieves
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item active">
              <a className="nav-link" href="www.clinicanieves.co">
                Proyecto <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.clinicanieves.co">
                Bio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.clinicanieves.co">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.clinicanieves.co">
                Experiencia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.clinicanieves.co">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
