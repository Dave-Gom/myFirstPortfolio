import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [clicked, setClicked] = useState(false);

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

  return (
    <nav>
      <NavLink to="/">
        <div className="logo">
          <h4>Dave</h4>
        </div>
      </NavLink>
      <ul className={`nav-links ${showMenu ? "nav-active" : ""}`}>
        <li>
          <NavLink to="/resume" onClick={handleLinkClick}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/proyects" onClick={handleLinkClick}>
            Proyectos
          </NavLink>
        </li>
        <li>
          <NavLink to="/now" onClick={handleLinkClick}>
            Ahora
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleLinkClick}>
            Contacto
          </NavLink>
        </li>
      </ul>
      <button className="burger" onClick={handleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </button>
    </nav>
  );
};

export default NavBar;
