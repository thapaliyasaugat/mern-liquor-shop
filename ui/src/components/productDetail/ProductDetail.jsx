import { Add, Remove } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { publicRequest } from '../../requsetMethod'
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/Cart"
import "./ProductDetail.css"
const ProductDetail = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const location = useLocation()
    const productId = location.pathname.split("/")[2];
    const [userData, setuserData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await publicRequest.get(`/product/find/${productId}`)
            setuserData(res.data)
            // console.log(res.data)
        }
        fetchData();
    }, [productId])

    let [productCount, setproductCount] = useState(1)
    const settleCount = (str) => {
        if (str === "add") {
            setproductCount(productCount + 1)
        } else {
            productCount > 1 && setproductCount(productCount - 1)
        }
    }

    const placeOrder = () => {
        dispatch(addProduct({ productId, quantity: productCount }));
        history.push("/cart")
    }

    return (
        <div className="productDetail">
            <div className="productDetailContainer">
                <div className="productDetailImage">
                    <img src={userData && userData.img} alt="" />
                </div>
                <div className="productDetailData">
                    <h2 style={{ color: "#8a571d" }}>{userData && userData.title} </h2>
                    <h2>Volume: {userData && userData.size}</h2>
                    {/* <h2>Brand: Aberfeldy</h2> */}
                    <h2>Category: {userData && userData.categories}</h2>
                    <h2>Price: {userData && userData.price}</h2>
                    <p>{userData?.desc}</p>
                </div>
                <div className="productDetailCartCountBox">
                    <div className="productDetailCartCountBoxWrapper">
                        <div className="productDetailCartCountLeft"><Remove onClick={() => settleCount("remove")} /></div>
                        <div className="productDetailCartCount">{productCount}</div>
                        <div className="productDetailCartCountRight" ><Add onClick={() => settleCount("add")} /></div>
                    </div>
                    <button onClick={placeOrder}>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
