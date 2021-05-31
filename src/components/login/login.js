import React from 'react'
import { Redirect } from 'react-router-dom'

function Login({authenticate, isAuth}) {

    if(isAuth){
        return <Redirect to="/" />;
    }

    return (
        <div className="login-box">
            <h1>Login</h1>
            <div className="textbox">
                <input type="text" placeholder="Username" />
            </div>
            <div className="textbox">
                <input type="password" placeholder="Password" />
            </div>
            <button onClick={authenticate}>Sign in</button>
        </div>
    )
}

export default Login
