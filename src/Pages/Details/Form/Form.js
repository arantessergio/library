import React from "react";
import { Grid, FormControl, TextField } from "@material-ui/core";
import { Container, ActionsContainer, Button, Paper } from "../styles";

const Form = ({ entity, toggleEditMode, onSave, handleChange }) => {
  return (
    <Container>
      <Paper>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Título"
                value={entity.titulo}
                onChange={(e) => handleChange("titulo", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Autor"
                value={entity.autor}
                onChange={(e) => handleChange("autor", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Editora"
                value={entity.editora}
                onChange={(e) => handleChange("editora", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="ISBN"
                value={entity.isbn}
                onChange={(e) => handleChange("isbn", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Ano"
                value={entity.ano}
                onChange={(e) => handleChange("ano", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Altura"
                value={entity.altura}
                onChange={(e) => handleChange("altura", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Largura"
                value={entity.largura}
                onChange={(e) => handleChange("largura", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Comprimento"
                value={entity.comprimento}
                onChange={(e) => handleChange("comprimento", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Peso"
                value={entity.peso}
                onChange={(e) => handleChange("peso", e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      <ActionsContainer>
        <Button variant="contained" color="default" onClick={toggleEditMode}>
          Cancelar
        </Button>
        <Button variant="contained" color="primary" onClick={onSave}>
          Salvar
        </Button>
      </ActionsContainer>
    </Container>
  );
};

export default Form;
