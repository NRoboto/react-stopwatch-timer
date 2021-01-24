import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
  Button,
} from "reactstrap";
import { NavbarItem } from "./item";
import { Peak, PeakPreview } from "./peak";
import {
  NavigationProps,
  NavMainBarProps,
  NavMainBarRightProps,
} from "./types";

const NavMainBarLeft = () => (
  <Nav className="mr-auto" navbar>
    <NavbarItem to="/stopwatch">Stopwatch</NavbarItem>
    <NavbarItem to="/timer">Timer</NavbarItem>
    <NavbarItem to="/clock">Clock</NavbarItem>
  </Nav>
);

const NavMainBarRight = ({ togglePeak, toggleTheme }: NavMainBarRightProps) => (
  <Nav navbar>
    <PeakPreview togglePeak={togglePeak} />
    <NavbarItem onClick={toggleTheme}>Theme</NavbarItem>
  </Nav>
);

const NavMainBar = ({
  collapsed,
  toggleCollapse,
  togglePeak,
  toggleTheme,
}: NavMainBarProps) => (
  <Navbar color="primary" dark expand="md" sticky="top" className="shadow-sm">
    <NavLink className="navbar-brand" to="/" exact>
      Stopwatch/Timer App
    </NavLink>
    <NavbarToggler onClick={toggleCollapse} className="mr-2"></NavbarToggler>
    <Collapse isOpen={!collapsed} navbar>
      <NavMainBarLeft />
      <NavMainBarRight togglePeak={togglePeak} toggleTheme={toggleTheme} />
    </Collapse>
  </Navbar>
);

export const Navigation = ({ toggleTheme }: NavigationProps) => {
  const [navIsCollapsed, setNavCollapsed] = React.useState(true);
  const [peakIsCollapsed, setPeakCollapsed] = React.useState(true);
  const toggleNavbar = () => setNavCollapsed(!navIsCollapsed);
  const togglePeak = () => setPeakCollapsed(!peakIsCollapsed);

  return (
    <>
      <Peak collapsed={peakIsCollapsed} />
      <NavMainBar
        collapsed={navIsCollapsed}
        toggleCollapse={toggleNavbar}
        togglePeak={togglePeak}
        toggleTheme={toggleTheme}
      />
    </>
  );
};
