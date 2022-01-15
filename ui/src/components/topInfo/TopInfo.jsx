import { Button, Menu, MenuItem } from '@material-ui/core'
import { Home, ShoppingCart, Work } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from "../../redux/apiCalls"
import { toast } from "react-toastify"
import "./TopInfo.css"
import { userRequest } from '../../requsetMethod'
const TopInfo = () => {
    const data = useSelector(state => state.cart.products)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const [cartCount, setcartCount] = useState(0)
    useEffect(() => {
        let count = 0;
        data.map(product => count += product.quantity)
        setcartCount(count)
    }, [data])
    return (
        <div className="topInfo">
            <div className="topInfoContainer">
                <div className="topInfoLeft">
                    <h3><span>Order by Phone: </span> 9831323376</h3>
                    <h3><span>Delivery Hours: </span> 10:30 AM to 08:30 PM (NST)</h3>
                </div>
                <div className="topInfoRight">
                    <Link to="/" className="topInfoItem">
                        <Home />
                        <div className="topInfoItemText">Home</div>
                    </Link>
                    {!user ?
                        <Link to="/login-register" className="topInfoItem">
                            <Work />
                            <div className="topInfoItemText">Register/Login</div>

                        </Link> :
                        <div>
                            <Button style={{ color: "#fff" }} id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                {user.username}</Button>
                            <Menu id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}><Link style={{ color: "#232323", textDecoration: 'none' }} to="/orders">My orders</Link></MenuItem>
                                <MenuItem onClick={() => {
                                    handleClose();
                                    dispatch(logout);
                                }}>Logout</MenuItem>
                            </Menu>
                        </div>
                    }
                    <Link to="/cart" className="topInfoItem">
                        <ShoppingCart />
                        <div className="topInfoItemText">Cart</div>
                        <div className="cartCount">{cartCount}</div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default TopInfo
