"use client";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Betaling = () => {
  // State for at styre popup'en
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Funktion til at vise popup'en
  const handlePayment = (e) => {
    e.preventDefault(); // Forhindrer standardformularens opførsel
    setIsPopupVisible(true);
  };

  // Funktion til at lukke popup'en
  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <section className="flex justify-center">
      <div className="bg-white xs:w-450 sm:w-600 h-350 rounded-12 xs:pl-2 sm:pl-20 pt-10 mt-20">
        <h2 className="xs:text-xl md:text-4xl text-darkblue pb-10">
          Card information
        </h2>
        <p>Card number</p>
        <form onSubmit={handlePayment}>
          <InputOTP required minLength="16" maxLength="16">
            <InputOTPGroup className="xs:w-90 md:w-100">
              <InputOTPSlot className="h-25" index={0} />
              <InputOTPSlot className="h-25" index={1} />
              <InputOTPSlot className="h-25" index={2} />
              <InputOTPSlot className="h-25" index={3} />
            </InputOTPGroup>

            <InputOTPGroup className="xs:w-90 md:w-100">
              <InputOTPSlot className="h-25" index={4} />
              <InputOTPSlot className="h-25" index={5} />
              <InputOTPSlot className="h-25" index={6} />
              <InputOTPSlot className="h-25" index={7} />
            </InputOTPGroup>

            <InputOTPGroup className="xs:w-90 md:w-100">
              <InputOTPSlot className="h-25" index={8} />
              <InputOTPSlot className="h-25" index={9} />
              <InputOTPSlot className="h-25" index={10} />
              <InputOTPSlot className="h-25" index={11} />
            </InputOTPGroup>

            <InputOTPGroup className="xs:w-90 sm:w-100">
              <InputOTPSlot className="h-25" index={12} />
              <InputOTPSlot className="h-25" index={13} />
              <InputOTPSlot className="h-25" index={14} />
              <InputOTPSlot className="h-25" index={15} />
            </InputOTPGroup>
          </InputOTP>
          <div className="grid grid-cols-2">
            <div>
              <p className="pt-5">Date</p>
              <InputOTP required minLength="4" maxLength="4">
                <InputOTPGroup className="w-50">
                  <InputOTPSlot className="h-25" index={0} />
                  <InputOTPSlot className="h-25" index={1} />
                </InputOTPGroup>

                <InputOTPGroup className="w-50">
                  <InputOTPSlot className="h-25" index={2} />
                  <InputOTPSlot className="h-25" index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div>
              <label>
                <p className="pt-5">CVV</p>
                <input
                  className="bg-blue w-50"
                  type="text"
                  name="CVV"
                  required
                  minLength="3"
                  maxLength="3"
                />
              </label>
            </div>
          </div>
          {/* Knappen til at afslutte betaling */}
          <button
            type="submit"
            className="bg-darkblue text-white rounded-12 px-5 py-2 mt-5"
          >
            Complete Payment
          </button>
        </form>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-10 rounded-12 text-center w-80">
            <h2 className="text-darkblue text-xl mb-5">Thank You!</h2>
            <p>Your payment has been processed successfully.</p>
            <button
              onClick={closePopup}
              className="bg-darkblue text-white rounded-12 px-5 py-2 mt-5"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Betaling;
