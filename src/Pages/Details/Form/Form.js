import React, { useState } from "react";
import {
  Grid,
  FormControl,
  TextField,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { Container, ActionsContainer, Button, Paper } from "../styles";
import { put, post } from "../../../Services/Api";
import { useAuthContext } from "../../../Contexts/Auth";
import { useHistory } from "react-router-dom";

const INITIAL_ENTITY = {
  titulo: "",
  autor: "",
  editora: "",
  ano: 0,
  isbn: "",
  idioma: "",
  peso: "",
  largura: "",
  altura: "",
  comprimento: "",
};

const Form = ({ entity, goBack }) => {
  const { user } = useAuthContext();
  const [form, setForm] = useState(entity ?? INITIAL_ENTITY);
  const [snack, setSnack] = useState({ show: false, message: "" });

  const history = useHistory();

  const handleChange = (key, value) => setForm((x) => ({ ...x, [key]: value }));

  const handleSnackbar = (message) => {
    setSnack({ show: true, message: message });

    setTimeout(() => {
      setSnack({ show: false, message: "" });
    }, 4000);
  };

  const onSave = async () => {
    try {
      if (form._id) {
        const result = await put(user, form, form._id);
        if (result?.data) {
          handleSnackbar("Livro atualizado com sucesso");
          goBack(form);
        }
      } else {
        const result = await post("books", user, {
          ...form,
          ano: Number(form.ano),
          peso: Number(form.peso),
          largura: Number(form.largura),
          altura: Number(form.altura),
          comprimento: Number(form.comprimento),
        });

        if (result?.data) {
          handleSnackbar("Livro salvo com sucesso");
          goBack(true);
        }
      }
    } catch (error) {
      handleSnackbar("Ocorreu um erro ao processar sua solicitação");
      console.error(error);
    }
  };

  return (
    <Container>
      <Paper>
        <Typography variant="h5">Cadastrar novo livro</Typography>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Título"
                value={form.titulo}
                onChange={(e) => handleChange("titulo", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Autor"
                value={form.autor}
                onChange={(e) => handleChange("autor", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Editora"
                value={form.editora}
                onChange={(e) => handleChange("editora", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="ISBN"
                value={form.isbn}
                onChange={(e) => handleChange("isbn", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Ano"
                value={form.ano}
                type="number"
                onChange={(e) => handleChange("ano", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Altura"
                value={form.altura}
                onChange={(e) => handleChange("altura", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Largura"
                value={form.largura}
                onChange={(e) => handleChange("largura", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Comprimento"
                value={form.comprimento}
                onChange={(e) => handleChange("comprimento", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={3}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Peso"
                value={form.peso}
                onChange={(e) => handleChange("peso", e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item sm={6}>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                label="Idioma"
                value={form.idioma}
                onChange={(e) => handleChange("idioma", e.target.value)}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      <ActionsContainer>
        <Button
          variant="contained"
          color="default"
          onClick={() => goBack(false)}
        >
          Cancelar
        </Button>
        <Button variant="contained" color="primary" onClick={onSave}>
          Salvar
        </Button>
      </ActionsContainer>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snack.show}
        autoHideDuration={4000}
        message={snack.message}
      />
    </Container>
  );
};

export default Form;
