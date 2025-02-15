import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const AddtoCartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cartItem.find(
        (item) => item.id == action.payload.id,
      );
      if (existingProduct) {
        existingProduct.quantity += 1; // যদি প্রোডাক্ট থাকে, তাহলে কেবল সংখ্যা বাড়বে
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 }); // নতুন প্রোডাক্ট যুক্ত হবে
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      }
    },
    quantityInrement: (state, action) => {
      state.cartItem[action.payload].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    quantityDecriment: (state, action) => {
      if (state.cartItem[action.payload].quantity > 1) {
        state.cartItem[action.payload].quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cartItem));
      }
    },
    removeProduct: (state,) => {
      state.cartItem.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
      
    },
  },
});

export const { addToCart, quantityInrement, quantityDecriment, removeProduct } =AddtoCartSlice.actions;
export default AddtoCartSlice.reducer;
