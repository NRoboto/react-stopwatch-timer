import React from "react";
import {
  TimeDate,
  ContentContainer,
  useStatePrev,
  useUniqueInterval,
} from "common";
import { Button, Col, Row } from "reactstrap";
import { StopwatchElement } from "./stopwatchElement";
import { TimerElementDatum } from "./types";
import dayjs from "common/dayjs";

export const Stopwatch = () => {
  const [t1, t0, setT1, t0Ref] = useStatePrev(dayjs());
  const [currDuration, setCurrDuration] = React.useState(dayjs.duration(0));
  const [totalDuration, setTotalDuration] = React.useState(dayjs.duration(0));
  const setInterval = useUniqueInterval();
  const [timerData, setTimerData] = React.useState<
    readonly TimerElementDatum[]
  >([]);

  const resetDurations = () => {
    setTotalDuration(dayjs.duration(0));
    setCurrDuration(dayjs.duration(0));
  };

  const onStart = () => {
    t0Ref.current = dayjs();
    setT1(t0);
    setInterval(() => {
      setT1(dayjs());
    }, 20);
  };

  const onLap = () => {
    setTimerData([...timerData, { time: currDuration, total: totalDuration }]);
    setCurrDuration(dayjs.duration(0)); // Sometimes doesn't reset?
  };

  const onReset = () => {
    resetDurations();
    setTimerData([]);
  };

  const onPause = () => {
    setInterval();
  };

  React.useEffect(() => {
    const dt = dayjs.duration(t1?.diff(t0 ?? t1));
    setTotalDuration(totalDuration.add(dt));
    setCurrDuration(currDuration.add(dt));
  }, [t0, t1]);

  return (
    <ContentContainer>
      <StopwatchElement
        duration={currDuration}
        totalDuration={timerData.length > 0 ? totalDuration : undefined}
      />
      <Row>
        <Col xs="6" md="3">
          <Button color="primary" onClick={onStart} className="mx-1 mb-2" block>
            Start
          </Button>
        </Col>
        <Col xs="6" md="3">
          <Button color="warning" onClick={onPause} className="mx-1 mb-2" block>
            Pause
          </Button>
        </Col>
        <Col xs="6" md="3">
          <Button color="danger" onClick={onReset} className="mx-1 mb-2" block>
            Reset
          </Button>
        </Col>
        <Col xs="6" md="3">
          <Button color="info" onClick={onLap} className="mx-1 mb-2" block>
            Lap
          </Button>
        </Col>
      </Row>
      {timerData.map((datum, i) => (
        <StopwatchElement
          duration={datum.time}
          totalDuration={datum.total}
          lap={i + 1}
          key={i}
        />
      ))}
    </ContentContainer>
  );
};
