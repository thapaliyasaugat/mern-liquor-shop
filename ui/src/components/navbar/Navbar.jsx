import { Search } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import "./Navbar.css"
const Navbar = () => {
    const user = useSelector(state => state.user.currentUser);
    const admin = user?.isAdmin
    return (
        <div className="navbar">
            <div className="navbarContainer">

                <Link to="/" className="navbarLogo">
                    <img src="/images/logo.png" alt="Logo" />
                    <img src="" alt="" />
                </Link>
                {admin && (
                    <>
                        <Link className='adminNav' to="/admin/orders">order</Link>
                        <Link className='adminNav' to="/admin/add-product">add product</Link>
                    </>
                )}
                <div className="navbarRight">
                    <Search />
                    <input type="search" placeholder="search" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
