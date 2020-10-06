import React from "react";
import { Container, SadIcon } from "./styles";
import { Typography } from "@material-ui/core";

const EmptyState = () => (
  <Container>
    <SadIcon />
    <Typography variant="h5">
      Sua busca não retornou nenhum livro, tente novamente.
    </Typography>
  </Container>
);

export default EmptyState;
