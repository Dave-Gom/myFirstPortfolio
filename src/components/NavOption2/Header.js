import React from "react";

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NabBar2";

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h2>Logo</h2>
          <Bars />
          <NavMenu>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/sevicios">Sevicios</NavLink>
            <NavLink to="/algo">algo</NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signIn">Sign In</NavBtnLink>
          </NavBtn>
        </NavLink>
      </Nav>
    </>
  );
};

export default Header;
