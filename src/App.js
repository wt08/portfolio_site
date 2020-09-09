import React, { useState } from "react";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import { Route } from "react-router-dom";
import Resume from "./Components/Resume/Resume";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={(routerProps) => (
          <Homepage
            {...routerProps}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        )}
      />
      <Route
        path="/resume"
        render={(routerProps) => (
          <Resume
            {...routerProps}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
        )}
      />
    </div>
  );
}

export default App;
