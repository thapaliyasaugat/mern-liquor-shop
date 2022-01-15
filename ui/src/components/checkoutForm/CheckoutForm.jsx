import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import "./CheckoutForm.css"
import { useDispatch, useSelector } from 'react-redux'
import { publicRequest, userRequest } from '../../requsetMethod'
import { useRef } from 'react'
import { toast } from "react-toastify"
import { emptyCart } from '../../redux/Cart'
const CheckoutForm = () => {
    const history = useHistory();
    const address = useRef()
    const dispatch = useDispatch()
    const reference = useRef()
    const phoneNo = useRef()
    const user = useSelector(state => state.user.currentUser)
    const { products } = useSelector(state => state.cart)
    const [total, settotal] = useState(0)
    useState(() => {
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
    }, [])
    // console.log(typeof (products))
    // console.log("products", products)

    const checkOut = (e) => {
        e.preventDefault();
        const makeOrder = async () => {
            const order = await userRequest.post("/order", {
                userId: user._id,
                products: products,
                amount: total,
                address: address.current.value,
                reference: reference.current.value,
                phoneNo: phoneNo.current.value
            })
            // console.log(order)
            dispatch(emptyCart())
            history.push("/")
            toast("Your Order Placed Sucessfully");
        }
        makeOrder()
    }
    return (
        <div className='checkoutForm'>
            <div className="checkoutFormContainer">
                <h1>CHECKOUT</h1>

                <h2>Delivery Address</h2>
                <div className="checkoutInput">
                    <input type="text" ref={address} placeholder='your location' required />
                </div>
                <div className="checkoutInput">
                    <input type="text" ref={reference} placeholder='Reference - nearest school or hospital' required />
                </div>
                <h2>Contact Detail</h2>
                <div className="checkoutInput">
                    <input type="number" ref={phoneNo} placeholder='Your Phone Number' required />
                </div>
                <p>Cash on delivery. Online payment is yet to implement.</p>
                <div className='checkoutAmt'>Amount To Be Paid: {total}</div>
                <div className="checkoutbottom">
                    <button onClick={() => { history.push("/cart") }}>Back to Cart</button>
                    <button onClick={checkOut}>proceed</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm
