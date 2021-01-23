import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
  Container,
  Col,
  Row,
  Button,
} from "reactstrap";
import {
  NavigationProps,
  NavbarItemProps,
  NavPeakProps,
  NavMainBarProps,
  NavMainBarRightProps,
} from "./types";

const NavbarItem = ({ to, children }: NavbarItemProps) => (
  <NavItem>
    <NavLink to={to} className="nav-link" activeClassName="active">
      {children}
    </NavLink>
  </NavItem>
);

const NavPeak = ({ collapsed }: NavPeakProps) => (
  <Collapse isOpen={!collapsed}>
    <Container className="bg-primary text-light" fluid>
      <Row>
        <Col xs="12" md="2">
          Stopwatch 1
        </Col>
        <Col>0:00:00</Col>
      </Row>
      <Row>
        <Col xs="12" md="2">
          Stopwatch 2
        </Col>
        <Col>0:00:00</Col>
      </Row>
      <Row>
        <Col xs="12" md="2">
          Stopwatch 3
        </Col>
        <Col>0:00:00</Col>
      </Row>
    </Container>
  </Collapse>
);

const NavMainBarLeft = () => (
  <Nav className="mr-auto" navbar>
    <NavbarItem to="/stopwatch">Stopwatch</NavbarItem>
    <NavbarItem to="/timer">Timer</NavbarItem>
    <NavbarItem to="/clock">Clock</NavbarItem>
  </Nav>
);

const NavMainBarRight = ({ togglePeak, toggleTheme }: NavMainBarRightProps) => (
  <Nav>
    <Button onClick={togglePeak} outline color="link">
      <NavbarText>0:00:00</NavbarText> <span className="dropdown-toggle"></span>
    </Button>
    <Button onClick={toggleTheme} outline color="link">
      <NavbarText>Theme</NavbarText>
    </Button>
  </Nav>
);

const NavMainBar = ({
  collapsed,
  toggleCollapse,
  togglePeak,
  toggleTheme,
}: NavMainBarProps) => (
  <Navbar color="primary" dark expand="md" sticky="top" className="shadow-sm">
    <NavLink className="navbar-brand" to="/" exact>Stopwatch/Timer App</NavLink>
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
      <NavPeak collapsed={peakIsCollapsed} />
      <NavMainBar
        collapsed={navIsCollapsed}
        toggleCollapse={toggleNavbar}
        togglePeak={togglePeak}
        toggleTheme={toggleTheme}
      />
    </>
  );
};
