import { ColumnProps } from "reactstrap/lib/Col";

type DisplaySize = 1 | 2 | 3 | 4 | 5 | 6;

export type TimeDateRowProps = {
  displaySize: DisplaySize;
  muted?: true;
  fixedWidth?: true;
  children: string;
};

export type TimeDateProps = {
  time?: moment.Moment | moment.Duration;
  timeFormat?: string;
  dateFormat?: string;
  timeSize?: DisplaySize;
  dateSize?: DisplaySize;
  colxs?: ColumnProps;
};
