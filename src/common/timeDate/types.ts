import { ColumnProps } from "reactstrap/lib/Col";
import dayjs, { Duration } from "common/dayjs";

type DisplaySize = 1 | 2 | 3 | 4 | 5 | 6;

export type TimeDateRowProps = {
  displaySize: DisplaySize;
  className?: string;
  muted?: true;
  fixedWidth?: true;
  children: string;
};

export type TimeDateProps = {
  time?: dayjs.Dayjs | Duration;
  timeFormat?: string;
  dateFormat?: string;
  timeSize?: DisplaySize;
  dateSize?: DisplaySize;
  colxs?: ColumnProps;
};
