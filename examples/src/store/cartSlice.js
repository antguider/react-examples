import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalPrice: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log('action', action)
            const existingProduct = state.items.find((item)=> item.id === action.payload.id );
            if(existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            console.log('action', action)

        },
        updateQuantity: (state, action) => {
            console.log('action', action)

        }
    }
})


export const { addToCart, removeFromCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;