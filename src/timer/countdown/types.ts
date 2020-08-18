import { Duration } from "../../common/dayjs";

export type CountdownProps = {
  inputTime: Duration;
  isStarted: boolean;
  onCountdownStopped: (isFinished: boolean) => void;
};
