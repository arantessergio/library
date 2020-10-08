import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { useAuthContext } from "../../Contexts/Auth";
import { useHistory } from "react-router-dom";

const Header = ({ children }) => {
  const { setUser } = useAuthContext();
  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.removeItem("library-token");
    setUser(null);
    history.replace("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Supero</Typography>
        {children}
        <Button variant="contained" color="default" onClick={handleLogout}>
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
