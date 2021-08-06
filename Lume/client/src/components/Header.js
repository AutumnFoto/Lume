/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { logout } from "../components/modules/authManager";
import "./Header.css";

export default function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Nav className=" navbar">
        <NavbarBrand tag={RRNavLink} to="/">
          LUME
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* When isLoggedIn === true, we will render the Home link */}
          </Nav>
          {isLoggedIn && (
            <>
              <NavItem>
                <NavLink tag={RRNavLink} to="/Communication/">
                  Communication
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/Signs">
                  Signs
                </NavLink>
              </NavItem>
              <NavItem>
                <a
                  aria-current="page"
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={logout}
                >
                  Logout
                </a>
              </NavItem>
            </>
          )}

          <Nav navbar>
            {isLoggedIn && (
              <>
                {/* <NavItem>
                  <a
                    aria-current="page"
                    className="nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                  >
                    Logout
                  </a>
                </NavItem> */}
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">
                    Register
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Nav>
    </div>
  );
}
