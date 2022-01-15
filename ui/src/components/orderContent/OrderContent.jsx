import { produceWithPatches } from '@reduxjs/toolkit/node_modules/immer'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { publicRequest, userRequest } from '../../requsetMethod'
import "./OrderContent.css"


const OrderedProduct = ({ product }) => {
    // console.log("yes in")
    const [productDetail, setproductDetail] = useState({})
    useEffect(() => {
        const detail = async () => {
            const proData = await publicRequest(`/product/find/${product.productId}`);
            // console.log(proData.data)
            setproductDetail(proData.data)
        }
        detail();
    }, [product.productId])
    return (
        <div className="orderedProduct">
            <img src={productDetail.img} alt="" />
            <p>{productDetail.title}</p>
            <h2>{productDetail.price}</h2>
        </div>

    );
}

const OrderDet = ({ data, admin }) => {
    // console.log(data)
    const [userName, setuserName] = useState("")
    const [orderComplete, setorderComplete] = useState(0)
    useEffect(() => {
        const fetchUser = async () => {
            const res = await userRequest.get(`/user/find/${data.userId}`);
            setuserName(res.data.username)

        }
        fetchUser();
    }, [data])
    const completeOrder = async () => {
        try {
            await userRequest.put(`/order/${data._id}`, { status: 'Complete' })
            setorderComplete(1)
        }
        catch (err) {
            console.log("error changing status")
        }
    }
    return (
        <div className="orderData" >
            <p>Order id : {data._id}</p>
            {
                data.products.map((product) => (
                    // console.log(product);
                    <OrderedProduct product={product} />
                ))

            }
            <p>amount : {data.amount}</p>
            <p>status : {data.status}</p>
            {admin === "true" && (
                <div>
                    <p>address : {data.address}</p>
                    <p>Contact-no : {data.phoneNo}</p>
                    <p>user Name : {userName}</p>
                    <p>reference : {data.reference}</p>
                    {data.status === 'pending' && <button onClick={completeOrder}>Order Delivered</button>}
                </div>
            )
            }


        </div >
    );
};




const OrderContent = (props) => {

    const [orderData, setorderData] = useState([])
    const [adminorderData, setadminorderData] = useState([])
    const user = useSelector(state => state.user.currentUser)
    useEffect(() => {
        const orderDetail = async () => {
            const orders = await userRequest.get(`/order/find/${user?._id}`);
            setorderData(orders.data.sort((a, b) => (b.createdAt - a.createdAt)));
            // console.log(orderData)
        }
        orderDetail();
    }, [user?._id])
    useEffect(() => {
        const orderDetail = async () => {
            const orders = await userRequest.get(`/order`);
            console.log(orders.data)
            setadminorderData(orders.data);
        }
        orderDetail();
    }, [])
    return (
        <div className='orderContent'>
            <div className="orderContentContainer">
                <h2>Your Orders</h2>
                {!props.admin && orderData.map(data => (
                    <OrderDet data={data} admin="false" />
                ))}
                {props.admin && adminorderData.map(data => (
                    <OrderDet data={data} admin="true" />
                ))}
            </div>
        </div>
    )
}

export default OrderContent
