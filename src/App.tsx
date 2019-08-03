import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { Services } from "./components/Services";
import { VoiceOvers } from "./components/VoiceOvers";
import { Shows } from "./components/Shows";
import { Gallery } from "./components/Gallery";
import { Events } from "./components/Events";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/voiceovers" component={VoiceOvers} />
          <Route path="/shows" component={Shows} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
