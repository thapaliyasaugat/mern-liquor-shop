import React from 'react'
import CategoryList from '../../components/categoryList/CategoryList'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import OrderContent from '../../components/orderContent/OrderContent'
import TopInfo from '../../components/topInfo/TopInfo'
import "./Orders.css"
const Orders = () => {
    return (
        <div className='orderPage'>
            <div className="orderPageTop">
                <TopInfo />
                <Navbar />
                <CategoryList />
                <OrderContent />
            </div>
            <Footer />
        </div>
    )
}

export default Orders
