import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // UPDATED
import NavBar from "./components/NavBar";
import Portfolio from "./components/PortfolioHome";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {

return (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/about" element={< About />} />
      <Route path="/contact" element={< Contact />} />
      <Route path="/projects" element={< Projects />} />
    </Routes>
  </Router>
);
}


export default App;