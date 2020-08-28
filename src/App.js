import React from "react";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { Route } from "react-router-dom";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
    </div>
  );
}

export default App;
