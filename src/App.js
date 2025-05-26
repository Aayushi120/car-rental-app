// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import VehicleList from "./components/VehicleList";
import Booking from "./components/Booking";
import Checkout from "./components/Checkout";
import History from "./components/History";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<VehicleList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
