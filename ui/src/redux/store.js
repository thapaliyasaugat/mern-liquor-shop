import Cart from "./Cart";
import User from "./User"

import { configureStore, combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
    cart: Cart,
    user: User
});
export const store = configureStore({
    reducer: rootReducer
})