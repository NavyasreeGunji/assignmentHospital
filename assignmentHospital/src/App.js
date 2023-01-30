import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Containers/Home/Home";
import Login from "./Containers/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
