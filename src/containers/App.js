import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "../axios";

import HomePage from "./homepage/HomePage";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  const [, setUserData] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/login")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.users);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

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
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
