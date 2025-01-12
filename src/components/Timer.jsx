"use client";
import React, { useState } from "react";
import Link from "next/link";

function Reservation() {
  const [reservationId, setReservationId] = useState(null);
  const [timerExpiry, setTimerExpiry] = useState(null);

  const handleReserveSpot = async () => {
    try {
      const response = await fetch(
        "https://freezing-humble-sauroposeidon.glitch.me/reserve-spot",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ area: "Alfheim", amount: 3 }),
        }
      );
      const data = await response.json();
      if (data.id) {
        setReservationId(data.id);

        // Start a 5-minute timer
        const expiryTime = new Date();
        expiryTime.setSeconds(expiryTime.getSeconds() + 300);
        setTimerExpiry(expiryTime);
      }
    } catch (error) {
      console.error("Failed to reserve spot:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleReserveSpot}
        className="p-2 rounded-15 border border-darkblue text-darkblue hover:underline"
      >
        Reserve tickets
      </button>

      {/* Navigate to form page with reservationId and expiryTime */}
      {reservationId && timerExpiry && (
        <Link
          href={{
            pathname: "/form",
            query: {
              reservationId: reservationId,
              expiryTime: timerExpiry.toISOString(),
            },
          }}
        >
          <button className="p-2 rounded-15 border border-darkblue text-darkblue hover:underline">
            Fill out information
          </button>
        </Link>
      )}
    </div>
  );
}

export default Reservation;
