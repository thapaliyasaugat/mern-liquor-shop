import { loginStart, loginSuccess, loginFailure, userLogout } from "./User"
import { publicRequest, userRequest } from "../requsetMethod"
import axios from "axios";
import { addProduct, removeProduct } from "./Cart";
export const userLogin = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        // console.log(res.data)
        localStorage.setItem('aToken', res.data.accessToken)
        localStorage.setItem('userDetail', JSON.stringify(res.data))
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
};
export const logout = async (dispatch) => {
    try {
        dispatch(userLogout());
    } catch (error) {
        console.log("problem logging out")
    }
};
// export const addToCart = (dispatch, item) => {
//     try {
//         console.log("api calls", item)
//         dispatch(addProduct({ item }))
//     } catch (error) {
//         console.log("problem on adding to cart.")
//     }
// }
export const RemoveFromCart = async (dispatch, product) => {
    try {
        dispatch(removeProduct(product))
    } catch (error) {
        console.log("problem on adding to cart.")
    }
}