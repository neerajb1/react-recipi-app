import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Recipi from "./pages/Recipi";
import SingleRecipi from "./pages/SingleRecipi";
import Default from "./pages/Default";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" exact component={Recipi} />
          <Route path="/recipes/:id" component={SingleRecipi} />
          <Route component={Default} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
