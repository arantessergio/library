import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Container, FormContainer, FormControl, Button } from "./styles";
import { TextField } from "@material-ui/core";
import { post } from "../../Services/Api";

const WINDOW_MODE = {
  SIGNIN: 1,
  SIGNUP: 2,
};

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [mode, setMode] = useState(WINDOW_MODE.SIGNIN);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/books" } };

  const handleResult = (result) => {
    if (result?.data) {
      window.localStorage.setItem("library-token", result.data.token);
      history.replace(from);
    }
  };

  const handleSubmit = async () => {
    try {
      let result = null;
      if (mode === WINDOW_MODE.SIGNIN) {
        result = await post("users/auth", null, form);
      } else {
        result = await post("users", null, form);
      }
      handleResult(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (key, value) => setForm((x) => ({ ...x, [key]: value }));

  const handleChangeMode = () => {
    setMode((x) =>
      x === WINDOW_MODE.SIGNIN ? WINDOW_MODE.SIGNUP : WINDOW_MODE.SIGNIN
    );
  };

  return (
    <Container>
      <FormContainer>
        {mode === WINDOW_MODE.SIGNUP && (
          <FormControl fullWidth>
            <TextField
              label="Nome"
              onChange={(e) => handleChange("name", e.target.value)}
              variant="outlined"
              type="text"
            />
          </FormControl>
        )}
        <FormControl fullWidth>
          <TextField
            label="Email"
            onChange={(e) => handleChange("email", e.target.value)}
            variant="outlined"
            type="email"
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label="Senha"
            onChange={(e) => handleChange("password", e.target.value)}
            variant="outlined"
            type="password"
          />
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSubmit}
          size="large"
        >
          {mode === WINDOW_MODE.SIGNIN ? "Entrar" : "Criar conta"}
        </Button>
        <Button
          color="secondary"
          variant="contained"
          onClick={handleChangeMode}
          size="large"
        >
          {mode === WINDOW_MODE.SIGNIN ? "Criar conta" : "Cancelar"}
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Login;
