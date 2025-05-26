import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const vehicleMap = {
  1: { name: "Honda Activa", price: 300 },
  2: { name: "Royal Enfield", price: 500 },
  3: { name: "Hyundai i20", price: 1000 },
};

const Booking = () => {
  const { id } = useParams();
  const vehicle = vehicleMap[id];
  const [days, setDays] = useState(1);
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/checkout", {
      state: { vehicle, days, amount: days * vehicle.price },
    });
  };

  return (
    <div>
      <h2>Booking: {vehicle.name}</h2>
      <label>Rental Days: </label>
      <input type="number" value={days} onChange={(e) => setDays(e.target.value)} min="1" />
      <p>Total: ₹{days * vehicle.price}</p>
      <button onClick={handleProceed}>Proceed to Checkout</button>
    </div>
  );
};

export default Booking;
