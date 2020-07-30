type DisplaySize = 1 | 2 | 3 | 4 | 5 | 6;

export type TimeDateRowProps = {
  displaySize: DisplaySize;
  muted?: true;
  fixedWidth?: true;
  children: string;
};

export type TimeDateProps = {
  date?: moment.Moment;
  timeFormat?: string;
  dateFormat?: string;
  twelveHour?: boolean;
  timeSize?: DisplaySize;
  dateSize?: DisplaySize;
};
