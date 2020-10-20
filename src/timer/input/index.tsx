import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import React from "react";
import {
  TimeInputParams,
  TimerInputProps,
  InputTimeChangeTypes,
} from "./types";
import { StringToNum, ClampNumber, ThemeContext } from "common";
import dayjs from "common/dayjs";

const TimeInput = ({
  value,
  onValueChange,
  max,
  min,
  disabled = false,
  children,
}: TimeInputParams) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Col xs="12" md="4">
      <InputGroup>
        <InputGroupAddon addonType="prepend" className={theme.bgSecondary}>
          <InputGroupText>{children}</InputGroupText>
        </InputGroupAddon>
        <Input
          type="number"
          min={min}
          max={max}
          disabled={disabled}
          value={value}
          onChange={onValueChange}
          className={`${theme.bgPrimary} ${theme.textPrimary}`}
        ></Input>
      </InputGroup>
    </Col>
  );
};

export const TimerInput = ({ onChange, disabled }: TimerInputProps) => {
  const [inputTime, setInputTime] = React.useState(dayjs.duration(0));

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
        hours = value;
        break;
      case "m":
        minutes = value;
        break;
      case "s":
        seconds = value;
        break;
    }

    while (seconds >= 60) {
      seconds -= 60;
      minutes += 1;
    }
    while (minutes >= 60) {
      minutes -= 60;
      hours += 1;
    }

    hours = ClampNumber(hours, 0, 99);
    minutes = ClampNumber(minutes, 0);
    seconds = ClampNumber(seconds, 0);

    setInputTime(dayjs.duration({ hours, minutes, seconds }));
  };

  React.useEffect(() => {
    onChange(inputTime);
  }, [inputTime]);

  return (
    <Row>
      <TimeInput
        value={inputTime.hours()}
        onValueChange={onInputTimeChange("h")}
        disabled={disabled}
      >
        Hours
      </TimeInput>
      <TimeInput
        value={inputTime.minutes()}
        onValueChange={onInputTimeChange("m")}
        disabled={disabled}
      >
        Mins
      </TimeInput>
      <TimeInput
        value={inputTime.seconds()}
        onValueChange={onInputTimeChange("s")}
        disabled={disabled}
      >
        Secs
      </TimeInput>
    </Row>
  );
};
