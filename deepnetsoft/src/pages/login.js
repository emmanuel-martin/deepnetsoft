import React from 'react'
import Logo from '../assets/logo.png'
import "../styles/login.css"

const Login = () => {

    return (
        <div className="container">

            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>

            <div className="login-box">
                <div className="heading">
                    <span>Login</span>
                </div>
                <label>username: testdomain || password: testdomain</label>
                <input type="text" placeholder="Username" className="input-form" /><br></br>
                <input type="password" placeholder="Password" className="input-form" />
                <a href="/Dashboard" ><button className='button'>Submit</button></a>
            </div>
        </div>
    );

}

export default Login;


