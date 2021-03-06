import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assests/Flashy.png";
import "../css/Header.css";

const Header = () => {
  return (
    <div>
      <nav className="headerNav">
        {" "}
        <p>
          <NavLink exact to="/">
            <img className="logoHeader" src={logo} alt="logo" />
          </NavLink>
        </p>
      </nav>
    </div>
  );
};

export default Header;