import React from 'react'
import "./AdminAdd.css"
import TopInfo from "../../components/topInfo/TopInfo"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import AddProduct from '../../components/addProduct/AddProduct'
const AdminAdd = () => {
    return (
        <div className='adminadd'>
            <div className="adminaddTop">

                <TopInfo />
                <Navbar />
                <AddProduct />
            </div>
            <Footer />
        </div>
    )
}

export default AdminAdd