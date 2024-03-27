import React from "react";
import headerStyle from "./Header.module.scss";
// import {
//   Navbar,
//   Nav,
//   Container,
//   NavDropdown,
//   Form,
//   Button,
// } from "react-bootstrap";

import logo from "../../img/hospital.png";

const Header = () => {
  return (
    <header className="bg-info p-4">
      <div className="container d-flex flex-column align-items-center justify-content-center gap-2">

        <h1 className="text-center text-black fw-semibold m-3 p-3 ">
          <img src={logo} alt="" width="80"/>
          Loctation Hospital
        </h1>
        <span className="  fw-semibold text-warning bg-black py-3 px-5     rounded-4 opacity-75">Our Doctors</span>
      </div>
    </header>
  );
};

export default Header;
