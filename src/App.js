import React from "react";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { Route } from "react-router-dom";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
