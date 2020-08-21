import React from "react";
import {
  TimeDate,
  ThemeContext,
  useStatePrev,
  useUniqueInterval,
} from "../../common";
import dayjs from "../../common/dayjs";
import { Progress } from "reactstrap";
import { CountdownProps } from "./types";

import "./styles.css";

export const Countdown = ({
  inputTime,
  isStarted,
  onCountdownStopped,
}: CountdownProps) => {
  const [t1, t0, setT1, t0Ref] = useStatePrev(dayjs());
  const [countdownTime, setCountdownTime] = React.useState(dayjs.duration(0));
  const setInterval = useUniqueInterval();
  const theme = React.useContext(ThemeContext);

  React.useEffect(() => {
    if (isStarted) {
      // TODO: Extract this and same code from stopwatch to common
      t0Ref.current = dayjs();
      setT1(t0);
      setInterval(() => {
        setT1(dayjs());
      }, 20);
    } else {
      setInterval();
    }
  }, [isStarted]);

  React.useEffect(() => {
    setCountdownTime(inputTime);
  }, [inputTime]);

  React.useEffect(() => {
    const dt = dayjs.duration(t1?.diff(t0 ?? t1));
    setCountdownTime(countdownTime.subtract(dt));
  }, [t0, t1]);

  React.useEffect(() => {
    if (isStarted && countdownTime.asMilliseconds() <= 0) {
      setCountdownTime(dayjs.duration(0));
      setInterval();
      onCountdownStopped(true);
    }
  }, [countdownTime, isStarted]);

  return (
    <>
      <TimeDate time={countdownTime} />
      <Progress
        value={countdownTime.asMilliseconds()}
        max={inputTime.asMilliseconds()}
        className={`countdown-progress w-100 ${theme.bgSecondary}`}
        color={theme.progress}
        animated
      />
    </>
  );
};
