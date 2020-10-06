import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = ({ children }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Supero</Typography>
      {children}
    </Toolbar>
  </AppBar>
);

export default Header;
