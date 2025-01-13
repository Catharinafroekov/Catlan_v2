"use client";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import React from "react";
import Timer from "@/components/Timer";

const Kurv = ({
  addToCart,
  removeFromCart,
  cartItems = [],
  ticketCounts = {},
}) => {
  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + (item.price || 0), 0)
    : 0;

  const fee = 99;
  const totalWithFee = totalPrice + fee;

  return (
    <div className="bg-white w-400 xs:w-200 md:w-400 rounded-12 pb-10 pt-2 p-4 fixed top-20 xs:right-7 md:right-20">
      <h3 className="text-xl text-darkblue pb-20">Cart</h3>
      <p className="text-darkblue">Tickets:</p>

      <div>
        {ticketCounts.foo > 0 && (
          <div className="flex items-center text-black tracking-wider">
            <p className="mr-3">FOO-TICKET</p>
            <FaPlus
              onClick={() =>
                addToCart(
                  { name: "FOO-TICKET", price: 799, type: "foo" },
                  "foo"
                )
              }
              className="ml-2"
            />
            <p className="ml-5 mr-5">{ticketCounts.foo}</p>
            <FiMinus onClick={() => removeFromCart("foo")} className="ml-2" />
          </div>
        )}
        {ticketCounts.vip > 0 && (
          <div className="flex items-center text-black tracking-wider">
            <p className="mr-3">VIP-TICKET</p>
            <FaPlus
              onClick={() =>
                addToCart(
                  { name: "VIP-TICKET", price: 1299, type: "vip" },
                  "vip"
                )
              }
              className="ml-4"
            />
            <p className="ml-5 mr-5">{ticketCounts.vip}</p>
            <FiMinus onClick={() => removeFromCart("vip")} className="ml-2" />
          </div>
        )}
      </div>

      <div className="mt-4 border-t pt-4">
        <p className="text-black text-bold">Taxes: 99 kr.</p>
        <p className="text-black font-bold text-lg mb-5">
          Total amount: {totalWithFee} kr.
        </p>
      </div>
      <Timer />
    </div>
  );
};

export default Kurv;
