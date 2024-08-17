import React from 'react'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="pb-60" >
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>

      {cartItems.map((cartItem) => {
                return (
                    <CartItem key={cartItem.id} {...cartItem}/>
                )
            })}
    </div>
  )
}

export default Cart