import * as React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";
import Menu from "./views/Menu.tsx";
import Home from "./views/Home.tsx";

class App extends React.Component {
  render() {
    console.log("App is rendered");
    return (
      <div>
        <Header />
        <section>
          <Menu />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
