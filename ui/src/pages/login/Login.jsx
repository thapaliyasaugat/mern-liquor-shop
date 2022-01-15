import React from 'react'
import CategoryList from '../../components/categoryList/CategoryList'
import Navbar from '../../components/navbar/Navbar'
import TopInfo from '../../components/topInfo/TopInfo'
import Footer from '../../components/footer/Footer'
import SignIn from '../../components/signIn/SignIn'

const Login = () => {
    return (
        <div className="login">
            <TopInfo />
            <Navbar />
            <SignIn />
            <Footer />
        </div>
    )
}

export default Login
