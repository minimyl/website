import React from "react";
import {NavLink} from "react-router-dom"

const Footer = () => {
  return (
    <div id="footer">
      <NavLink className="footerBar" to="/"><div>Home</div></NavLink>
      <NavLink className="footerBar" to="/portfolio"><div>Portfolio</div></NavLink>
      <NavLink className="footerBar" to="/about"><div>About Me</div></NavLink>
    </div>
  );
};

export default Footer;
