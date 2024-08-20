import { useState } from "react";
import React from "react";
import { modifyItemQuantity, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({
  title,
  price,
  description,
  image,
  uniqueKey,
  quantity = 1,
}) => {
  const [itemQty, setItemQty] = useState(quantity);
  const dispatch = useDispatch();
  const removeItemInfo = () => {
    dispatch(removeItem(uniqueKey));
  };

  const modifyQuantity = (val) => {
    dispatch(modifyItemQuantity({ uniqueKey, updatedQuantity: val }));
    setItemQty(val);
  };
  return (
    <div className="flex shadow-lg p-3 m-3 bg-purple-50">
      <img
        className="mb-3 w-40 h-40 object-contain mr-4"
        src={image}
        alt="logo"
      />
      <div className="flex flex-col justify-center">
        <div className="font-bold text-xl">{title}</div>
        <div className="text-sm">{description}</div>
        <div className="font-semibold">₹ {price}</div>
      </div>
      <div className="flex items-center justify-end grow">
        <div className="flex flex-nowrap">
          <button
            className={`${"rounded-[50%] px-2 pb-1 cursor-pointer text-xl bg-white border-2 "}${
              itemQty <= 1 ? "text-gray-400" : ""
            }`}
            onClick={() => {
              if(itemQty>1){
              modifyQuantity(parseInt(itemQty) - 1);
              }
            }}
          >
            {" "}
            -{" "}
          </button>
          <input
            type="text"
            className="mx-2 text-center align-middle w-12 rounded-sm border-solid border-2"
            value={itemQty}
            onChange={(e) => {
              setItemQty(e.target.value);
            }}
          />
          <button
            className={`${"rounded-[50%] px-2 pb-1 cursor-pointer text-xl bg-white border-2"}`}
            onClick={() => {
              modifyQuantity(parseInt(itemQty) + 1);
            }}
          >
            {" "}
            +{" "}
          </button>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white p-2 m-4 rounded-md"
          onClick={removeItemInfo}
        >
          Remove
        </button>


      </div>
    </div>
  );
};

export default CartItem;
