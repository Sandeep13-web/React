import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

function Login({authenticate , isAuth}) {

    // const [isAuth, setisAuth] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const getToken = async (username, password) => {
    //     const data = { username: username, password: password }
    //     const response = await axios.post('https://photot-explorer.herokuapp.com/auth', data);
    //     setisAuth(true);
    //     localStorage.setItem("token" , response.data.token);
    //     console.log(response);
    // }

    // const authentication = (e) => {
    //     e.preventDefault();
    //     getData(username,password);
    // }

    if (isAuth) {
        return <Redirect to="/" />;
    }


    return (
        <div className="login-box">
            <h1>Login</h1>
            <div className="textbox">
                <input type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
            </div>
            <div className="textbox">
                <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <button onClick={authenticate.bind(null,username,password)}>Sign in</button>
        </div>
    )
}

export default Login
