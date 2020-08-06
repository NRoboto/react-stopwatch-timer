import React from "react";
import { TimeDate } from "../common";
import { TimeDisplayProps } from "./types";
import { Container, Jumbotron } from "reactstrap";
import dayjs from "../common/dayjs";

export const Clock = () => {
  const [date, setDate] = React.useState(dayjs());

  React.useEffect(() => {
    setInterval(() => {
      setDate(dayjs());
    }, 1000);
  }, []);

  return (
    <Jumbotron className="m-4">
      <Container fluid>
        <TimeDate
          time={date}
          timeFormat="hh:mm:ss a"
          dateFormat="dddd D MMM YYYY"
        />
      </Container>
    </Jumbotron>
  );
};
