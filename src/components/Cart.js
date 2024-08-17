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
    <div className="pb-60 flex flex-row" >
      {/* <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button> */}
      <div className ='ml-1'>
      {cartItems.map((cartItem) => {
                return (
                    <CartItem key={cartItem.id} {...cartItem}/>
                )
            })}
    </div>
    <div>
        Cart Summary
      </div>
    </div>
  )
}

export default Cart