import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {

    const onSubmit = (event: any) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit} />

            <Link to="/register">Register</Link>
        </div>

    )
}

export default Login