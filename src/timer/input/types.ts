import { Duration } from "common/dayjs";

export type InputTimeChangeTypes = "h" | "m" | "s";

export type TimeInputParams = {
  value: number;
  onValueChange: React.ChangeEventHandler<HTMLInputElement>;
  max?: number;
  min?: number;
  disabled?: boolean;
  children: any;
};

export type TimerInputProps = {
  // inputTime: Duration;
  // onInputTimeChange: (
  //   type: InputTimeChangeTypes
  // ) => React.ChangeEventHandler<HTMLInputElement>;
  onChange: (value: Duration) => void;
  disabled: boolean;
};
