import React from "react";
import { TimeDate, useStatePrev } from "../common";
import { Jumbotron, Button } from "reactstrap";
import moment from "moment";
import { StopwatchElement } from "./stopwatchElement";

export const Stopwatch = () => {
  const [duration, setDuration] = React.useState(moment.duration(0));
  const [startTime, setStartTime] = React.useState(moment());
  const [intervalID, prevIntervalID, setIntervalID] = useStatePrev<
    undefined | number
  >(undefined);
  const onStart = () => {
    setStartTime(moment());
  };

  React.useEffect(() => {
    setIntervalID(
      window.setInterval(() => {
        setDuration(moment.duration(moment().diff(startTime)));
      }, 20)
    );
  }, [startTime]);

  React.useEffect(() => {
    window.clearInterval(prevIntervalID);
  }, [intervalID]);

  return (
    <Jumbotron>
      <StopwatchElement
        duration={duration}
        totalDuration={duration}
      ></StopwatchElement>
      <Button color="primary" onClick={onStart} className="mx-1">
        Start
      </Button>
      <Button color="warning" onClick={onStart} className="mx-1">
        Pause
      </Button>
      <Button color="danger" onClick={onStart} className="mx-1">
        Reset
      </Button>
      <Button color="info" onClick={onStart} className="mx-1">
        Lap
      </Button>
    </Jumbotron>
  );
};
