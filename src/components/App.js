import React, { Component, Fragment } from "react";
import { CssBaseline, withStyles } from "@material-ui/core";

import AppHeader from "./AppHeader";
import Home from "./Home";

const styles = (theme) => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <AppHeader />
        <main className={this.props.classes.main}>
          <Home />
        </main>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
