import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { HireRussell } from "./components/pages/HireRussell";
import { About } from "./components/pages/About";
import { Shows } from "./components/pages/Shows";
import { Oops } from "./components/pages/Oops";
import { ThankYou } from "./components/pages/ThankYou";
import { Contact } from "./components/pages/Contact";
import { FourOhFour } from "./components/pages/404";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/hirerussell" element={<HireRussell />} />
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

const firebaseConfig = {
  apiKey: "AIzaSyCvEV8IdvMExduVP3Hpd8HE1aVuvGY3j08",
  authDomain: "russell-comrie.firebaseapp.com",
  projectId: "russell-comrie",
  storageBucket: "russell-comrie.firebasestorage.app",
  messagingSenderId: "844118589212",
  appId: "1:844118589212:web:c96fda6ac9875ef31d04d9",
  measurementId: "G-N9XKGJVRBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default App;
