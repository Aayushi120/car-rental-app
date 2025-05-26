// src/components/VehicleList.js
import React from "react";

const vehicles = [
  {
    id: 1,
    name: "Honda Activa",
    type: "Scooter",
    price: 200,
    image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/107639/activa-6g-right-front-three-quarter.jpeg?isig=0&q=75",
  },
  {
    id: 2,
    name: "Royal Enfield Classic",
    type: "Bike",
    price: 450,
    image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/110345/classic-350-right-front-three-quarter-6.jpeg",
  },
  {
    id: 3,
    name: "Hyundai i20",
    type: "Car",
    price: 1200,
    image: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/49991/i20-exterior-right-front-three-quarter.jpeg?q=75",
  },
];

const VehicleList = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f2f6fc", minHeight: "100vh" }}>
      <h2 style={{
        textAlign: "center",
        marginBottom: "2rem",
        color: "#222",
        fontSize: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
        🚗 Available Vehicles for Rent 🛵
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            style={{
              width: "280px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#fff",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
          >
            <img
              src={vehicle.image}
              alt={vehicle.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ color: "#333", marginBottom: "0.5rem" }}>{vehicle.name}</h3>
              <p style={{ color: "#777", fontSize: "14px" }}>{vehicle.type}</p>
              <p style={{ color: "#444", fontSize: "16px" }}>
                <strong>₹{vehicle.price}</strong> /day
              </p>
              <button
                onClick={() => window.location.href = `/booking/${vehicle.id}`}
                style={{
                  padding: "0.5rem 1.2rem",
                  border: "none",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "0.8rem",
                  fontSize: "15px",
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;
