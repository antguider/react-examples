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
            const existingProduct = state.items.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
            state.totalPrice += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const product = state.items.find((item) => item.id === action.payload.id);
            if (product) {
                state.totalPrice -= product.price * product.quantity;
                state.items = state.items.filter((item) => item.id !== action.payload.id)
            }
        },
        updateQuantity: (state, action) => {
            const product = state.items.find(item => item.id === action.payload.id);
            if (product) {
                product.quantity = action.payload.quantity;
                state.totalPrice = state.totalPrice - product.price;
                if(product.quantity === 0) {
                    state.items = state.items.filter((item) => item.id !== action.payload.id)
                }
            }
        }
    }
})


export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;