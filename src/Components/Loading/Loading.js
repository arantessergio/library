import React from "react";
import { Container } from "./styles";
import { CircularProgress } from "@material-ui/core";

const Loading = () => (
  <Container>
    <CircularProgress />
  </Container>
);

export default Loading;
