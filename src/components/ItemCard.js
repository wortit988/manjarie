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
    <div className="w-72 p-3 m-3 shadow-lg bg-purple-50 flex flex-col">
      <div className="mb-3 w-60 h-60 bg-white flex justify-center px-5 py-3">
        <img
          className="product-img object-contain h-full"
          src={image}
          alt="logo"
        />
      </div>
      <div className="flex flex-col grow justify-between">
        <div>
          <h2 className="h-20 font-bold text-xl">{clipText(title, 50)}</h2>
          <div className="flex justify-start">
            <h4 className="h-30 mt-2">{description.split(".")[0]}</h4>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-4 self-end w-full">
          <div>
            <span className="font-semibold">{rating.rate}</span>
            <span> ⭐({rating.count})</span>
            <h4 className="mt-1">₹ {price}</h4>
          </div>
          <div>
            <button
              className="bg-orange-400 p-2 rounded-md font-semibold "
              onClick={onAddToCartClick}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-5 h-40vh justify-between items-center">
          <h3 className="font-medium">Item added to cart!</h3>
          <Link to={"/cart"} className="w-full">
            <button className="bg-orange-400 p-2 rounded-md font-semibold w-full ">
              Go to cart
            </button>
          </Link>
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

export default ItemCard;
