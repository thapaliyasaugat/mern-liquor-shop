import React from 'react'
import "./CategoryList.css"
import { Link } from 'react-router-dom'
const CategoryList = () => {
    return (
        <div className="categoryList">
            <div className="categoryListContainer">
                <Link className="categoryListLink" to={`/products?category=whisky`}> <span >Whisky</span></Link>
                <Link className="categoryListLink" to={`/products?category=vodka`}> <span >Vodka</span></Link>
                <Link className="categoryListLink" to={`/products?category=gin`}> <span >Gin</span></Link>
                <Link className="categoryListLink" to={`/products?category=rum`}> <span >Rum</span></Link>
                <Link className="categoryListLink" to={`/products?category=wine`}> <span >wine</span></Link>
                <Link className="categoryListLink" to={`/products?category=beer`}> <span >Beer</span></Link>

            </div>
        </div>
    )
}

export default CategoryList
