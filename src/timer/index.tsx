import React from "react";
import { Jumbotron, Button, Row, Container } from "reactstrap";
import { ClampNumber, StringToNum } from "../common";
import dayjs from "../common/dayjs";
import { TimerInput } from "./input";
import { InputTimeChangeTypes } from "./types";
import { Countdown } from "./countdown";

export const Timer = () => {
  const [inputTime, setInputTime] = React.useState(dayjs.duration(0));
  const [isStarted, setIsStarted] = React.useState(false);

  const onInputTimeChange = (
    changeType: InputTimeChangeTypes
  ): React.ChangeEventHandler<HTMLInputElement> => (event) => {
    let value = StringToNum(event.target.value);
    let [hours, minutes, seconds] = [
      inputTime.hours(),
      inputTime.minutes(),
      inputTime.seconds(),
    ];

    switch (changeType) {
      case "h":
        hours = ClampNumber(value, 0, 99);
        break;
      case "m":
        minutes = ClampNumber(value, 0, 59);
        break;
      case "s":
        seconds = ClampNumber(value, 0, 59);
        break;
    }

    setInputTime(dayjs.duration({ hours, minutes, seconds }));
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
        <TimerInput
          inputTime={inputTime}
          onInputTimeChange={onInputTimeChange}
          disabled={isStarted}
        />
        <Row>
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
