import React from 'react'
import CartContent from '../../components/cartContent/CartContent'
import CategoryList from '../../components/categoryList/CategoryList'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import TopInfo from '../../components/topInfo/TopInfo'
import { RumData } from "../../data"
import "./Cart.css"
const Cart = () => {
    return (
        <div className="cart">
            <div className="cartTop">
                <TopInfo />
                <Navbar />
                <CategoryList />
                <CartContent />
            </div>
            <Footer />
        </div>
    )
}

export default Cart
