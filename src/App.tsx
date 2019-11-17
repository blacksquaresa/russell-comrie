import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Speaking } from "./components/pages/Speaking";
import { About } from "./components/pages/About";
import { Shows } from "./components/pages/Shows";
import { Oops } from "./components/pages/Oops";
import { ThankYou } from "./components/pages/ThankYou";
import { Contact } from "./components/pages/Contact";
import { FourOhFour } from "./components/pages/404";

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
          <Route path="/error" component={Oops} />
          <Route path="/thankyou" component={ThankYou} />
          <Route path="*" component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
