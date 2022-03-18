import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Textutil from "./components/text";
import About from "./components/about";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./components/contact";

function App() {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "Text - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Text - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <div>
          <Navbar
            title="Text Utils"
            about="About"
            contact="Contact"
            mode={mode}
            toggle={toggle}
          />

          <div className="container modify">
            <Routes>
              <Route path="/" element={<Textutil mode={mode} />} />
              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
