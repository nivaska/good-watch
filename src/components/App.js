import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { LoginCallback } from "@okta/okta-react";
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
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/implicit/callback">
              <LoginCallback />
            </Route>
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
