import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/error" element={<Oops />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
