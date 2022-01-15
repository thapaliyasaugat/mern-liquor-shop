import { AddLocation, Email, Facebook, Home, Instagram, LocationCity, Phone, YouTube } from '@material-ui/icons'
import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="footerFirst">
                    <h2>Useful Links</h2>
                    <div className="footerFirstLinks">
                        <span>Tearms&Conditions</span>
                        <span>Return Policy</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
                <div className="footerSecond">
                    <h2>About Us</h2>
                    <p>Cheers is the largest online liquor store in Nepal that offer an extensive selection of genuine domestic and foreign liquors, beverages, cigarettes, and mixers. We provide free delivery right at your doorstep, with distance coverage up to 6KM outside Ring Road. Our delivery hours are from 10AM to 10PM, and we are open 365 days.</p>
                </div>
                <div className="footerThird">
                    <h2>Get Connected</h2>
                    <div className="footerThirdLinks">
                        <span><Facebook /> </span>
                        <span> <Instagram /></span>
                        <span><YouTube /> </span>
                    </div>
                </div>
                <div className="footerLast">
                    <h2>Contact Us</h2>
                    <div className="footerContact">
                        <div className="footerContactItem">
                            <AddLocation />
                            <p> Address: Kamaladi, Kathmandu</p>
                        </div>
                        <div className="footerContactItem">
                            <Email />
                            <p>  Email: info@cheers.com.np</p>
                        </div>
                        <div className="footerContactItem">
                            <Phone />
                            <p>  Phone: 00000000</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
