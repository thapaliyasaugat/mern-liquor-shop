import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./SignIn.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLogin } from "../../redux/apiCalls"
import { publicRequest } from "../../requsetMethod"
const SignIn = () => {
    const [login, setlogin] = useState(true)
    const username = useRef();
    const email = useRef();
    const dispatch = useDispatch()
    const password = useRef();
    const isError = useSelector(state => state.user.error)
    const loading = useSelector(state => state.user.loading)
    if (isError && !loading) { toast("Something goes wrong. Try again") }
    const formSubmit = (e) => {
        e.preventDefault();
        if (login) {
            userLogin(dispatch,
                {
                    email: email.current.value,
                    password: password.current.value
                }
            )

        } else {
            console.log(publicRequest)
            const registerUser = async () => {
                const res = await publicRequest.post("/auth/register", {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value
                })
                // const res = axios.post("http://localhost:5000/api/auth/register", {
                //     username: username.current.value,
                //     email: email.current.value,
                //     password: password.current.value
                // })
                console.log(res);
                setlogin(true)
            }
            registerUser();
        }
    }
    return (
        <div className="signIn">
            <div className="signInContainer">
                <div className="signInTop">
                    <div onClick={() => setlogin(true)} style={{ backgroundColor: login ? "#183964" : "white", color: login ? "white" : "#555" }} className="signInTopItem">
                        Returning Customer? <br /> Login
                    </div>
                    <div onClick={() => setlogin(false)} style={{ backgroundColor: login ? "white" : "#183964", color: login ? "#555" : "white" }} className="signInTopItem">
                        New Customer? <br /> Register
                    </div>
                </div>
                <div className="signInBody">
                    <h2>{login ? "Login" : "Register"}</h2>
                    <p>Please enter Your Detail</p>
                    <form onSubmit={formSubmit}>
                        {!login && <input ref={username} type="text" placeholder="name" />}
                        <input required ref={email} type="email" placeholder="email" />
                        <input required ref={password} type="password" placeholder="password" />
                        <button type='submit'>{login ? "Login" : "Register"}</button>
                        <p onClick={() => setlogin(!login)} style={{ cursor: "pointer" }}>{login ? "Don't have a account" : "Already have account"}</p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
