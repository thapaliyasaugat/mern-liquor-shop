import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeProduct } from '../../redux/Cart'
import axios from 'axios'
import { publicRequest, userRequest } from '../../requsetMethod'
import "./CartContent.css"
import CartProduct from '../cartProduct/CartProduct'
const CartContent = () => {
    const [total, settotal] = useState(0)
    const history = useHistory()
    // const user = useSelector(state => state.user.currentUser)
    const { products } = useSelector(state => state.cart)
    // console.log(products)
    // const currentuser = user?._id;

    useEffect(() => {
        let sum = 0
        products?.map(content => {
            const calcTotal = async () => {
                const prod = await publicRequest.get(`/product/find/${content.productId}`);
                // console.log(prod.data.price)
                sum += prod.data.price * content.quantity
                settotal(sum)
            }
            calcTotal()
        })

    }, [products])


    return (
        <div className="cartContent">
            <div className="cartContentContainer">
                <h2 style={{ margin: "15px 0px" }}>Cart</h2>
                {products?.map((dataa) => (
                    <CartProduct data={dataa.productId} quantity={dataa.quantity} />

                ))}
                <div className="cartDetail">
                    <div className="cartDetailTotal">
                        <h3>Total</h3>
                        {/* <h2>Rs. {total}</h2> */}
                        <h2>Rs. {total}</h2>
                    </div>
                    <div className="cartDetailCharge">
                        <h3>Delivary Charge</h3>
                        <h2>Free</h2>
                    </div>
                    {/* <div className="cartDetailCharge">
                        <h3>Total No of product</h3>
                        <h2>{quantity}</h2>
                    </div> */}
                    <div className="cartDetailGrandTotal">
                        <h3>Grand Total</h3>
                        {/* <h2>Rs. {total}</h2> */}
                        <h2>Rs. {total}</h2>
                    </div>
                </div>
                <div className="cartCheckOut">
                    <button onClick={() => (history.push('/'))}>Continue Shopping</button>
                    <button onClick={() => (history.push('/checkout'))}>CheckOut</button>
                </div>
            </div>
        </div>
    )
}

export default CartContent
