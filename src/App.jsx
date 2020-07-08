import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { render } from "react-dom";

import { Alert } from "./components/Alert";
import { Buttons } from "./components/Buttons";

const App = () => (
  <div className="container">
    <h1>Hello I am an app</h1>
    <Alert text="Hello I am an alert" />
    <Buttons />
  </div>
);

render(<App />, document.getElementById("root"));
