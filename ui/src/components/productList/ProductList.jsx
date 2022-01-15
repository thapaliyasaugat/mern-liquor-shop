import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
// import { addToCart } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import "./ProductList.css"
import { Redirect } from 'react-router-dom';
import { userRequest } from "../../requsetMethod";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addProduct } from '../../redux/Cart';
import axios from 'axios';
const ProductList = ({ data }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const history = useHistory()
    const handleClick = () => {

        try {

            dispatch(addProduct({
                productId: data._id,
                quantity: 1
            }))
            history.push('/cart')
        } catch (err) {
            toast("Problem adding to cart")
        }

    }
    return (
        <div className="productListItem">
            <Link to={`/product/${data._id}`} className="productImageBox">
                <img src={data.img} alt="" />
            </Link>
            <p>{data.title}</p>
            <h3>RS. {data.price}</h3>
            <button onClick={handleClick}>Place Order</button>

        </div>
    )
}
export default ProductList;
