import React from "react";
import { TimeDate, useStatePrev } from "../common";
import { Jumbotron, Button, Col } from "reactstrap";
import { StopwatchElement } from "./stopwatchElement";
import { TimerElementDatum } from "./types";
import dayjs from "../common/dayjs";

export const Stopwatch = () => {
  const [totalDuration, setTotalDuration] = React.useState(dayjs.duration(0));
  const [currDuration, setCurrDuration] = React.useState(dayjs.duration(0));
  const [startTime, setStartTime] = React.useState(dayjs());
  const [currStartTime, setCurrStartTime] = React.useState(dayjs());
  const [intervalID, prevIntervalID, setIntervalID] = useStatePrev<
    undefined | number
  >(undefined);

  const [timerData, setTimerData] = React.useState<
    readonly TimerElementDatum[]
  >([]);

  const onStart = () => {
    setStartTime(dayjs());
  };

  const onLap = () => {
    setTimerData([...timerData, { time: currDuration, total: totalDuration }]);
    setCurrStartTime(dayjs());
  };

  React.useEffect(() => {
    setIntervalID(
      window.setInterval(() => {
        setTotalDuration(dayjs.duration(dayjs().diff(startTime)));
        setCurrDuration(dayjs.duration(dayjs().diff(currStartTime)));
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
