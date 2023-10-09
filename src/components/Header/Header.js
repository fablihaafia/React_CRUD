import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <img src={logo} alt="" className="logo img-fluid" />

          <div className="nav">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
