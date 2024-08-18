import React from 'react'
import ItemCard from './ItemCard'
import { itemList } from '../assets/itemList';
import { useState, useEffect } from 'react';

const Body = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    // API call
    getProducts(); 
}, [])


async function getProducts() {
  try {
  const data = await fetch ("https://fakestoreapi.com/products");
  const json = await data.json();
  setProductList(json);
} catch (error) {
  setProductList(itemList);
}
};

  return (
    <div className="flex flex-wrap pb-60 justify-center">
      {productList.map((item) => {
                return (
                 <ItemCard key={item.id} {...item} />
                )
            })}
    </div>
  )
}

export default Body