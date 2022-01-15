import React from 'react'
import "./Checkout.css"
import TopInfo from "../../components/topInfo/TopInfo"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import CheckoutForm from '../../components/checkoutForm/CheckoutForm'
const Checkout = () => {
    return (
        <div className='checkout'>
            <div className="checkoutTop">

                <TopInfo />
                <Navbar />
                <CheckoutForm />
            </div>
            <Footer />
        </div>
    )
}

export default Checkout
