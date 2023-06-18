import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDom.render(
  <Router style={{ margin: "0", padding: "0" }}>
    <App />
  </Router>,
  document.getElementById("root")
);
