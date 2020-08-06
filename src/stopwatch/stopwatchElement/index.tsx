import React from "react";
import { StopwatchElementProps, StopwatchLabelProps } from "./types";
import { Container, Row, Col } from "reactstrap";
import { TimeDate } from "../../common";

const StopwatchLabel = ({ hSize = 5, children }: StopwatchLabelProps) => (
  <Container
    className={`d-flex justify-content-center align-items-center h-100 text-muted h${hSize}`}
  >
    {children}
  </Container>
);

export const StopwatchElement = ({
  lap,
  duration,
  totalDuration,
}: StopwatchElementProps) => {
  let timeDate_md = 12;
  if (totalDuration) timeDate_md /= 2;
  if (lap) timeDate_md -= 1;

  return (
    <Container fluid className={(lap ?? 0) % 2 === 1 ? "bg-light" : ""}>
      <Row>
        {lap ? (
          <Col xs="12" md="2">
            <StopwatchLabel hSize={4}>{lap}</StopwatchLabel>
          </Col>
        ) : (
          ""
        )}
        <Col xs="12" md={timeDate_md}>
          <Row>
            <StopwatchLabel>Time:</StopwatchLabel>
          </Row>
          <Row>
            <TimeDate colxs="12" time={duration} timeSize={4}></TimeDate>
          </Row>
        </Col>
        {totalDuration ? (
          <Col xs="12" md={timeDate_md}>
            <Row>
              <StopwatchLabel>Total: </StopwatchLabel>
            </Row>
            <Row>
              <TimeDate colxs="12" time={totalDuration} timeSize={4}></TimeDate>
            </Row>
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
};
