import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Now from "./pages/Now";
import Proyects from "./pages/Proyects";
import Resume from "./pages/Resume";

const Contents = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/proyects" exact component={Proyects} />
          <Route path="/now" exact component={Now} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default Contents;
