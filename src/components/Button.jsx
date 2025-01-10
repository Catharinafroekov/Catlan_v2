import React from "react";

const Button = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className=" md:ml-10 border-2 border-black xs:w-150 sm:w-[200px] h-10 p-3 bg-white flex items-center justify-center cursor-pointer rounded-15"
    >
      <p className="m-0 text-darkblue hover:underline">ADD TO CART</p>
    </div>
  );
};

export default Button;
