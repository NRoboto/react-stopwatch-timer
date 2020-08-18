import React from "react";
import { Jumbotron, Button, Row, Container, Col } from "reactstrap";
import dayjs, { Duration } from "../common/dayjs";
import { TimerInput } from "./input";
import { Countdown } from "./countdown";
import { ContentContainer } from "../common";

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

  const onResetClicked = () => {
    setInputTime(inputTime.clone());
  };

  return (
    <ContentContainer>
      <Container>
        <TimerInput onChange={onInputChange} disabled={isStarted} />
        <Row>
          <Col xs="12" md="6">
            {!isStarted ? (
              <Button
                color="primary"
                className="my-2"
                block
                onClick={onStartStopClick}
              >
                Start
              </Button>
            ) : (
              <Button
                color="danger"
                className="my-2"
                block
                onClick={onStartStopClick}
              >
                Stop
              </Button>
            )}
          </Col>
          <Col xs="12" md="6">
            <Button
              color="warning"
              className="my-2"
              block
              onClick={onResetClicked}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Container>
      <Countdown
        inputTime={inputTime}
        isStarted={isStarted}
        onCountdownStopped={onCountdownStopped}
      />
    </ContentContainer>
  );
};
