import { useState } from 'react';
import React from 'react';
// import logo from '../logo.svg';
import { removeItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({title, price, description, image, uniqueKey }) => {
      const [itemQty, setItemQty] = useState(1);
      const dispatch = useDispatch();
      const removeItemInfo = () => {
        dispatch(removeItem(uniqueKey ));
      };
  return (
    <div className='flex shadow-lg  p-3 m-3 bg-purple-50'>
        <span><img className="mb-3 w-36 h-16" src= {image} alt='logo' /></span>
        <div>
            <div className="font-bold text-xl">{title}</div>
            <div className='text-sm'>{description}</div>
            <div className="font-semibold">₹ {price}</div>
        </div>
        <div className='flex items-center justify-end grow'>
            <div className=''>
                <button 
                className='rounded-[50%] px-2 pb-1 cursor-pointer text-xl bg-white border-2'
                onClick={() => {
                    if(itemQty>=1){
                    setItemQty(parseInt(itemQty)+1)
                    }
                }}
                > + </button>
                <input type="text" 
                className='mx-2 text-center align-middle w-12 rounded-sm border-solid border-2' 
                value={itemQty}
                onChange={(e) => {
                    setItemQty(e.target.value);
                }}
                />
                <button 
                className='rounded-[50%] px-3 pb-1 cursor-pointer text-xl bg-white border-2'
                onClick={() => {
                    if(itemQty>1){
                    setItemQty(parseInt(itemQty)-1)
                    }
                }}
                > - </button>
            </div>
            <button className='bg-green-500 p-2 m-4 rounded-md' onClick={removeItemInfo}>Remove</button>
        </div>
    </div>

  )
}

export default CartItem