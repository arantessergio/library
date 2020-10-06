import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { get } from "../../Services/Api";
import { Header } from "../../Components/Header";

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

  const [entity, setEntity] = useState(INITIAL_ENTITY);
  const [editMode, setEditMode] = useState(false);

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

  const toggleEditMode = (obj) => {
    if (obj) setEntity(obj);
    setEditMode(!editMode);
  };

  return (
    <>
      <Header />
      {!editMode ? (
        <ViewPage
          entity={entity}
          toggleEditMode={() => toggleEditMode(false)}
        />
      ) : (
        <FormPage entity={entity} goBack={toggleEditMode} />
      )}
    </>
  );
};

export default Details;
