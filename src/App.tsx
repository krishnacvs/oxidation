import * as React from "react";
import "./App.css";
import Header from "./views/Header.tsx";
import Footer from "./views/Footer.tsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
