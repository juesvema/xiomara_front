import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Estudiante from "./estudiante/Estudiante";
import Semestre from "./semestres/Semestre";

const RouterPaths = () => (
  <Router>
    <div>
      <Route exact path="/" component={Estudiante} />
      <Route path="/semestre" component={Semestre} />
    </div>
  </Router>
);

export default RouterPaths;