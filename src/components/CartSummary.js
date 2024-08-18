import React from "react";

const CartSummary = ({ cartItems, totalQuanity, subtotal }) => {
  return (
    <div className="bg-slate-300 rounded-lg	p-4 grow items-center h-max">
      <h1 className="font-bold text-center text-2xl">Cart Summary</h1>
      <div className="m-6">
        <div className="flex justify-between">
          <h1 className="font-bold mb-4">Total Items: </h1>
          <h1 className="font-semibold mb-4">{totalQuanity} Items</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="font-bold">Subtotal: </h1>
          <h1 className="font-semibold">₹{subtotal}</h1>
        </div>
      </div>
      <div className=" bg-orange-500 border p-2 text-center rounded-lg self-end">
        <h4 className="text-sm	">Proceed to buy</h4>
      </div>
    </div>
  );
};

export default CartSummary;
