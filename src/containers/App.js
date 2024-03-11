import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./homepage/HomePage";
import Login from "./auth/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;