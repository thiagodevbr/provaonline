import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Prova from "./pages/Prova";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/prova-online/:id" component={Prova} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
