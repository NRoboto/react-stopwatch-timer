import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import React from "react";
import { TimeInputParams, TimerInputProps } from "./types";

const TimeInput = ({
  value,
  onValueChange,
  max,
  min,
  disabled = false,
  children,
}: TimeInputParams) => (
  <Col xs="12" md="4">
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>{children}</InputGroupText>
      </InputGroupAddon>
      <Input
        type="number"
        min={min}
        max={max}
        disabled={disabled}
        value={value}
        onChange={onValueChange}
      ></Input>
    </InputGroup>
  </Col>
);

export const TimerInput = ({
  inputTime,
  onInputTimeChange,
  disabled,
}: TimerInputProps) => (
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
