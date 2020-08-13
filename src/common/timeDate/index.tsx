import React from "react";
import { TimeDateProps, TimeDateRowProps } from "./types";
import { Container, Col, Row } from "reactstrap";
import dayjs, { Duration } from "../dayjs";
import { NumToFixedLengthString } from "../";

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

const durationDisplayUnits = ["h", "m", "s"] as const;
const GetDurationString = (duration: Duration) => {
  let durationString: string = "";
  durationString += duration.days() >= 1 ? `${duration.days()} days ` : "";

  durationString += durationDisplayUnits
    .filter((unit) => duration.as(unit) >= 1)
    .map((unit, i) => {
      const val = Math.floor(duration.get(unit));
      const valStr = i === 0 ? val : NumToFixedLengthString(val, 2, true);
      return valStr + ":";
    })
    .join("");

  durationString += NumToFixedLengthString(duration.milliseconds(), 3);
  return durationString;
};

export const TimeDate = ({
  time = dayjs(),
  timeFormat = "hh:mm:ss",
  dateFormat,
  timeSize = 1,
  dateSize = 4,
  colxs = "12",
}: TimeDateProps) => {
  const timeOutput = dayjs.isDayjs(time)
    ? time.format(timeFormat)
    : GetDurationString(time);

  return (
    <Col xs={colxs}>
      <TimeDateRow displaySize={timeSize} fixedWidth>
        {timeOutput}
      </TimeDateRow>

      {dayjs.isDayjs(time) && dateFormat ? (
        <TimeDateRow displaySize={dateSize} muted>
          {time.format(dateFormat)}
        </TimeDateRow>
      ) : (
        ""
      )}
    </Col>
  );
};
