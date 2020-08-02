import React from "react";
import { StopwatchElementProps } from "./types";
import { Container, Row, Col } from "reactstrap";
import { TimeDate } from "../../common";

export const StopwatchElement = ({
  lap,
  duration,
  totalDuration,
}: StopwatchElementProps) => (
  <Container>
    <Row>
      {lap ? <Col xs="2">{lap}</Col> : ""}
      <Col xs="12" md="6">
        Time: <TimeDate colxs="12" time={duration} timeSize={4}></TimeDate>
      </Col>
      <Col xs="12" md="6">
        Total:{" "}
        <TimeDate colxs="12" time={totalDuration} timeSize={4}></TimeDate>
      </Col>
    </Row>
  </Container>
);
