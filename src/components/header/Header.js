import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link classname="option" to="/shop">
          SHOP
        </Link>
        <Link classname="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
