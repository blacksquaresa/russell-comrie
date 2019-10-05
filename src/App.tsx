import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Speaking } from "./components/Speaking";
import { About } from "./components/About";
import { Shows } from "./components/Shows";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shows" component={Shows} />
          <Route path="/speaking" component={Speaking} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
