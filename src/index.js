import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Darkmode from 'darkmode-js';

const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
// import { Provider } from "react-redux";
// import store from "./redux/store";

ReactDom.render(
  // <Provider store={store}>
    <React.StrictMode>
      <Router style={{ margin: "0", padding: "0" }}>
        <App />
      </Router>
    </React.StrictMode>,
  // </Provider>
  document.getElementById("root")
);
