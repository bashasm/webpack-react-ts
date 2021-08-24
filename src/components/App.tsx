import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./about/About";
import "./App.scss";
import Dashboard from "./dashboard/Dashboard";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <div className="page-content">
          <Route path="/" exact component={Dashboard} />
          <Route path="/about" component={About} />
        </div>
      </>
    </Router>
  );
}

export default App;
