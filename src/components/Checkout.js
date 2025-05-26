import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { vehicle, days, amount } = location.state || {};

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      const options = {
        key: "YOUR_RAZORPAY_KEY",
        amount: amount * 100,
        currency: "INR",
        name: "Car/Bike Rental",
        description: "Booking Payment",
        handler: function (response) {
          alert("Payment Successful");
        },
        prefill: { email: "user@example.com" },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  if (!vehicle) return <p>Invalid Access</p>;

  return (
    <div>
      <h2>Checkout</h2>
      <p>Vehicle: {vehicle.name}</p>
      <p>Days: {days}</p>
      <p>Amount: ₹{amount}</p>
      <button onClick={loadRazorpay}>Pay Now</button>
    </div>
  );
};

export default Checkout;
