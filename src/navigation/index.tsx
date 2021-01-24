import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, Nav } from "reactstrap";
import { NavbarItem } from "./item";
import { Peak, PeakPreview } from "./peak";
import {
  NavigationProps,
  NavMainBarProps,
  NavMainBarRightProps,
  ThemeTogglerProps,
} from "./types";

export const ThemeToggler = ({ toggleTheme }: ThemeTogglerProps) => (
  <NavbarItem onClick={toggleTheme}>Theme</NavbarItem>
);

const NavigationBrand = () => (
  <NavLink className="navbar-brand" to="/" exact>
    Stopwatch/Timer App
  </NavLink>
);

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
    <ThemeToggler toggleTheme={toggleTheme} />
  </Nav>
);

const NavMainBar = ({
  collapsed,
  toggleCollapse,
  togglePeak,
  toggleTheme,
}: NavMainBarProps) => (
  <Navbar color="primary" dark expand="md" sticky="top" className="shadow-sm">
    <NavigationBrand />

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
