"use client";
import React, { useState } from "react";
import Button from "./Button";
import Kurv from "./Kurv";

const Ticket = () => {
  const [cartItems, setCartItems] = useState([]);
  const [ticketCounts, setTicketCounts] = useState({ foo: 0, vip: 0 });

  const addToCart = (item, type) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setTicketCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1, // Opdater tælleren for den specifikke type
    }));
  };

  return (
    <div>
      {/* Send både cartItems og ticketCounts til Kurv */}
      <Kurv cartItems={cartItems} ticketCounts={ticketCounts} />

      <div className="bg-white bg-opacity-75 h-400 w-700 rounded-12 pb-7 pt-7 pl-5 ml-20 mb-20 xs:w-200 xs:ml-10 sm:w-400 lg:w-700">
        <h2 className="text-darkblue p-5">FOO-TICKET</h2>
        <p>Lorem ipsum dolor, sit amet consectetur.</p>
        <p className="pt-3 pb-3">Price: 799 kr.</p>
        <Button
          onClick={() => addToCart({ name: "FOO-BILLET", price: 799 }, "foo")}
        />
      </div>

      <div className="bg-white bg-opacity-75 h-400 w-700 rounded-12 pb-7 pt-7 pl-5 ml-20 xs:w-200 xs:ml-10 sm:w-400 lg:w-700">
        <h2 className="text-darkblue p-5">VIP-TICKET</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quaerat
          odit laudantium blanditiis nihil at natus.
        </p>
        <p className="pt-3 pb-3">Price: 1299 kr.</p>
        <Button
          onClick={() => addToCart({ name: "VIP-BILLET", price: 1299 }, "vip")}
        />
      </div>
    </div>
  );
};

export default Ticket;
