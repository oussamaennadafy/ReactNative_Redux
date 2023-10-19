import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


// Define the state shape using an interface
interface CartState
{
 ids: number[];
}

const initialState: CartState = {
 ids: []
}

type payloadType = {
 id: number
}

const cartSlice = createSlice({
 name: "cart",
 initialState,
 reducers: {
  addToCart: (state, action: PayloadAction<payloadType>) =>
  {
   if (state.ids.includes(action.payload.id)) return;
   state.ids.unshift(action.payload.id)
  },
  removeFromCart: (state, action: PayloadAction<payloadType>) =>
  {
   state.ids.splice(state.ids.indexOf(action.payload.id), 1)
  }
 }
})


export const { actions: cartActions, reducer: cartReducer } = cartSlice