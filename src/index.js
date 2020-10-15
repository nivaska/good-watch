import React from "react";
import ReactDOM from "react-dom";

import { Security } from "@okta/okta-react";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./components/App.js";

const oktaConfig = {
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
  redirect_uri: `${window.location.origin}/implicit/callback`,
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
};

ReactDOM.render(
  <Router>
    <Security {...oktaConfig}>
      <App />
    </Security>
  </Router>,
  document.querySelector("#root")
);
