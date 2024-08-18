import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuanity: 0,
    subtotal: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const selectedItem = state.items.find((item) => {
        return item.uniqueKey === action.payload.uniqueKey;
      });
      if (selectedItem) {
        selectedItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuanity += 1;
      state.subtotal += action.payload.price;
    },
    removeItem: (state, action) => {
      // let quantityToRemove = 0;
      // let itemPrice = 0;
      // state.items = state.items.filter((item) => {
      //   if (item.uniqueKey !== action.payload) {
      //     quantityToRemove = item.quantity;
      //     itemPrice = item.price;
      //     return true;
      //   }
      // });
      // state.totalQuanity = state.totalQuanity - quantityToRemove;
      // state.subtotal = state.subtotal - quantityToRemove * itemPrice;
      const itemToRemove = state.items.find(item => item.uniqueKey === action.payload);
  
      if (itemToRemove) {
        // Remove the item from the array
        state.items = state.items.filter(item => item.uniqueKey !== action.payload);
    
        // Update total quantity and subtotal
        state.totalQuanity -= itemToRemove.quantity;
        state.subtotal -= itemToRemove.quantity * itemToRemove.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuanity = 0;
      state.subtotal = 0;
    },
    modifyItemQuantity: (state, action) => {
      const { updatedQuantity, uniqueKey } = action.payload;
      const selectedItem = state.items.find(
        (item) => item.uniqueKey === uniqueKey
      );
      const { quantity, price } = selectedItem;

      state.totalQuanity = state.totalQuanity - quantity + updatedQuantity;
      state.subtotal =
        state.subtotal - quantity * price + updatedQuantity * price;
      if (updatedQuantity) {
        selectedItem.quantity = updatedQuantity;
      } else {
        state.items = state.items.filter(
          (item) => item.uniqueKey !== uniqueKey
        );
      }
    },
  },
});

export const { addItem, removeItem, clearCart, modifyItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
