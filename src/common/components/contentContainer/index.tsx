import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { ContentContainerProps } from "./types";

import "./styles.css";

export const ContentContainer = ({ children }: ContentContainerProps) => (
  <Jumbotron className="m-4 position-absolute content-container">
    <Container fluid>{children}</Container>
  </Jumbotron>
);
