import React, { useEffect, useState } from "react";
import { db } from "../firebase";
 
import { collection, getDocs } from "firebase/firestore";

const History = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const bookingsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBookings(bookingsData);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Booking History</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {bookings.map((booking) => (
            <li key={booking.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
              <p><strong>User:</strong> {booking.UserId}</p>
              <p><strong>Vehicle:</strong> {booking.vehicle}</p>
              <p><strong>Start Date:</strong> {new Date(booking.date?.seconds * 1000).toLocaleDateString()}</p>
              <p><strong>Duration:</strong> {booking.duration} days</p>
              <p><strong>Amount Paid:</strong> ₹{booking.amountPaid}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
