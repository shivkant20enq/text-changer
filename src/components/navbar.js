import React from "react";
import propTypes from "prop-types";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>

              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
              <Link className="nav-link" to="/contact">
                {props.contact}
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggle}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: propTypes.string,
  about: propTypes.string,
};

Navbar.defaultProps = {
  title: "propTypes.string",
  about: "propTypes.string",
};
