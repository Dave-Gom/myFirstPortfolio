import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";

import Contact from "./Contact";
import Home from "./Home";
import NotFound from "./NotFound";
import Now from "./Now";
import Proyects from "./Proyects";
import Resume from "./Resume";

const Contents = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/now" element={<Now />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Contents;
