import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import CategoryList from '../../components/categoryList/CategoryList'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ProductList from '../../components/productList/ProductList'
import TopInfo from '../../components/topInfo/TopInfo'
import { RumData } from "../../data"
import { publicRequest } from '../../requsetMethod'
import "./Products.css"
const Products = () => {
    const location = useLocation();
    // console.log(location)    
    const [products, setproducts] = useState(null)
    // console.log(products)
    const title = location.search.split("=")[1]
    useEffect(() => {
        const fetchData = async () => {
            const itemList = await publicRequest.get(`/product?category=${title}`)
            setproducts(itemList.data)

        }
        fetchData()

    }, [title, location])
    // console.log(title)
    return (

        <div className="products">
            <div className="productsTop">
                <TopInfo />
                <Navbar />
                <CategoryList />
                <div className="productPageData">

                    <div className="productsPageDataTop">
                        <h2>Sort By </h2>
                        <select>
                            <option value="">newest</option>
                            <option value="">Price Asc</option>
                            <option value="">Price desc</option>
                        </select>
                    </div>
                </div>
                <div className="productPageTilte">
                    <div className="productPageTitleContent">

                        <h2>{title?.toUpperCase()}</h2>
                    </div>
                </div>

                <div className="productsPageItem">
                    <div className="productPageItemContent">

                        {products ? products.map((item) => (
                            < ProductList productPage title="Rum" data={item} key={item.id} />
                        )) : "loading"}
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Products