import React from "react";
import { TimeDate } from "../common";
import { TimeDisplayProps } from "./types";
import { Container, Jumbotron } from "reactstrap";
import Moment from "moment";

export const Clock = () => {
  const [date, setDate] = React.useState(Moment());

  setInterval(() => {
    setDate(Moment());
  }, 100);

  return (
    <Jumbotron fluid className="m-4">
      <Container fluid>
        <TimeDate
          date={date}
          timeFormat="hh:mm:ss a"
          dateFormat="dddd Do MMM YYYY"
        />
      </Container>
    </Jumbotron>
  );
};
