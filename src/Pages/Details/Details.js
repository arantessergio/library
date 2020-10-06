import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { get } from "../../Services/Api";
import { Header } from "../../Components/Header";
import { Typography, Grid, Button } from "@material-ui/core";
import { Paper, Container, BackIcon } from "./styles";

const INITIAL_ENTITY = {
  id: "",
  titulo: "",
  autor: "",
  editora: "",
  ano: 0,
  isbn: "",
};

const Details = () => {
  const {
    params: { id },
  } = useRouteMatch();
  const history = useHistory();

  const [entity, setEntity] = useState(INITIAL_ENTITY);

  useEffect(() => {
    const getBook = async () => {
      try {
        const result = await get(id);
        setEntity(result?.data);
      } catch (error) {
        console.error(error);
      }
    };

    getBook();
  }, [id]);

  return (
    <>
      <Header />
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
        <Button
          variant="contained"
          color="default"
          startIcon={<BackIcon />}
          onClick={() => history.goBack()}
        >
          Voltar
        </Button>
      </Container>
    </>
  );
};

export default Details;
