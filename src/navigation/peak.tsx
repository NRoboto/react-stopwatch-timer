import { Collapse, Container, Col, Row } from "reactstrap";
import { NavbarItem } from "./item";
import { NavPeakProps, PeakPreviewParams } from "./types";

export const Peak = ({ collapsed }: NavPeakProps) => (
  <Collapse isOpen={!collapsed} aria-hidden={collapsed}>
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

export const PeakPreview = ({ togglePeak }: PeakPreviewParams) => (
  <NavbarItem onClick={togglePeak}>
    0:00:00 <span className="dropdown-toggle"></span>
  </NavbarItem>
);
