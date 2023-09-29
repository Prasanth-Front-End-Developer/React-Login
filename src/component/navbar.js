import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav-icons-container">
            <div className="nav-icon in-block">
              <i className="fa fa-bell-o fa-lg m-r-20" aria-hidden="true"></i>
              <i className="fa fa-bullhorn fa-lg m-r-20" aria-hidden="true"></i>
              <img
                src="https://img.favpng.com/9/16/11/student-cartoon-avatar-png-favpng-T0KuPNVPyfp00uNTwQVK2yk7D.jpg"
                height={50}
                width={50}
                alt="Avatar"
                className="avatar"
              />
            </div>
            <div className="dropdown in-block">
              <button
                className="btn btn-btn btn-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                John Doe
              </button>

              <ul className="dropdown-menu dropdown-menu-light">
                <li>
                  <a className="dropdown-item active" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Setting
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Log out
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
              </ul>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanv15NavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Example Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/details" className="nav-link active" aria-current="page">
                    <i className="fa fa-flag m-r-10 fa-lg" aria-hidden="true"></i>
                    Report
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;