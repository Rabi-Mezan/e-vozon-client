import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   cartItems:[],
   cartTotal:0,
   cartQuantity:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: { 
    addToCart:( state, action)=>{
        state.cartItems.push(action.payload) 
    }

    
  },
})

 
export const {addToCart,} = cartSlice.actions

export default cartSlice.reducer