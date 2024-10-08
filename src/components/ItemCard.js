import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { clipText } from "../utils/stringUtils.ts";
import Modal from "./modal/Modal.js";
import { Link } from "react-router-dom";

const ItemCard = ({
  id,
  title,
  price,
  description,
  image,
  rating,
  uniqueKey,
}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const onAddToCartClick = () => {
    const item = { title, price, description, image, uniqueKey };
    dispatch(addItem(item));
    openModal();
  };

  return (
    <div className="w-72 p-3 m-3 shadow-lg bg-purple-50 flex flex-col rounded-lg">
      <div className="mb-3 w-60 h-60 bg-white flex justify-center px-5 py-3 rounded-md overflow-hidden">
        <img
          className="product-img object-contain h-full"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col grow justify-between p-2">
        <div>
          <h2 className="font-bold text-xl mb-2">{clipText(title, 50)}</h2>
          <p className="text-sm text-gray-600 mb-2">{description.split(".")[0]}</p>
        </div>
        <div className="flex flex-row justify-between items-center mt-4 self-end w-full">
          <div className="text-sm text-gray-700">
            <span className="font-semibold">{rating.rate}</span>
            <span> ⭐ ({rating.count})</span>
            <h4 className="mt-1 font-semibold">₹ {price}</h4>
          </div>
          <div>
            <button
              className="bg-orange-400 p-2 rounded-md font-semibold"
              onClick={onAddToCartClick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-5 justify-between items-center">
          <h3 className="font-medium text-lg">Item added to cart!</h3>
          <Link to={"/cart"} className="w-full">
            <button className="bg-orange-500 hover:bg-orange-600 p-2 rounded-md font-semibold w-full">
              Go to Cart
            </button>
          </Link>
          <button
            onClick={closeModal}
            className="border p-2 rounded-md font-semibold w-full"
          >
            Continue Shopping
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ItemCard;
