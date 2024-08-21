import React from "react";
import ItemCard from "./ItemCard";
import Shimmer from "./Shimmer";  // Import Shimmer component
import { itemList } from "../assets/itemList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Body = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

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
    } finally {
      setLoading(false); // Set loading to false after data is fetched
    }
  }

  return (
    <div className="flex flex-wrap pb-24 justify-center">
      {loading
        ? Array.from({ length: 6 }).map((_, index) => (
            <Shimmer key={index} />
          )) // Show shimmer effect while loading
        : productList.map((item) => (
            <ItemCard key={item.id} {...item} />
          ))
      }
    </div>
  );
};

export default Body;
