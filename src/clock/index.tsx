import React from "react";
import { TimeDate, ContentContainer } from "common";
import dayjs from "common/dayjs";

export const Clock = () => {
  const [date, setDate] = React.useState(dayjs());

  React.useEffect(() => {
    setInterval(() => {
      setDate(dayjs());
    }, 1000);
  }, []);

  return (
    <ContentContainer>
      <TimeDate
        time={date}
        timeFormat="hh:mm:ss a"
        dateFormat="dddd D MMM YYYY"
      />
    </ContentContainer>
  );
};
