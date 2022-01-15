import React, { useEffect, useState } from 'react'
import { publicRequest, userRequest } from '../../requsetMethod'
import "./CartProduct.css"
import { Add, Delete, Remove } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { addProduct, removeProduct } from "../../redux/Cart"
const CartProduct = ({ data, quantity }) => {
    const dispatch = useDispatch()
    const [productDetail, setproductDetail] = useState({})
    const [proCount, setproCount] = useState(quantity)
    useEffect(() => {
        // console.log("inside effect")
        const proDetail = async () => {
            const res = await publicRequest.get(`/product/find/${data}`)
            setproductDetail(res.data)
            // console.log(res.data)
        }
        proDetail()
    }, [data])

    const proAmtControl = (para) => {
        if (para === "add") {
            setproCount(proCount + 1);
        } else {
            if (proCount != 1) {
                setproCount(proCount - 1)
            } else {

            }
        }
    }

    useEffect(() => {
        dispatch(addProduct({ productId: data, quantity: proCount }));
    }, [proCount])

    const delectFromCart = () => {
        dispatch(removeProduct({ productId: data }))
    }

    return (
        <div className="cartContentBox">
            <div className="cartContentItem">
                <img src={productDetail?.img} alt="" />
                <h2>{productDetail?.title}</h2>
                <h3>{productDetail?.size}</h3>
                <h3>{productDetail?.price}</h3>
                <div className="cartCartCountBox">
                    <div className="cartCartCountLeft" onClick={() => proAmtControl("rem")}><Remove /></div>
                    <div className="cartCartCount">{quantity}</div>
                    <div className="cartCartCountRight" onClick={() => proAmtControl("add")}><Add /></div>
                </div>
                <Delete onClick={delectFromCart} style={{ fontSize: "40px", cursor: "pointer", color: "#8a8787" }} />
            </div>
        </div>
    )
}

export default CartProduct
