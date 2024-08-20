import React from "react";
import ItemCard from "./ItemCard";
import { itemList } from "../assets/itemList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Body = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    // API call
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const products = await data.json();
      setProductList(
        products.map((product) => {
          return {
            ...product,
            uniqueKey: uuidv4(),
          };
        })
      );
    } catch (error) {
      setProductList(itemList);
    }
  }

  return (
    <div className="flex flex-wrap pb-24 justify-center">
      {productList.map((item) => {
        return <ItemCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Body;
