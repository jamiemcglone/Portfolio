import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // UPDATED
import NavBar from "./components/NavBar";
import Portfolio from "./components/PortfolioHome";

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