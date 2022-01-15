import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    },
    reducers: {
        addProduct: (state, action) => {
            const existItem = state.products.find((item) => item.productId === action.payload.productId);
            if (existItem) {
                state.products = state.products.map((product) => (

                    product.productId === existItem.productId ? action.payload : product
                ))

            }
            else {
                state.products.push(action.payload)
            }

        },
        removeProduct: (state, action) => {
            const filtered = state.products.filter((p) => p.productId !== action.payload.productId)
            state.products = filtered
        },
        emptyCart: (state) => {
            state.products = []
        }
    }
})
export const { addProduct, removeProduct, emptyCart } = cartSlice.actions
export default cartSlice.reducer
