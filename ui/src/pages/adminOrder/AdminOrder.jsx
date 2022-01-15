import CategoryList from "../../components/categoryList/CategoryList"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import OrderContent from "../../components/orderContent/OrderContent"
import TopInfo from "../../components/topInfo/TopInfo"
import "./AdminOrder.css"

const AdminOrder = () => {
    return (
        <div className='adminOrderPage'>
            <div className="adminOrderPageTop">
                <TopInfo />
                <Navbar />
                <CategoryList />
                <OrderContent admin />
            </div>
            <Footer />
        </div>
    )
}

export default AdminOrder
