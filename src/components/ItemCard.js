import React from 'react';
import logo from '../logo.svg';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { v4 as uuidv4 } from 'uuid';

const ItemCard = ({id, title, price, description, image, rating}) => {
    const dispatch = useDispatch();


  const addItemInfo = () => {
    const item = {title, price, description, image, uniqueKey: uuidv4() };
    dispatch(addItem(item));
  };
  return (
    <div className="w-72 p-3 m-3 shadow-lg bg-purple-50">
            <img className="mb-3" src= {image} alt='logo' />
            <div className="">
                <h2 className="font-bold text-xl">{title}</h2>
                <h4 className='text-clip'>{description}</h4>
                <div className='flex flex-row justify-between items-center mt-4'> 
                <div>
                <span className="font-semibold">{rating.rate}</span><span> ⭐({rating.count})</span>
                <h4 className='mt-1'>₹ {price}</h4>
                </div>
                <div>
                <button className='bg-orange-400 p-2 rounded-md font-semibold ' onClick={addItemInfo}>Add to Cart</button>
                </div>
                </div>
            </div>
        </div>
  )
}

export default ItemCard