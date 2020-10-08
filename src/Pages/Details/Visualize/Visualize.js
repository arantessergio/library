import React, { useState } from "react";
import { Typography, Grid, Popover } from "@material-ui/core";
import {
  Container,
  ActionsContainer,
  Button,
  BackIcon,
  EditIcon,
  TrashIcon,
  Paper,
  ModalContainer,
  RemoveActions,
} from "../styles";
import { useHistory } from "react-router-dom";
import { remove } from "../../../Services/Api";
import { useAuthContext } from "../../../Contexts/Auth";

const Visualize = ({ entity, toggleEditMode }) => {
  const history = useHistory();

  const { user } = useAuthContext();

  const [removeModalOpen, setRemoveModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleRemoveModalOpen = (event) => {
    event && setAnchorEl(event.currentTarget);
    setRemoveModalOpen(!removeModalOpen);
  };

  const onRemove = async () => {
    try {
      await remove(user, entity._id);

      history.goBack();
    } catch (error) {
      console.error(error);
    }
  };

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
          onClick={toggleRemoveModalOpen}
          aria-describedby={entity.id}
        >
          Remover
        </Button>
      </ActionsContainer>
      <Popover
        id={entity.id}
        open={removeModalOpen}
        onClose={toggleRemoveModalOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <ModalContainer>
          <Typography variant="body1">Remover registro?</Typography>
          <RemoveActions>
            <Button
              variant="contained"
              color="default"
              size="large"
              onClick={toggleRemoveModalOpen}
            >
              Não
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={onRemove}
            >
              Sim
            </Button>
          </RemoveActions>
        </ModalContainer>
      </Popover>
    </Container>
  );
};

export default Visualize;
