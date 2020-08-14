import React from "react";
import { Jumbotron, Button, Row, Container, Col } from "reactstrap";
import { ClampNumber, StringToNum } from "../common";
import dayjs, { Duration } from "../common/dayjs";
import { TimerInput } from "./input";
import { InputTimeChangeTypes } from "./types";
import { Countdown } from "./countdown";

export const Timer = () => {
  const [inputTime, setInputTime] = React.useState(dayjs.duration(0));
  const [isStarted, setIsStarted] = React.useState(false);

  const onInputChange = (value: Duration) => {
    setInputTime(value);
  };

  const onStartStopClick: React.MouseEventHandler = (event) => {
    setIsStarted(!isStarted);
  };

  const onCountdownStopped = () => {
    setIsStarted(false);
  };

  return (
    <Jumbotron className="m-4">
      <Container>
        <TimerInput onChange={onInputChange} disabled={isStarted} />
        <Row>
          {!isStarted ? (
            <Col xs="12">
              <Button
                color="primary"
                className="my-2"
                block
                onClick={onStartStopClick}
              >
                Start
              </Button>
            </Col>
          ) : (
            <>
              <Col xs="12" md="6">
                <Button
                  color="danger"
                  className="my-2"
                  block
                  onClick={onStartStopClick}
                >
                  Stop
                </Button>
              </Col>
              <Col xs="12" md="6">
                <Button color="warning" className="my-2" block>
                  Reset
                </Button>
              </Col>
            </>
          )}
        </Row>
      </Container>
      <Countdown
        inputTime={inputTime}
        isStarted={isStarted}
        onCountdownStopped={onCountdownStopped}
      />
    </Jumbotron>
  );
};
