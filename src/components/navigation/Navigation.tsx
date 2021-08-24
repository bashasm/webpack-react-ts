import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <header className="page-header">
      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
