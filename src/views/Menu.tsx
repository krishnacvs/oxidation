import * as React from "react";
import "./../App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home.tsx";
import About from "./Pages.tsx";
import Topics from "./Pages.tsx";
class Menu extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="Menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default Menu;
