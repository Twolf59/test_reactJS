import './App.css';
import React from 'react';
import Home from "./pages/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>

          <Switch>
              <Route path="/" exact component={Home} />
          </Switch>

      </BrowserRouter>
  );
}

export default App;
