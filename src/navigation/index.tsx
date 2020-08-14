import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarText,
  Container,
  Col,
  Row,
  Button,
} from "reactstrap";

type NavbarItemProps = {
  to: string;
  children: any;
};
const NavbarItem = ({ to, children }: NavbarItemProps) => (
  <NavItem>
    <NavLink to={to} className="nav-link" activeClassName="active">
      {children}
    </NavLink>
  </NavItem>
);

export const Navigation = () => {
  const [navIsCollapsed, setNavCollapsed] = React.useState(true);
  const [peakIsCollapsed, setPeakCollapsed] = React.useState(true);
  const toggleNavbar = () => setNavCollapsed(!navIsCollapsed);
  const togglePeak = () => setPeakCollapsed(!peakIsCollapsed);

  return (
    <>
      {/* Peak */}
      <Collapse isOpen={!peakIsCollapsed}>
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

      {/* Navbar */}
      <Navbar color="primary" dark expand="md" sticky="top">
        <NavbarBrand href="#">Stopwatch/Timer App</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2"></NavbarToggler>
        <Collapse isOpen={!navIsCollapsed} navbar>
          {/* Left content */}
          <Nav className="mr-auto" navbar>
            <NavbarItem to="/stopwatch">Stopwatch</NavbarItem>
            <NavbarItem to="/timer">Timer</NavbarItem>
            <NavbarItem to="/clock">Clock</NavbarItem>
          </Nav>
          {/* Right content */}
          <Nav>
            <NavbarText>0:00:00</NavbarText>
            <Button onClick={togglePeak} outline color="link">
              <span className="dropdown-toggle"></span>
            </Button>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};
