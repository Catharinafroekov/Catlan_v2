"use client";
import React, { useState, useEffect } from "react";
import CampingCard from "./CampingCard";
import CampingBox from "./CampingBox";

const Camping = () => {
  const [bookings, setBookings] = useState([]);

  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch(
        "https://freezing-humble-sauroposeidon.glitch.me/available-spots"
      );
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  const addToCart = (booking) => {
    setSelectedBooking(booking);
    (prevItems) => [...prevItems, { ...booking, type: "camping" }];
  };
  // har slettet setCartItems før ((prevItems)

  return (
    <section className="p-10">
      <div className="grid sm:grid-cols-[repeat(2,minmax(0,0.2fr))] md:grid-cols-[repeat(3,minmax(0,0.2fr))]">
        {bookings.map((booking, index) => (
          <CampingCard
            key={index}
            area={booking.area}
            available={booking.available}
            addToCart={addToCart}
          />
        ))}
      </div>

      <CampingBox className="p-20 " selectedBooking={selectedBooking} />
    </section>
  );
};

export default Camping;
