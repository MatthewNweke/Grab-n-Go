// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
