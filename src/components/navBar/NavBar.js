import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../../hooks/windowDimensions";
import MenuFunContext from "./MenuFunContext";

import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setShowMenu(false);
    setClicked(false);
  }, [clicked]);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setClicked(true);
  };

  const handleActive = ({ isActive }) => {
    return isActive ? "isActive item-nav" : "item-nav";
  };

  return (
    <nav className="principal-nav">
      <NavLink className="logo" to="/" onClick={handleLinkClick}>
        <h4>Dave</h4>
      </NavLink>

      <div className={`nav-links ${showMenu ? "nav-active" : "nav-hidden"}`}>
        {width < 768 ? <MenuFunContext /> : ""}
        <NavLink
          className={handleActive}
          to="/resume"
          onClick={handleLinkClick}
        >
          <span>CV</span>
        </NavLink>

        <NavLink
          className={handleActive}
          to="/proyects"
          onClick={handleLinkClick}
        >
          <span>Proyectos</span>
        </NavLink>

        <NavLink className={handleActive} to="/now" onClick={handleLinkClick}>
          <span>Ahora</span>
        </NavLink>

        <NavLink
          className={handleActive}
          to="/contact"
          onClick={handleLinkClick}
        >
          <span>Contacto</span>
        </NavLink>
      </div>
      {width > 768 ? <MenuFunContext /> : ""}
      <button className="burger" onClick={handleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </button>
    </nav>
  );
};

export default NavBar;
