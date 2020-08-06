import { Duration } from "../../common/dayjs";

export type StopwatchElementProps = {
  lap?: number;
  duration: Duration;
  totalDuration?: Duration;
};

export type StopwatchLabelProps = {
  hSize?: 1 | 2 | 3 | 4 | 5 | 6;
  children: any;
};
