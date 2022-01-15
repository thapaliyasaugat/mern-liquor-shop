import React, { useEffect, useState } from 'react'
import AddSlider from '../../components/addSlider/AddSlider'
import CategoryList from '../../components/categoryList/CategoryList'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ProductList from '../../components/productList/ProductList'
import TopInfo from '../../components/topInfo/TopInfo'
import { RumData } from '../../data'
import { publicRequest } from '../../requsetMethod'
import "./Home.css"
const Home = () => {
    const [products, setproducts] = useState(null)
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await publicRequest.get("/product")
            setproducts(res.data)

        }
        fetchProducts()
    }, [])
    return (
        <div className="homePage">
            <TopInfo />
            <Navbar />
            <CategoryList />
            <AddSlider />
            <div className="homeProduct">
                <div className="homeProductContainer">
                    <div className="homeProductContent">
                        <h2>Featured Products</h2>
                        <div className="homeProductList">
                            {products?.slice(0, 6).map((item) => (
                                <ProductList data={item} />
                            ))}
                        </div>
                    </div>
                    <div className="homeProductContent">
                        <h2>Most Demanded</h2>
                        <div className="homeProductList">
                            {products?.slice(0, 3).map((item) => (
                                <ProductList data={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
