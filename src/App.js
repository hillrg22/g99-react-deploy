import React, { Component } from "react";
import "./App.css";
import Cake from "./Cake";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="holder">
            <Cake />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
