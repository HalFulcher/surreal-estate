import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        <h2>Surreal Estate</h2>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Properties} />
        </Switch>
        <Route exact path="/add-property" component={AddProperty} />
      </div>
    </BrowserRouter>
  );
}

export default App;
