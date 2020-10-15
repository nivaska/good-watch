import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LoginButton from "./Login/LoginButton";

class AppHeader extends Component {
  render() {
    return (
      <div className="app-bar">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              My React App
            </Typography>
          </Toolbar>
          <LoginButton />
        </AppBar>
      </div>
    );
  }
}

export default AppHeader;
