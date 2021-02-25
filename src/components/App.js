import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import Properties from "./Properties";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className="App">
        <h2>Surreal Estate</h2>
        <NavBar />
        <Switch path />
      </div>
    </BrowserRouter>
  );
}

export default App;
