import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import LoginPage from "./views/Login";
import RegisterPage from "./views/Register";


function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
         </Switch>
      </BrowserRouter>
   )
}

export default App;
