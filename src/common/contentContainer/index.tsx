import React from "react";
import { Jumbotron, Container } from "reactstrap";
import { ContentContainerProps } from "./types";
import { ThemeContext } from "common";

import "./styles.css";

export const ContentContainer = ({ children }: ContentContainerProps) => {
  const theme = React.useContext(ThemeContext);

  return (
    <Jumbotron
      className={`m-4 position-absolute content-container ${theme.bgPrimary} shadow`}
    >
      <Container fluid>{children}</Container>
    </Jumbotron>
  );
};
