import React from "react";
import { useState } from "react";
import Modal from "./modal/Modal";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const CartSummary = ({ cartItems, totalQuanity, subtotal }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    dispatch(clearCart());
    setModalOpen(false)
  };
  const onBuyClick = () => {
    openModal();
  };

  // Determine applicable discount
  const isFlatDiscountApplicable = subtotal > 800;
  const discountAmount = isFlatDiscountApplicable ? 100 : subtotal * 0.1;
  const finalAmount = subtotal - discountAmount;

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
        {isFlatDiscountApplicable && (
          <div className="flex justify-between font-bold text-green-600 mt-4">
            <h1>Discount (Flat ₹100): </h1>
            <h1>₹100</h1>
          </div>
        )}
        {!isFlatDiscountApplicable && (
          <div className="flex justify-between font-bold text-green-600 mt-4">
            <h1>Discount (10%): </h1>
            <h1>₹{discountAmount.toFixed(2)}</h1>
          </div>
        )}
        <div className="flex justify-between font-bold mt-4">
          <h1>Final Amount: </h1>
          <h1>₹{finalAmount.toFixed(2)}</h1>
        </div>
      </div>
      <div className=" bg-orange-500 border p-2 text-center rounded-lg self-end">
        <h4 className="text-sm cursor-pointer" onClick={onBuyClick}>Proceed to buy</h4>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-5 h-40vh justify-between items-center">
          <h3 className="font-medium">Order Placed Successfully!</h3>
          <button
            onClick={closeModal}
            className="border-solid	border-2 border-orange p-2 rounded-md font-semibold w-full"
          >
            Continue Shopping
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CartSummary;
