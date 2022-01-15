import React from 'react'
import CategoryList from '../../components/categoryList/CategoryList'
import Footer from '../../components/footer/Footer'
import ProductDetail from '../../components/productDetail/ProductDetail'
import TopInfo from '../../components/topInfo/TopInfo'
import { RumData } from "../../data"
import Navbar from "../../components/navbar/Navbar"
import "./Product.css"
const Product = () => {
    return (
        <div className="product">
            <div className="productTop">
                <TopInfo />
                <Navbar />
                <CategoryList />
                <ProductDetail />
            </div>
            <Footer />
        </div>
    )
}

export default Product