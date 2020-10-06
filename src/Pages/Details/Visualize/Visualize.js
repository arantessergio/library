import React from "react";
import { Typography, Grid } from "@material-ui/core";
import {
  Container,
  ActionsContainer,
  Button,
  BackIcon,
  EditIcon,
  TrashIcon,
  Paper,
} from "../styles";
import { useHistory } from "react-router-dom";

const Visualize = ({ entity, toggleEditMode, onRemove }) => {
  const history = useHistory();

  return (
    <Container>
      <Paper>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Typography variant="h6">{entity.titulo}</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography>{`Autor: ${entity.autor}`}</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography>{`ISBN: ${entity.isbn}`}</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography>{`Ano: ${entity.ano}`}</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography>{`Editora: ${entity.editora}`}</Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography>{`Idioma: ${entity.idioma}`}</Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography>Dimensões:</Typography>
          </Grid>
          <Grid item container>
            <Grid item sm={2}>
              <Typography variant="caption">{`Largura: ${entity.largura}`}</Typography>
            </Grid>
            <Grid item sm={2}>
              <Typography variant="caption">{`Altura: ${entity.altura}`}</Typography>
            </Grid>
            <Grid item sm={2}>
              <Typography variant="caption">{`Comprimento: ${entity.comprimento}`}</Typography>
            </Grid>
            <Grid item sm={2}>
              <Typography variant="caption">{`Peso: ${entity.peso}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <ActionsContainer>
        <Button
          variant="contained"
          color="default"
          startIcon={<BackIcon />}
          onClick={() => history.goBack()}
        >
          Voltar
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
          onClick={toggleEditMode}
        >
          Editar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<TrashIcon />}
          onClick={onRemove}
        >
          Remover
        </Button>
      </ActionsContainer>
    </Container>
  );
};

export default Visualize;
