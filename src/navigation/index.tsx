import React from "react";
import {
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
} from "reactstrap";

export let Navigation = () => {
  const [isCollapsed, setCollapsed] = React.useState(true);
  const toggleNavbar = () => setCollapsed(!isCollapsed);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="#">Stopwatch</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2"></NavbarToggler>
      <Collapse isOpen={!isCollapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="#">Stopwatch</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Timer</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Clock</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
