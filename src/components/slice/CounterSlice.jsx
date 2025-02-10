import { createSlice } from "@reduxjs/toolkit";
const initialState={
        cartItem:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')): [],
}

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      let findProduct= state.cartItem.findIndex((item)=>item.id == action.payload.id
    );
      if(findProduct !== -1){
             state.cartItem[findProduct].quantity +=1;
             localStorage.setItem('cart',JSON.stringify(state.cartItem));
      }else{
          state.cartItem=[...state.cartItem,action.payload];
          localStorage.setItem('cart',JSON.stringify(state.cartItem));
      }
      
    },
   
    quantityInrement:(state,action)=>{
      state.cartItem[action.payload].quantity+=1;
      localStorage.setItem('cart',JSON.stringify(state.cartItem));
    },
    quantityDecriment:(state,action)=>{
      if (state.cartItem[action.payload].quantity > 1) {
          state.cartItem[action.payload].quantity-=1;
          localStorage.setItem('cart',JSON.stringify(state.cartItem));
      }
    },
    removeProduct:(state,action)=>{
      state.cartItem.splice(action.payload,1)
      localStorage.setItem('cart',JSON.stringify(state.cartItem));
    },
    addToCart: (state, action) => {
      const existingProduct = state.cartItem.find((item) => item.id == action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1; // যদি প্রোডাক্ট থাকে, তাহলে কেবল সংখ্যা বাড়বে
        localStorage.setItem('cart',JSON.stringify(state.cartItem));
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 }); // নতুন প্রোডাক্ট যুক্ত হবে
        localStorage.setItem('cart',JSON.stringify(state.cartItem));
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment,quantityInrement,quantityDecriment,removeProduct,addToCart} = CounterSlice.actions;

export default CounterSlice.reducer;
