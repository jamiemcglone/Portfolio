import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // UPDATED
import PortfolioContainer from "./containers/PortfolioContainer";

const App = () => {

return (
  <PortfolioContainer /> 
  // <Router>
  //   <NavBar />
  //   <Routes>
  //     <Route path="/" element={<Portfolio />} />
  //     <Route path="/about" element={< About />} />
  //     <Route path="/contact" element={< Contact />} />
  //     <Route path="/projects" element={< Projects />} />
  //   </Routes>
  // </Router>
);
}


export default App;