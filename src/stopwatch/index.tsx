import React from "react";
import { TimeDate, useStatePrev } from "../common";
import { Jumbotron, Button, Col } from "reactstrap";
import moment from "moment";
import { StopwatchElement } from "./stopwatchElement";
import { TimerElementDatum } from "./types";

export const Stopwatch = () => {
  const [totalDuration, setTotalDuration] = React.useState(moment.duration(0));
  const [currDuration, setCurrDuration] = React.useState(moment.duration(0));
  const [startTime, setStartTime] = React.useState(moment());
  const [currStartTime, setCurrStartTime] = React.useState(moment());
  const [intervalID, prevIntervalID, setIntervalID] = useStatePrev<
    undefined | number
  >(undefined);

  const [timerData, setTimerData] = React.useState<
    readonly TimerElementDatum[]
  >([]);

  const onStart = () => {
    setStartTime(moment());
  };

  const onLap = () => {
    setTimerData([...timerData, { time: currDuration, total: totalDuration }]);
    setCurrStartTime(moment());
  };

  React.useEffect(() => {
    setIntervalID(
      window.setInterval(() => {
        setTotalDuration(moment.duration(moment().diff(startTime)));
        setCurrDuration(moment.duration(moment().diff(currStartTime)));
      }, 20)
    );
  }, [startTime, currStartTime]);

  React.useEffect(() => {
    window.clearInterval(prevIntervalID);
  }, [intervalID]);

  return (
    <Jumbotron>
      <StopwatchElement
        duration={currDuration}
        totalDuration={totalDuration}
      ></StopwatchElement>
      <Col>
        <Button color="primary" onClick={onStart} className="mx-1 mb-2">
          Start
        </Button>
        <Button color="warning" onClick={onStart} className="mx-1 mb-2">
          Pause
        </Button>
        <Button color="danger" onClick={onStart} className="mx-1 mb-2">
          Reset
        </Button>
        <Button color="info" onClick={onLap} className="mx-1 mb-2">
          Lap
        </Button>
      </Col>
      {timerData.map((datum) => (
        <StopwatchElement duration={datum.time} totalDuration={datum.total} />
      ))}
    </Jumbotron>
  );
};
