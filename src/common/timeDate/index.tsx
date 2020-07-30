import React from "react";
import { TimeDateProps, TimeDateRowProps } from "./types";
import { Container, Col, Row } from "reactstrap";
import Moment from "moment";

const ToFixedWidthElements = (input: string, width: string) => {
  return input
    .split("")
    .map((char) => (
      <span style={{ width, display: "inline-block", textAlign: "center" }}>
        {char}
      </span>
    ));
};

const TimeDateRow = ({
  displaySize,
  muted,
  fixedWidth,
  children,
}: TimeDateRowProps) => (
  <Row className="d-flex justify-content-center align-content-center">
    <p className={`display-${displaySize} ${muted ? "text-muted" : ""}`}>
      {fixedWidth ? ToFixedWidthElements(children, "0.5em") : children}
    </p>
  </Row>
);

export const TimeDate = ({
  date = Moment(),
  timeFormat = "hh:mm:ss",
  dateFormat,
  timeSize = 1,
  dateSize = 4,
}: TimeDateProps) => {
  return (
    <Container>
      <Col>
        <TimeDateRow displaySize={timeSize} fixedWidth>
          {date.format(timeFormat)}
        </TimeDateRow>

        {dateFormat ? (
          <TimeDateRow displaySize={dateSize} muted>
            {date.format(dateFormat)}
          </TimeDateRow>
        ) : (
          ""
        )}
      </Col>
    </Container>
  );
};
