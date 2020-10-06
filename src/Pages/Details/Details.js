import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { get, put } from "../../Services/Api";
import { Header } from "../../Components/Header";
import { Snackbar } from "@material-ui/core";
import { Container } from "./styles";

import { ViewPage } from "./Visualize";
import { FormPage } from "./Form";

const INITIAL_ENTITY = {
  id: "",
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

const Details = () => {
  const {
    params: { id },
  } = useRouteMatch();
  const history = useHistory();

  const [entity, setEntity] = useState(INITIAL_ENTITY);
  const [editMode, setEditMode] = useState(false);
  const [editEntity, setEditEntity] = useState(INITIAL_ENTITY);
  const [snack, setSnack] = useState({ show: false, message: "" });

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

  useEffect(() => {
    setEditEntity(entity);
  }, [entity]);

  const toggleEditMode = () => setEditMode(!editMode);

  const handleChange = (key, value) =>
    setEditEntity((x) => ({ ...x, [key]: value }));

  const handleSnackbar = (message) => {
    setSnack({ show: true, message: "Registro atualizado com sucesso!" });

    setTimeout(() => {
      setSnack({ show: false, message: "" });
    }, 4000);
  };

  const onSave = async () => {
    try {
      if (id) {
        const result = await put(editEntity, id);
        if (result?.status === 204) {
          handleSnackbar("Registro atualizado com sucesso");
          setEntity(editEntity);
          toggleEditMode();
        }
      }
    } catch (error) {
      handleSnackbar("Ocorreu um erro ao processar sua solicitação");
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        {!editMode ? (
          <ViewPage entity={entity} toggleEditMode={toggleEditMode} />
        ) : (
          <FormPage
            entity={editEntity}
            toggleEditMode={toggleEditMode}
            handleChange={handleChange}
            onSave={onSave}
          />
        )}
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snack.show}
        autoHideDuration={4000}
        message={snack.message}
      />
    </>
  );
};

export default Details;
