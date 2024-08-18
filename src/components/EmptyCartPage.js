import React from "react";
import { Link } from "react-router-dom";
import shoppingImage from "../assets/shoppingImage.svg";

const EmptyCartPage = () => {
  return (
    <div className="flex items-center justify-center gap-10 w-full p-10 flex-wrap">
      <img
        src={shoppingImage}
        className="h-100 w-80 grow"
        alt="shoppingImage"
      />
      <div className="flex flex-col items-center justify-center h-full gap-10 px-4 py-8 self-center mx-4 border-2 border-slate-300 rounded-lg grow">
        <h1>Your cart is empty. Add items to the cart</h1>
        <Link
          to={"/"}
          className="w-full flex flex-col items-center justify-center "
        >
          <button className="bg-orange-400 p-2 rounded-md font-semibold w-6/12">
            Start shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartPage;
