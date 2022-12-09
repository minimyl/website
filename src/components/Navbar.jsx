import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2>A.</h2>
      <div className="link">
        <NavLink className="linkBar" to={"/"}>
          <h3>Home</h3>
        </NavLink>
        <NavLink className="linkBar" to={"/portfolio"}>
          <h3>Portfolio</h3>
        </NavLink>
        <NavLink className="linkBar" to={"/about"}>
          <h3>About Me</h3>
        </NavLink>
        <NavLink className="linkBar" to={"/contact"}>
          <h3>Contact</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
