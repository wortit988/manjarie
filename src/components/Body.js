import React from 'react'
import ItemCard from './ItemCard'
import { itemList } from '../assets/itemList';

const Body = () => {
  return (
    <div className="flex flex-wrap pb-60 justify-center">
      {itemList.map((item) => {
                return (
                 <ItemCard key={item.id} {...item} />
                )
            })}
    </div>
  )
}

export default Body