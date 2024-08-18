import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import CartSummary from "./CartSummary";
import EmptyCartPage from "./EmptyCartPage";

const Cart = () => {
  const {
    items: cartItems,
    totalQuanity,
    subtotal,
  } = useSelector((store) => store.cart);
  return (
    <>
      {cartItems.length ? (
        <div className="pb-60 flex flex-row p-10 gap-8">
          <div className="ml-1 w-8/12">
            {cartItems.map((cartItem) => {
              return <CartItem key={cartItem.id} {...cartItem} />;
            })}
          </div>
          <CartSummary
            cartItems={cartItems}
            totalQuanity={totalQuanity}
            subtotal={subtotal}
          />
        </div>
      ) : (
        <EmptyCartPage />
      )}
    </>
  );
};

export default Cart;
