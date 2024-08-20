import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./modal/Modal";
import { clearCart } from "../utils/cartSlice";

const CartSummary = ({ cartItems, totalQuantity, subtotal }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [manualCoupon, setManualCoupon] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    dispatch(clearCart());
    setModalOpen(false);
  };
  const onBuyClick = () => {
    openModal();
  };

  // Calculate discount based on selected coupon
  const getDiscountAmount = () => {
    if (selectedCoupon === "FLAT100") return 100;
    if (selectedCoupon === "PERCENT10") return subtotal * 0.1;
    return 0;
  };

  const discountAmount = getDiscountAmount();
  const finalAmount = subtotal - discountAmount;

  const applyManualCoupon = () => {
    setError(""); // Reset error
    if (manualCoupon === "FLAT100" && subtotal > 800) {
      setSelectedCoupon("FLAT100");
    } else if (manualCoupon === "PERCENT10" && subtotal <= 1000) {
      setSelectedCoupon("PERCENT10");
    } else {
      setError("Invalid coupon code or not applicable.");
    }
  };

  // Toggle coupon selection
  const toggleCoupon = (couponCode) => {
    if (selectedCoupon === couponCode) {
      setSelectedCoupon(null); // Unselect coupon if it's already selected
    } else {
      setSelectedCoupon(couponCode); // Select the new coupon
    }
  };

  return (
    <div className="bg-slate-300 rounded-lg p-4 grow items-center h-max">
      <h1 className="font-bold text-center text-2xl">Cart Summary</h1>
      <div className="m-6">
        <div className="flex justify-between">
          <h1 className="font-bold mb-4">Total Items:</h1>
          <h1 className="font-semibold mb-4">{totalQuantity} Items</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="font-bold">Subtotal:</h1>
          <h1 className="font-semibold">₹{subtotal}</h1>
        </div>
        <div className="mt-4">
          <h2 className="font-bold">Select a Coupon:</h2>
          <div className="mt-2 flex space-x-2">
            <button
              onClick={() => toggleCoupon("FLAT100")}
              disabled={subtotal <= 800}
              className={`p-2 rounded-md ${selectedCoupon === "FLAT100" ? 'bg-green-500 text-white' : 'bg-gray-200'}  ${subtotal <= 800 ? 'cursor-not-allowed' : ''}`}
            >
              FLAT100
            </button>
            <button
              onClick={() => toggleCoupon("PERCENT10")}
              disabled={subtotal > 1000}
              className={`p-2 rounded-md ${selectedCoupon === "PERCENT10" ? 'bg-green-500 text-white' : 'bg-gray-200'} ${subtotal > 1000 ? 'cursor-not-allowed' : ''}`}
            >
              PERCENT10
            </button>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-bold">Or enter a coupon code:</h2>
          <div className="flex items-center">
            <input
              type="text"
              value={manualCoupon}
              onChange={(e) => setManualCoupon(e.target.value.toUpperCase())} // Capitalize input
              className="border p-2 rounded-md"
              placeholder="Enter coupon code"
            />
            <button
              onClick={applyManualCoupon}
              className="ml-2 p-2 bg-blue-500 rounded-md font-semibold text-white"
            >
              Apply
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="flex justify-between font-bold text-green-600 mt-4">
          <h1>Discount:</h1>
          <h1>₹{discountAmount.toFixed(2)}</h1>
        </div>
        <div className="flex justify-between font-bold mt-4">
          <h1>Final Amount:</h1>
          <h1>₹{finalAmount.toFixed(2)}</h1>
        </div>
      </div>
        <button className="bg-orange-400 p-2 rounded-md font-semibold w-full " onClick={onBuyClick}>Proceed to buy</button>
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
