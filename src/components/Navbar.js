import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: "#004080",
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ margin: 0, fontSize: "1.8rem", fontWeight: "bold" }}>
        🚗 Rent-A-Ride
      </h1>
      <div style={{ display: "flex", gap: "20px", fontSize: "1rem" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        <Link to="/register" style={{ color: "white", textDecoration: "none" }}>Register</Link>
        <Link to="/history" style={{ color: "white", textDecoration: "none" }}>History</Link>
      </div>
    </nav>
  );
};

export default Navbar;
