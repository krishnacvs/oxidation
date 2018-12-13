import * as React from "react";
import "./App.css";

const logo = require("./logo.svg");

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default Header;
