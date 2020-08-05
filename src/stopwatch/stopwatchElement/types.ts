import { Duration } from "../../common/dayjs";

export type StopwatchElementProps = {
  lap?: number;
  duration: Duration;
  totalDuration: Duration;
};
