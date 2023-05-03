"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [], totalAmount: 0, totalQuantity: 0 };
const cartReducer = createSlice({
  name: `cart`,
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity++;
      state.totalAmount += action.payload.price * action.payload.quantity;
    },
    removeFromCart(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const filterCart = state.items.filter(
        (item) => item.id !== action.payload.item.id
      );
      console.log(state.items);
      if (state.items.length === 0) {
        totalAmount = 0;
      }
      if (itemIndex >= 0) {
        const amountTotalQuantity =
          action.payload.item.price * action.payload.item.quantity;
        state.totalAmount -= amountTotalQuantity;
      }

      if (state.totalQuantity !== 0) {
        state.totalQuantity -= action.payload.item.quantity;
      }
      state.items = filterCart;
    },
    increaseQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;

        state.totalAmount += action.payload.item.price;
      }
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );

      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;

          state.totalAmount -= action.payload.item.price;
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartReducer.actions;
export default cartReducer.reducer;
