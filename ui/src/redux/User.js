import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: JSON.parse(localStorage.getItem('userDetail')) || null,
        loading: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        loginFailure: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = true;
        },
        userLogout: (state) => {
            localStorage.clear();
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        }
    }
})
export const { loginStart, loginSuccess, loginFailure, userLogout } = userSlice.actions

export default userSlice.reducer